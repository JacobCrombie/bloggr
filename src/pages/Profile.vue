<template>
  <div class="profile container">
    <div class="row about">
      <div class="col text-center">
        <h1>Welcome {{ profile.name }}</h1>
        <img class="rounded" :src="profile.picture" alt />
        <p>{{ profile.email }}</p>
      </div>
    </div>
    <div class="row">
      <my-blogs v-for="blog in myBlogs" :key="blog.id" :myblogProp="blog" />
    </div>
  </div>
</template>

<script>
import MyBlogs from "../components/MyBlogs.vue";
export default {
  name: "profile",
  mounted() {
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getMyBlogs");
  },
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    myBlogs() {
      return this.$store.state.myBlogs;
    },
  },
  methods: {},
  components: {
    MyBlogs,
  },
};
</script>

<style scoped>
img {
  height: 200px;
  width: auto;
}
</style>