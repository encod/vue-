import NativeBridge from './bridge'
function bridgePlugin (Vue, carisokConfig) {
    Vue.prototype.$bridge = new NativeBridge(carisokConfig)
}

function useBridge (Vue, carisokConfig) {
    Vue.use(bridgePlugin, carisokConfig)
}

export default useBridge
