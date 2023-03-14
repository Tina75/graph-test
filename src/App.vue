<template>
  <p class="header">
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/vis">Go to Home</router-link>
    <router-link to="/visRewrite">Go to About</router-link>
    <router-link to="/g6demo">g6demo</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  a {
    margin: 0 10px;
  }
}
</style>
