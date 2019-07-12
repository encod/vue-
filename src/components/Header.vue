<template >
    <header class="componentHeader">
        <div class="headMain">
            <div class="left">
                <slot name="left" />
            </div>
            <div class="title">
                <slot name="title" />
            </div>
            <div class="search">
                <slot name="search" />
            </div>
            <div class="right">
                <slot name="right" />
            </div>
        </div>
    </header>
</template>
<script lang="babel">
export default {
    name: 'acaHeader'
}
</script>
<style lang="stylus" scoped>

.componentHeader
    height 88px
    width: 100%
    background #fff
    position absolute
    top 0
    left 0
    z-index 100
    line-height 88px
    font-size 32px
    text-align center
.headMain
    background-color #fff
    color #333
    position absolute
    width 100%
    height 88px
    left 0
    top 0
    z-index 10
    box-shadow rgba(0,0,0, .3) 0 1px 4px
.title
    padding 0 80px
    height 88px
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
.search
    position absolute
    top 0
    left 0
    width 100%
    height 88px
    z-index 80
.left, .right
    padding 0 10px
    position absolute
    top 0
    font-size 28px
    z-index 100
.left
    left 0
.right
    right 0
    padding 0 30px

</style>
