<template>
    <div>
        <h1>Products</h1>
        <h2>{{productID}}</h2>
    </div>
</template>
<script>
export default {
    computed: {
        productID() {
            return this.$route.query.id;
        }
    }
}
</script>