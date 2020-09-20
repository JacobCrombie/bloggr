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
          <button
            class="btn btn-danger"
            @click="deleteBlog"
            v-if="profile.email == blog.creatorEmail"
          >Delete</button>
          <form class="d-flex form-inline col" @submit.prevent="addComment">
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
  },
  data() {
    return {
      newComment: {
        creatorEmail: this.$store.state.profile.email,
        blog: this.$route.params.id,
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
    addComment() {
      this.$store.dispatch("addComment", this.newComment);
    },
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blog.id);
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