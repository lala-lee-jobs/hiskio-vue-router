<template>
  <div>
    <div class="menu">
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
      <router-link :to="{name: 'prod', params: {id:18}}">Product 18</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
</script>
<style lang="scss">
</style>