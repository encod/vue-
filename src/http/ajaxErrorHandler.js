import toast from '../components/ToastMtd'

const ajaxErrorHandler = (err) => {
    let message = ''

    if (err.status === 404) {
        message = '[404] EORROR'
    } else if (err.timeout) {
        message = '请求超时，请重新查询！'
    } else {
        message = JSON.stringify(err)
    }

    toast(message)

    return {
        errorType: 'ajaxError',
        errmsg: message,
    }
}

export default ajaxErrorHandler
