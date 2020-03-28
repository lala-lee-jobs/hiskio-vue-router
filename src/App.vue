<template>
  <div>
    <div class="menu">
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import VueRouter from 'vue-router'
import Products from './Products.vue';
import About from './About.vue';
import AboutHome from './AboutHome.vue';
import AboutUs from './AboutUs.vue';
import AboutYou from './AboutYou.vue';

export default {
  // 注入路由器
  router : new VueRouter({
    routes: [
      { path: '/about', 
        component: About,
        children: [
          { path: '', component: AboutHome },
          { path: 'us', component: AboutUs },
          { path: 'you', component: AboutYou },
        ]
      },
      {path: '/products', component: Products},
    ],
  })
}
</script>
<style lang="scss">
  
</style>