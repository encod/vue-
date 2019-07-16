
import toast from '../components/ToastMtd'
import code from './errorCode'

const errorHandlers = {
    '106' () {
        toast(code['106'])
    },
    default (code, msg) {
        console.log(`unknown error:${msg}`)
        toast(msg)
    },
    abort (msg) {
        toast(msg)
    }
}
export default errorHandlers
