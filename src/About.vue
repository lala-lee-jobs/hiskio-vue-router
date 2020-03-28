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
        <!-- 具名視圖 -->
        <router-link to="/about/us">Us</router-link>
        <router-link to="/about/you">You</router-link>
        <router-link to="/about/both">Both</router-link>  
        <router-view name="u" />
        <router-view name="y" />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    
</style>