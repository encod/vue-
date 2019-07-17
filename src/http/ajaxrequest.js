export const ajaxRequest = (httpMethod, Aixos) => async (apiName, params = {}) => {
    if (typeof apiName !== 'string') {
        throw new Error('参数apiName的类型必须为string，请检查')
    }
    if (typeof params !== 'object' || Array.isArray(params)) {
        throw new Error('参数params的类型必须为object，请检查')
    }
    const config = {
        method: httpMethod,
        url: apiName,
        data: params,
        params: {}
    }
    return Aixos(config)
}
