<template>
  <div class="activeBlog container">
    <div class="row">
      <div class="card col mt-5" v-if="blog.id">
        <div class="card-header">{{blog.creator.name}}</div>
        <div class="card-body">
          <img
            class="card-img-top rounded p-1"
            :src="blog.imgUrl || 'https://www.artmarketstudies.org/wp-content/uploads/2016/10/blogging.jpg'"
            alt
          />
          <h5 class="card-title">{{blog.title}}</h5>
          <p class="card-text">{{blog.body}}</p>
          <div v-if="blog.creatorEmail == profile.email">
            <button
              class="btn btn-danger"
              @click="deleteBlog"
              v-if="profile.email == blog.creatorEmail"
            >Delete</button>
            <form class="d-flex form-inline col mt-2" @submit.prevent="editBlog">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="editBlogData.body"
                  placeholder="Edit BlogBody..."
                />
                <input
                  type="text"
                  class="form-control"
                  v-model="editBlogData.title"
                  placeholder="Edit BlogTitle..."
                />
                <button class="btn btn-warning" type="submit">Edit Blog</button>
              </div>
            </form>
          </div>
        </div>
        <form class="d-flex form-inline col mb-2" @submit.prevent="addComment">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="newComment.body"
              placeholder="Add Comment..."
            />
            <button class="btn btn-success">Add</button>
          </div>
        </form>
      </div>
    </div>
    <div class>
      <comment-comp v-for="comment in comments" :key="comment.id" :commentProp="comment" />
    </div>
  </div>
</template>


<script>
import CommentComp from "../components/CommentComp.vue";
export default {
  name: "activeBlog",
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.id);
    this.$store.dispatch("getCommentsByBlogId", this.$route.params.id);
    this.$store.dispatch("getProfile");
  },
  data() {
    return {
      newComment: {
        creatorEmail: this.$store.state.profile.email,
        blog: this.$route.params.id,
      },
      editBlogData: {
        id: this.$route.params.id,
      },
    };
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
    profile() {
      return this.$store.state.profile;
    },
    comments() {
      return this.$store.state.comments;
    },
  },
  methods: {
    async addComment() {
      await this.$store.dispatch("addComment", this.newComment);
      //REVIEW i know this cant be right
      this.newComment.body = null;
    },
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blog.id);
    },
    //REVIEW i dont know what im doing ask a professional
    async editBlog() {
      await this.$store.dispatch("editBlog", this.editBlogData);
      this.editBlogData.title = null;
      this.editBlogData.body = null;
    },
  },
  components: {
    CommentComp,
  },
};
</script>


<style scoped>
img {
  height: 500px;
  width: auto;
}
input {
  width: 80%;
}
</style>