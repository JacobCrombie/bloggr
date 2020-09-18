import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs:[],
    activeBlog:{}

  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setAllBlogs(state, blogs){
      state.blogs= blogs
    },
    setActiveBlog(state, activeBlog){
      state.activeBlog = activeBlog
    }
    
  },
  actions: {
    async getAllBlogs({commit,dispatch}){
      try {
        let res = await api.get('blogs')
        commit("setAllBlogs", res.data)
        console.log(res);
      } catch (error) {
        
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
    async getActiveBlog({commit,dispatch},blogId){

      let res = await api.get('blogs/'+blogId,)
      console.log(res);
      commit('setActiveBlog', res.data)
    }
  },
});
