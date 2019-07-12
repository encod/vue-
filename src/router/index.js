import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import applyMiddleware from './applyMiddleware'

Vue.use(Router)

const router =  new Router({
    routes,
})
applyMiddleware(router)

export default router
