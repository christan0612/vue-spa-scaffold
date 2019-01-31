/**
 * 判斷為 正式機 或是 測試機
 */
var hostName = window.location.hostname.toString()

// 為了 IE10
if (!window.location.origin) {
  window.location.origin =
    window.location.protocol +
    '//' +
    window.location.hostname +
    (window.location.port ? ':' + window.location.port : '')
}

var config = {
  API_URL: window.location.origin
}

if (hostName === 'localhost' || hostName === '0.0.0.0') {
  // local 端
  // config.API_URL = '測試機的API路徑'
}

window.config = config
