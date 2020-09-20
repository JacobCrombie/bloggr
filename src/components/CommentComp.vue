<template>
  <div class="comment">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{commentProp.creator.name}}</h4>
        <p class="card-text">{{commentProp.body}}</p>
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
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>