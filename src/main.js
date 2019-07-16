// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import prepare from './components/Prepare'
import store from './store'
import ajax from './http/ajax'
Vue.$store = store
Vue.$router = router
Vue.prototype.$ajax = ajax
Vue.config.productionTip = false
prepare(Vue)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
