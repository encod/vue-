/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('.', false, /\.js$/)
const modules = {}
const actions = {}
const getters = {}

files.keys().forEach((key) => {
    if (key === './index.js') return

    const vuexObj = files(key)

    modules[key.replace(/(\.\/|\.js)/g, '')] = vuexObj.default

    if (vuexObj.actions) Object.assign(actions, vuexObj.actions)
    if (vuexObj.getters) Object.assign(getters, vuexObj.getters)
})

export default {
    actions,
    getters,
    modules,
}
