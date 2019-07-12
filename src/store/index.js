import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import modules from './modules'

Vue.use(Vuex)

const isRelease = process.env.NODE_ENV === 'production'

const debug = !isRelease && process.env.NODE_ENV !== 'testing'

export default new Vuex.Store({
    ...modules,
    strict: debug,
    // store中使用的插件
    plugins: debug ? [createLogger()] : [],
})
