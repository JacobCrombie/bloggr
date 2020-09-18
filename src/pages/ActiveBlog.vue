<template>
  <div class="activeBlog container">
    <div class="row">
      <div class="card col mt-5" v-if="blog.id">
        <div class="card-header">{{blog.creator.name}}</div>
        <div class="card-body">
          <h5 class="card-title">{{blog.title}}</h5>
          <p class="card-text">{{blog.body}}</p>
          <div class="form-group">
            <div class="d-flex form-inline col">
            <input type="text"
                class="form-control" placeholder="Add Comment...">
            <button class="btn btn-success">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "activeBlog",
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.id);
  },
  data() {
    return {};
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
input{
  width:80%;
}
</style>