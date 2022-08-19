<template>
  <div class="app-container" id="app">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view  :key="$route.fullPath">
        </router-view>
      </keep-alive>
      <router-view v-else :key="$router.fullPath">
        <!-- 这里是不被缓存的视图组件，比如 page3 -->
      </router-view>
    
  </div>
</template>
<script>
export default {
  
};
</script>
