import _ from 'lodash'

const ua = navigator.userAgent
const android = /(Android ([0-9]))/ig.exec(ua)
const browser = {
    ios: /(iPhone|iPad|iPod|iOS)/i.test(ua),
    android: android ? parseInt(_.last(android), 10) : 0
}

export default browser

export const isIOS = () => browser.ios
export const isAndroid = () => !!browser.android
