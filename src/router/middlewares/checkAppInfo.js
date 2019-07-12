import Vue from 'vue'
import store from '../../store'
import resolveAppInfo from '../../components/Mounted/resolveAppInfo'
import useBridge from '../../utils/useBridge'

export default (router) => {
    let initFlag = false
    router.beforeEach((to, from, next) => {
        if (!initFlag) {
            initFlag = true
            resolveAppInfo(async (config) => {
                useBridge(Vue, config)
                store.dispatch('initAppInfo', config)
                next()
            })
        } else {
            next()
        }
    })
}
