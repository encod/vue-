import _ from 'lodash'

const xssEscapeList = {
    '<': '&lt',
    '>': '&gt',
    '"': '&quot',
    "'": '&#x27',
    '/': '&#x2F'
}

// helper func
function wrap (wrapedStr, beginStr, endStr) {
    return beginStr + wrapedStr + endStr
}

// xss RegExp
const xssEscapeReg = new RegExp(wrap(Object.keys(xssEscapeList).join('|'), '(', ')'), 'g')
/**
 * 过滤可能纯在的 xss 危险。
 * @param htmlStr hmtl 字符串
 */
export function xssEscape (htmlStr) {
    return htmlStr.replace(xssEscapeReg, (match) => { return xssEscapeList[match] })
}
/**
 * 序列化对象到 application/x-www-urlencode
 * @param params 目标对象
 * @param disableXssEscape 关闭 xss 过滤
 */
export function serialize (params, disableXssEscape) {
    if (!_.isObject(params) || _.isEmpty(params) || !params) {
        return ''
    }
    const search = []

    const keys = _.keys(params)
    keys.forEach((key) => {
        if (_.isObject(params[key])) {
            throw new Error('params must be plain object')
        }
        if ((_.isString(params[key]) && (params[key]).length) || _.isNumber(params[key])) {
            params[key] = _.trim(params[key])
            search.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        }
    })
    const result = search.join('&')
    return disableXssEscape ? result : xssEscape(result)
}
