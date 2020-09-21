<template>
  <div class="comment">
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">{{commentProp.creatorEmail}}</h6>
        <p class="card-text">{{commentProp.body}}</p>
      </div>
      <div class="col" v-if="commentProp.creatorEmail == profile.email">
        <button
          class="btn btn-danger col-4"
          v-if="profile.email == commentProp.creatorEmail"
          @click="deleteComment()"
        >Delete</button>
        <form class="d-flex form-inline col mb-2" @submit.prevent="editComment(commentProp.id)">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="editCommentData.body"
              placeholder="Edit Comment..."
            />
            <button class="btn btn-warning">Edit Comment</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "comment",
  props: ["commentProp"],
  data() {
    return {
      editCommentData: {},
    };
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
    //REVIEW i know this is wrong too but it does work
    async editComment(cId) {
      await this.$store.dispatch("editComment", {
        body: this.editCommentData.body,
        id: cId,
        blog: this.commentProp.blog,
      });
      this.editCommentData.body = null;
    },
  },
  components: {},
};
</script>


<style scoped>
</style>