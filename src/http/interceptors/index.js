import _ from 'lodash'

import apiMap from '../../api/apiMapping'
import task from '../../utils/task'
import {serialize} from '../../utils/query'
import {generateUUID} from '../../utils/uuid'
import store from '../../store/index' // 获取token
import errorCode from '../errorCode'
import errorHandlers from '../errorHandlers'
import {API_VERSION, APP_NAME, API_HOST} from '../../constants'
const commonParams = {
    __trace_id: generateUUID(APP_NAME),
    api_version: API_VERSION,
}
function isAbsoulteUrl (src) {
    return src.match(/^(http|https|\/\/)/g)
}
/**
 * 将 apiName, url 等按照优先级处理，转化成实际的 api 地址。
 * @param config 发送请求时候传入的配置
 */
export function resolveConfigUrl (config) {
    console.log('resolveConfigUrl', config)
    const reqUrl = apiMap[config.apiName] || config.url
    let apiHost = API_HOST[GLOBAL_API_ENV]
    if (!reqUrl) {
        return Promise.reject(new Error('request url cannot be empty'))
    }

    if (!_.endsWith(apiHost, '/')) {
        apiHost += '/'
    }
    const isAbsolute = isAbsoulteUrl(reqUrl)
    config.url = isAbsolute ? reqUrl : (apiHost + reqUrl)

    if (isAbsolute) {
        delete config.params.token
    }

    return _.omit(config, 'apiName')
}

/**
 * 给 errors 一个默认值。 errors 用户需要处理的错误代码。如果定义了，axios会将写错误的情况都交给使用者处理
 * @param config 发送请求时候传入的配置
 */
export function resolveConfigErrors (config) {
    console.log(config, 'resolveConfigErrors')
    const {errors} = config

    if (!errors) {
        config.errors = []
    }
    return config
}

/**
 * 将 config.data 序列化成 application/x-www-form-urlencoded
 * @param config 发送请求时候传入的配置
 */
export function resolveConfigPostData (config) {
    console.log(config, 'resolveConfigPostData')

    const {method} = config
    if (method && method.toLowerCase() === 'post') {
        config.data = serialize(config.data || {})
    }
    return config
}

/**
 * 添加一些系统级别的参数和默认参数
 * @param config 发送请求时候传入的配置
 */
export function  resolveConfigParams (config) {
    console.log(config, 'resolveConfigParams')
    return new Promise((resolve, reject) => {
        task.exec(() => {
            config.params = config.params || {}
            const judgeParams = {}
            if (config.apiName && apiMap.hasOwnProperty(config.apiName)) {
                _.extend(judgeParams, commonParams)
                const params = {
                    token: store.state.appInfo.token,
                    ...judgeParams,
                }
                _.extend(config.params, params)
            }
            config.paramsSerializer  = serialize

            const method = config.method

            if (method.toUpperCase() === 'GET' && config.data) {
                delete config.data
            }
            resolve(config)
        }, {level: task.consumptionLevel.min})
    })
}

/**
 * 根据错误码和 config.errors 来做不同的处理
 * @param res ResponseData
 */
export function handleErrorCode (res) {
    const data = res.data
    const errCode = Number(data.errcode)
    const errMsg = data.errmsg || errorCode[errCode] || '未定义错误'
    if (errCode === 0) {
        return res
    } else if (_.indexOf(res.config.errors, errCode) > -1) {
        return Promise.reject(res)
    } else if (_.has(errorHandlers, errCode)) {
        const handler = (errorHandlers)[errCode]
        handler(errCode, errMsg)
    } else {
        errorHandlers.default(errCode, errMsg)
    }
    return Promise.reject(res)
}

/**
 * 处理网络错误，比如 404, 请求被 cancel 等情况
 * @param err AxiosError
 */
export function handleNetworkError (err) {
    const {response, code, message} = err
    let errMsg
    if (!response) {
        if (code === 'ECONNABORTED') {
            errorHandlers.abort('网络错误')
        } else if (message.indexOf('cancel') >= 0) {
        } else {
            errorHandlers.default('unknown', `${code}:${message}`)
        }
    } else {
        errMsg = response.status ? `[${response.status}]` : err.message
        errorHandlers.default(response.status || 'abort', errMsg)
    }
    return Promise.reject(err)
}

/**
 * 将返回的结果，加入到任务队列中，由任务队列来决定什么时候，将数据返回给业务那边
 * @param response ResponseData
 */
export function queueTaskSuccessResponse (response) {
    return new Promise((resolve) => {
        task.exec(() => {
            resolve(response)
        })
    })
}

/**
 * 将返回的错误，加入到任务队列中，由任务队列来决定什么时候，将数据返回给业务那边
 * @param err 略
 */
export function queueTaskFailResponse (err) {
    return new Promise((resolve, reject) => {
        task.exec(() => {
            reject(err)
        })
    })
}
