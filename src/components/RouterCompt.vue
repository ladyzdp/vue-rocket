<template>
  <div>
    <router-link class="mr10" to="/router">Router</router-link>
    <router-link class="mr10" tag="strong" :to="{ path: '/router/detail/cat', query: { type: 123 } }"
      >Router detail</router-link
    >
    <router-link class="mr10" to="/router/keepAlive">keepAlive</router-link>
    <!-- <a class="mr10" @click="goToDetail">Router detail</a>
    <a class="mr10" @click="goToKeepAlive">keepAlive</a> -->
   
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created(){
    console.log(this.$router)
    console.log(this.$route)
  },
  methods: {
    goToDetail() {
      this.$router.push({ path: '/router/detail/cat', query: { type: 123 } })
    },
    goToKeepAlive() {
      this.$router.push('/router/keepAlive')
    },
  },
}
</script>
<style lang="css" scopes>
.mr10 {
  margin-right: 10px;
}
</style>
