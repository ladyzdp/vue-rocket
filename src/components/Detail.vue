<template>
  <div>
    详情测试页面
    <h4>params:{{ $route.params }}</h4>
    <h4>query:{{ $route.query }}</h4>
    <img src="/cat.jpg" alt="" v-if="$route.params.type =='cat'" />
    <img src="/dog.jpg" alt="" v-if="$route.params.type =='dog'"/>
  </div>
</template>
