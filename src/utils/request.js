import axios from 'axios'
import '@/config'
import store from '@/store/index'

/**
 * axios 基本配置
 */
const service = axios.create({
  baseURL: window.config.API_URL, // api 的 base_url
  timeout: 15000 // 請求超過時間
})

// 攔截 response
service.interceptors.response.use(
  response => {
    const res = response.data.statusDTO
    if (res.status !== 'SUCCESS') {
      store.commit('hasError', true)
      store.commit('updateErrorMessage', res.message)
      store.commit('updateErrorCode', res.errorCode)

      return Promise.reject(res)
    } else {
      return response.data
    }
  },
  error => {
    store.commit('hasError', true)
    store.commit('updateErrorMessage', error.message)

    return Promise.reject(error)
  }
)

export default service
