import axios from 'axios'
import * as interceptors from './interceptors'
// 自定义 axios 默认配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencodedcharset=utf-8'
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.timeout = 60000

// 配置 axios 发送请求之前的拦截器
axios.interceptors.request.use(interceptors.resolveConfigErrors)
axios.interceptors.request.use(interceptors.resolveConfigPostData)
axios.interceptors.request.use(interceptors.resolveConfigUrl)
axios.interceptors.request.use(interceptors.resolveConfigParams)
// 配置 axios 收到响应之后的拦截器
axios.interceptors.response.use(interceptors.handleErrorCode, interceptors.handleNetworkError)
axios.interceptors.response.use(interceptors.queueTaskSuccessResponse, interceptors.queueTaskFailResponse)

const axiosWrap = {
    get: axios.get,
    post: axios.post
}
export default axiosWrap
