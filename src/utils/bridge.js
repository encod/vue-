
import _ from 'lodash'
import eventBus from './eventBus'
class NativeBridge {
    static ACTION = {
        OPEN_SHARE: 'openShare',
        GOBACK: 'goBack',
    };

    static APP = {
        STORE: 'store'
    };

    static PLATFORM = {
        ANDROID: 'android',
        IOS: 'IOS'
    };

    info = {};

    constructor (nativeInfo) {
        this.info = nativeInfo
        window.invokeJS = this.invokeJS
    }
    invokeJS (actionJSON) {
        try {
            if (_.isString(actionJSON)) {
                const {
                    type,
                    data
                } = JSON.parse(actionJSON)
                eventBus.$emit(type, data)
            } else {
                const {
                    type,
                    data
                } = actionJSON
                eventBus.$emit(type, data)
            }
        } catch (err) {
            // 发生错误之后，不发送事件，让上层业务逻辑获取到 reject 请情况。
            console.error(`${err.name}:${err.message}`)
        }
    }

    /**
     * 当前环境是否是门店
     */
    isStore () {
        return this.info.app_name === NativeBridge.APP.STORE
    }
    /**
     *  统一区分platform
     * @param data 略
     */
    /**
     * 调用安卓暴露的方法
     * @param data 略
     */
    android (data) {
        window.carisok.globalEventNavigate(data)
    }
    /**
     * 调用 ios 暴露的方法
     * @param data 略
     */
    ios (data) {
        window.callNative(data)
    }
    /**
     * v3.3 以上ios换方法
     * @param data 略
     */
    iosUp (data) {
        window.webkit.messageHandlers.callNative.postMessage(data)
    }
}

export default NativeBridge
