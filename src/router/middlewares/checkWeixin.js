// 判断是否是微信环境
import Vue from 'vue'

export default (router) => {
    router.beforeEach((to, from, next) => {
        const ua = navigator.userAgent
        const isWeixin = !!ua.match(/MicroMessenger/i)

        Vue.$store.dispatch('checkIsWeixin', isWeixin)
        next()
    })
}
