<template lang="html">
    <div class="pageNotFound">
        <p class="tip1">请求的路由为：{{ routePath }}</p>
        <p class="tip2">没有找到对应的页面，请检查</p>
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
    background-image url('../../assets/images/common/nofound.jpg')
    background-repeat no-repeat
    background-position-x 50%
    background-position-y 50%
    .tip1
        margin-top 200px
    .tip2
        margin 80px
</style>
