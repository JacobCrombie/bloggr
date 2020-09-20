import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    myBlogs: [],
    comments: []

  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setAllBlogs(state, blogs) {
      state.blogs = blogs
    },
    setActiveBlog(state, activeBlog) {
      state.activeBlog = activeBlog
    },
    addBlog(state, blog) {
      state.blogs.push(blog)
    },
    setMyBlogs(state, myBlogs) {
      state.myBlogs = myBlogs
    },
    addComment(state, comment) {
      state.comments.push(comment)
    },
    setAllComments(state, comments) {
      state.comments = comments
    }

  },
  actions: {
    async getAllBlogs({ commit, dispatch }) {
      try {
        let res = await api.get('blogs')
        commit("setAllBlogs", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getActiveBlog({ commit, dispatch }, blogId) {
      try {
        let res = await api.get('blogs/' + blogId,)
        console.log(res);
        commit('setActiveBlog', res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createBlog({ commit, dispatch }, newBlog) {
      try {
        let res = await api.post('blogs', newBlog)
        commit("addBlog", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    getMyBlogs({ commit, dispatch }) {
      let myBlogs = []
      let blogs = this.state.blogs
      for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        if (blog.creatorEmail == this.state.profile.email) {
          myBlogs.push(blog)
        }
      }
      commit('setMyBlogs', myBlogs)
    },
    async getCommentsByBlogId({ commit, dispatch }, blogId) {
      try {
        let res = await api.get('blogs/' + blogId + '/comments')
        commit('setAllComments', res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addComment({ commit, dispatch }, commentData) {
      try {
        let res = await api.post('comments', commentData)
        commit('addComment', res.data)
        dispatch("getCommentsByBlogId", commentData.blog)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteComment({ commit, dispatch }, comment) {
      try {
        await api.delete("comments/" + comment.id)
        dispatch('getCommentsByBlogId', comment.blog)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteBlog({ commit, dispatch }, id) {
      try {
        await api.delete('blogs/' + id)
        dispatch('getAllBlogs')
        router.push({ name: 'Home' })
      } catch (error) {
        console.error(error);
      }
    }
  },
});
