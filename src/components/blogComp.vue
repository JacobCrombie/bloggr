<template>
  <div class="blog col-3">
    <router-link :to="{name: 'ActiveBlog', params:{id: blogProp.id}}">
      <div class="card my-1">
        <div class="card-header">{{blogProp.creatorEmail}}</div>
        <img
          class="card-img-top rounded p-1"
          :src="blogProp.imgUrl || 'https://www.artmarketstudies.org/wp-content/uploads/2016/10/blogging.jpg'"
          alt
        />
        <div class="card-body">
          <h4 class="card-title truncate">{{blogProp.title}}</h4>
          <p class="card-text truncate">{{blogProp.body}}</p>
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
img {
  height: 150px;
  width: auto;
}
.truncate {
  width: 20vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>