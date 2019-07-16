import usePlugins from './usePlugins'
import startAjax from './startAjax'

export default (Vue) => {
    usePlugins(Vue)
    startAjax()
}
