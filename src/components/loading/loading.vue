<template lang="html">
   <div class="box" v-if="show">
      <div class="loader"></div>
  </div>
</template>
<script lang="babel">
export default {
    props: ['msg'],
    data () {
        return {
            show: true
        }
    }
}
</script>
<style lang="stylus" scoped>
.box
    position absolute
    z-index 10001
    top 0
    left 0
    width 100%
    height 100%
    display inline-block
    font-size 30px
    color rgba(200, 200, 200, 0.5)
    vertical-align top
    -webkit-transition .3s color, .3s border
    transition .3s color, .3s border
    color #000
    border-width 3px
    line-height 200px
    font-size 70px
    background-color rgba(0, 0, 0, 0.4)

.loader
    width 130px
    height 130px
    -webkit-transform rotateZ(45deg)
    transform rotateZ(45deg)
    -webkit-perspective 1000px
    perspective 1000px
    border-radius 50%
    margin 500px auto
.loader:before,
.loader:after
    content ''
    display block
    position absolute
    top 0
    left 0
    width inherit
    height inherit
    border-radius 50%
    -webkit-animation 1s spin linear infinite
    animation 1s spin linear infinite
.loader:before
    -webkit-transform rotateX(70deg)
    transform rotateX(70deg)
.loader:after
    -webkit-transform rotateY(70deg)
    transform rotateY(70deg)
    -webkit-animation-delay .4s
    animation-delay .4s
@-webkit-keyframes spin
    0%, 100%
        box-shadow .2em 0px 0 0px currentcolor
    12%
        box-shadow .2em .2em 0 0 currentcolor
    25%
        box-shadow 0 .2em 0 0px currentcolor
    37%
        box-shadow -.2em .2em 0 0 currentcolor
    50%
        box-shadow -.2em 0 0 0 currentcolor
    62%
        box-shadow -.2em -.2em 0 0 currentcolor
    75%
        box-shadow 0px -.2em 0 0 currentcolor
    87%
        box-shadow .2em -.2em 0 0 currentcolor
@keyframes spin
    0%, 100%
        box-shadow .2em 0px 0 0px currentcolor
    12%
        box-shadow .2em .2em 0 0 currentcolor
    25%
        box-shadow 0 .2em 0 0px currentcolor
    37%
        box-shadow -.2em .2em 0 0 currentcolor
    50%
        box-shadow -.2em 0 0 0 currentcolor
    62%
        box-shadow -.2em -.2em 0 0 currentcolor
    75%
        box-shadow 0px -.2em 0 0 currentcolor
    87%
        box-shadow .2em -.2em 0 0 currentcolor
</style>
