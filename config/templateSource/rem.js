// 需要在 webview 上开启的高 dpr 适配的话，需要 webview 开启相关特性。
// 鉴于这个应用可能在各种各样的安卓环境下，选择直接关闭这个特性。
// ps http://stackoverflow.com/questions/22161421/viewport-meta-tag-ignored-in-android-4-4-webview
var metaEl = document.querySelector('meta[name="viewport"]');
var ua = window.navigator.userAgent;
var isAndroid = /android/gi.test(ua);
var isIphone = /iphone/gi.test(ua);
var dpr = window.devicePixelRatio || 1;

function setRem() {
    var contentWidth;
    if (isIphone) {
        contentWidth = window.screen.width * dpr;
    } else if (isAndroid) {
        contentWidth = window.innerWidth * dpr;
    } else {
        contentWidth = 360;
    }
    var size = Math.round(100 * contentWidth / 750);
    if (size % 2 === 1) {
        size += 1;
    }

    document.documentElement.style.fontSize = size + 'px';
}

if (isAndroid) {
    dpr = 1;
} else if (isIphone) {
    if (dpr > 2) {
        dpr = 2;
    }
}
var scale = parseFloat((1 / dpr).toFixed(2));
var scaleTwice = scale * 2;
metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scaleTwice + ', minimum-scale=' + scale + ', user-scalable=no');
document.documentElement.setAttribute('data-dpr', dpr);

setRem();
addEventListener('DOMContentLoaded', setRem);
