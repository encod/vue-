import _ from 'lodash'
import {
    setLocalConfig,
    getLocalConfig,
} from '../../utils/storage'

export const resovleCarisokConfig = () => {
    let finalConfig = {}
    if (!window.carisokConfig) {
        window.carisokConfig = getLocalConfig()
        // b2b跳转商城活动跳转 为window.name
        if (!_.isEmpty(window.name)) {
            try {
                window.carisokConfig = JSON.parse(window.name)
            } catch (error) {
                window.name = ''
                window.carisokConfig = {}
            }
            setLocalConfig(window.carisokConfig)
            finalConfig = window.carisokConfig
        }
    } else {
        finalConfig = window.carisokConfig
        if (window.carisokConfig.token_type !== 'weChat') setLocalConfig(window.carisokConfig)
    }

    if (_.isEmpty(window.carisokConfig))  {
        // 重置掉 window.carisokConfig
        window.carisokConfig = null
    } else {
        finalConfig = window.carisokConfig
    }

    return finalConfig
}

export default {}
