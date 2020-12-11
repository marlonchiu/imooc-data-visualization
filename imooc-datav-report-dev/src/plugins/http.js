import axios from 'axios'

const http = axios.create({
  timeout: 5000
})

http.interceptors.response.use(response => {
  if (response.status === 200 && response.data) {
    return response.data
  } else {
    return Promise.reject(new Error('请求失败'))
  }
}, error => {
  return Promise.reject(error)
})

export default http
