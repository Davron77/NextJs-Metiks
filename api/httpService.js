import axios from 'axios'

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${
      config.method === 'post' ? localStorage.getItem('token') : ''
    }`

    config.headers.common['X-Language-Code'] = 'en'
    config.baseURL = `https://api.metiks.uz/api`

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
      localStorage.removeItem('token')
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
