import axios from 'axios'
import Cookies from 'js-cookie'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${
      config.method === 'post' ? Cookies.get('token') : ''
    }`

    config.headers.common['X-Language-Code'] = 'ru'

    config.baseURL = apiUrl

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) =>
    new Promise((resolve, _) => {
      resolve(response)
    }),
  (error) => {
    if (error) {
      return Promise.reject(error)
    }
    if (!error.response) {
      return new Promise((_, reject) => {
        reject(error)
      })
    }
    if (error.response.status === 403 || error.response.status === 401) {
      Cookies.remove('token')
    } else {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }
)

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
}
