<template lang="html">
    <transition
        name="slide">
        <div class="component-toast" v-if="show">
            <div class="msg">
                {{msg}}
            </div>
        </div>
    </transition>
</template>
<script lang="babel">
export default {
    props: ['msg'],
    data () {
        return {
            show: false
        }
    },
    created () {
        this.show = true
    },
    mounted () {
        setTimeout(() => {
            this.show = false
        }, 2000)
    }
}
</script>
<style lang="stylus" scoped>
@keyframes slideInDown
    0%
        transform translateY(0)
        visibility visible
        opacity .6
    100%
        transform translateY(100%)
        opacity 0
.slideInDown
    animation-name slideInDown

@keyframes slideInUp
    0%
        transform translateY(100%)
        opacity 0
    100%
        transform translateY(0)
        visibility visible
        opacity .6
.slideInUp
    animation-name slideInUp
.slide-enter-active
    animation slideInUp .3s

.slide-leave-active
    animation slideInDown .3s

.component-toast
    position absolute
    z-index 10000
    bottom 5%
    width 100%
    text-align center
    color #fff
    font-size 28px
    .msg
        border-radius 8px
        display inline-block
        background-color rgba(0,0,0, 0.4)
        padding 16px 28px

</style>
