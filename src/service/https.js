/**
 * Created by wdy on 2018/6/6.
 */
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = '/lx_p2p_api'
axios.defaults.timeout = 100000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.headers.common['X-Request-With'] = 'XMLHttpRequest'
// axios.interceptors.request.use(config => {
  // config.setHeaders([])
  // return config
// })
axios.interceptors.response.use(response => {
  if (response.status === 200 || response.status === '200') {
    return response.data
  } else {
    throw Error(response.data.msg || '服務器異常')
  }
})
export default axios
