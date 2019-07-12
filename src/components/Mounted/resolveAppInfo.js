
import browser from '../../utils/ua'
import {
    documentLoaded
} from '../../utils/dom'
import { resovleCarisokConfig } from './utils'

/**
 * 等待 carisokConfig 可用之后执行回调函数。
 * 在 ios 下面，carisokConfig 注入会不确定延迟（window.onload 附近）
 * 在 android 下面，则不需要等待，立即执行回调函数
 * @param callbak 回调函数
 */
function carisokConfigDefer (callbak) {
    if (browser.ios) {
        documentLoaded(() => {
            const config =  resovleCarisokConfig()
            setTimeout(callbak.bind(null, config), 10)
        })
    } else {
        const config = resovleCarisokConfig()
        callbak(config)
    }
}

export default carisokConfigDefer
