
/**
 * 移除 DOM
 * @param el DOM 元素
 */
const remove = (el) => {
    el.parentNode.removeChild(el)
}

/**
 * 相当于 window.onload 。如果是已经 onload 之后调用，回调函数会立刻执行。
 * 如果还没有，则等待 onload 触发之后执行。
 * @param callback 略
 */
const documentLoaded = (callback) => {
    if (document.readyState === 'complete') {
        callback()
    } else {
        window.addEventListener('load', () => {
            callback()
        })
    }
}

/**
 * 相当于 $.ready(callback) 。如果 document ready 事件已经触发了，回调函数会立刻执行。
 * 如果还没有触发，则等待触发之后执行。
 * @param callback 略
 */
const documentReady = (callback) => {
    if (document.readyState !== 'loading') {
        callback()
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            callback()
        })
    }
}

export {
    remove,
    documentLoaded,
    documentReady
}

export default {
    remove,
    documentLoaded,
    documentReady
}
