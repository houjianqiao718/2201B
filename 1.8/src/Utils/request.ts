// 封装axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from './auth'
const http = axios.create({
  /*路径地址*/
  baseURL: '',
  /*超时时间*/
  timeout: 1000,
  /*请求头*/
  headers: { 'Content-Type': 'application/json;charset=uft-8' }
})

/*请求拦截*/
http.interceptors.request.use(
  function (config: any) {
    // 在发送请求之前做些什么
    config.headers['Authorization'] = getToken()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/*响应拦截*/
http.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

const apis = (val: string) => {
  return process.env.VUE_APP_BASE_API + val
}

export { http, apis }
