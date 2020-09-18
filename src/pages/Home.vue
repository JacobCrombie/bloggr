<template>
  <div class="home container-fluid">
    <h1>Welcome</h1>
    <div class="row">
    <blog-comp v-for="blog in blogs" :key="blog.id" :blogProp="blog"/>
    </div>
  </div>
</template>


<script>
import BlogComp from '../components/blogComp.vue'
export default {
  name: 'home',
  mounted(){
    this.$store.dispatch('getAllBlogs')
  },
  data(){
    return {}
  },
  computed:{
    blogs(){
      return this.$store.state.blogs
    }
  },
  methods:{},
  components:{
    BlogComp
  }
}
</script>


<style scoped>

</style>

