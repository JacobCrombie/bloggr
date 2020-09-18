<template>
  <div class="blog col-3">
    <router-link :to="{name: 'ActiveBlog', params:{id: blogProp.id}}"> 
    <div class="card">
      <img class="card-img-top" :src="blogProp.creator.picture" alt />
      <div class="card-body">
        <h4 class="card-title">{{blogProp.title}}</h4>
        <p class="card-text">{{blogProp.body}}</p>
      </div>
    </div>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "blog",
  props: ["blogProp"],
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