import axios from 'axios'
import Cookies from 'js-cookie'

// Add a request interceptor
const apiUrl = process.env.NEXT_PUBLIC_API_URL

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${
      config.method === 'post' ? Cookies.get('token') : ''
    }`

    config.headers.common['X-Language-Code'] = 'en'

    config.baseURL = apiUrl

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response)
    }),
  (error) => {
    if (error) {
      return Promise.reject(error)
    }
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
    if (error.response.status === 403 || error.response.status === 401) {
      Cookies.remove('token')
      // window.location = '/login';
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
