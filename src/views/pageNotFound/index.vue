<template lang="html">
    <div class="pageNotFound">
        <p class="tip">请求的路由为：{{ routePath }}</p>
        <p class="tip">没有找到对应的页面，请检查</p>
    </div>
</template>

<script>
export default {
    computed: {
        routePath () {
            return this.$route.fullPath
        }
    },
    mounted () {
        this.$emit('setHeader', {
            title: '页面错误'
        })
    }
}
</script>

<style lang="stylus" scoped>

.pageNotFound
    font-size 32px
    color $fcGrey
    text-align center
    margin-top 50%
    .tip
        margin 100px
</style>
