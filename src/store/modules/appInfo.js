import * as MUTATION from '../mutationTypes'

const state = {
    isWeixin: false,
}

const mutations = {
    [MUTATION.CHECK_WEIXIN] (state, isWX) {
        state.isWeixin = isWX
    },
    [MUTATION.INIT_APP_INFO] (state, config) {
    },
}

export const actions = {
    checkIsWeixin ({ commit }, isWX) {
        commit(MUTATION.CHECK_WEIXIN, isWX)
    },
    initAppInfo ({ commit }, config) {
        commit(MUTATION.INIT_APP_INFO, config)
    },

}

export const getters = {
    isApp (state) {
        return state.appInfo.app_name ? 1 : 0
    }
}

export default {
    state,
    mutations,
}
