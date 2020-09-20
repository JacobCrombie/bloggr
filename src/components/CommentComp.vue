<template>
  <div class="comment">
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">{{commentProp.creatorEmail}}</h6>
        <p class="card-text">{{commentProp.body}}</p>
      </div>
      <div class="col">
        <button
          class="btn btn-danger col-4"
          v-if="profile.email == commentProp.creatorEmail"
          @click="deleteComment()"
        >Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "comment",
  props: ["commentProp"],
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", this.commentProp);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>