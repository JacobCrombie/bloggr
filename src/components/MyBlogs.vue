<template>
  <div class="myblogs col-4">
    <router-link :to="{name: 'ActiveBlog', params:{id: myblogProp.id}}">
      <div class="card my-1">
        <img
          class="card-img-top rounded p-1"
          :src="myblogProp.imgUrl || 'https://www.artmarketstudies.org/wp-content/uploads/2016/10/blogging.jpg'"
          alt
        />
        <div class="card-body">
          <h4 class="card-title truncate">{{myblogProp.title}}</h4>
          <p class="card-text truncate">{{myblogProp.body}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "myblogs",
  props: ["myblogProp"],
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