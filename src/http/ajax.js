import axios from 'axios'
// axios的0.15.3版本以下的支持 import interceptors as * from './interceptors' 使用外部的函数  0.19.0版本不支持  其他版本没有测试 所以使用下面的方式引入
import {
    resolveConfigUrl,
    resolveConfigPostData,
    resolveConfigParams,
    resolveConfigErrors,
    handleErrorCode,
    handleNetworkError,
    queueTaskSuccessResponse,
    queueTaskFailResponse
} from './interceptors'
import {ajaxRequest} from './ajaxrequest'
// 自定义 axios 默认配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.timeout = 60000
// 配置 axios 发送请求之前的拦截器
axios.interceptors.request.use(resolveConfigErrors)
axios.interceptors.request.use(resolveConfigPostData)
axios.interceptors.request.use(resolveConfigUrl)
axios.interceptors.request.use(resolveConfigParams)

// 配置 axios 收到响应之后的拦截器
axios.interceptors.response.use(handleErrorCode, handleNetworkError)
axios.interceptors.response.use(queueTaskSuccessResponse, queueTaskFailResponse)

const axiosWrap = {
    get: ajaxRequest('get', axios),
    post: ajaxRequest('post', axios)
}
export default axiosWrap
