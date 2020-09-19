<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col my-3" v-if="profile.email">
        <h3>Create a Blog</h3>
        <form class="form-inline" @submit.prevent="createBlog">
          <div class="form-group">
            <input
              type="text"
              v-model="newBlog.title"
              class="form-control"
              placeholder="Title"
              required
            />
            <input
              type="text"
              class="form-control"
              v-model="newBlog.body"
              placeholder="Body"
              required
            />
            <input type="text" class="form-control" v-model="newBlog.imgUrl" placeholder="Img Url" />
            <input type="text" class="form-control" v-model="newBlog.tags" placeholder="Tags#" />
          </div>
          <button type="submit" class="btn btn-success">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
    <div class="row">
      <blog-comp v-for="blog in blogs" :key="blog.id" :blogProp="blog" />
    </div>
  </div>
</template>


<script>
import BlogComp from "../components/blogComp.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  data() {
    return {
      newBlog: {
        creatorEmail: this.$store.state.profile.email,
        imgUrl: "",
        tags: [""],
      },
    };
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    createBlog() {
      console.log();
      this.$store.dispatch("createBlog", this.newBlog);
      this.newBlog = {};
    },
  },
  components: {
    BlogComp,
  },
};
</script>


<style scoped>
</style>
