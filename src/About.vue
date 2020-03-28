<template>
    <div>
        <h1>About</h1>
        <!-- 子路由
        <router-link to="/about/us">Us</router-link>
        <router-link to="/about/you">You</router-link>
        <router-view></router-view> 
        -->    
        <!-- 具名路由
        <router-link :to="{name:'aus'}">Us</router-link>
        <router-link :to="{name:'ayou'}">You</router-link>
        <router-view></router-view>
        -->
        <!-- 具名視圖 沒有 name 就默認名字為default -->
        <router-link to="/about/us">Us</router-link>
        <router-link to="/about/you">You</router-link>
        <router-link to="/about/both">Both</router-link>  
        <router-view />
        <router-view name="another" />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    
</style>