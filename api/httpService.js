import axios from 'axios'

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${
      config.method === 'post' ? localStorage.getItem('token') : ''
    }`
    // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;

    config.baseURL = 'http://192.168.1.28/api/'

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
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }

    if (error.response.status === 403 || error.response.status === 401) {
      localStorage.removeItem('token')

      //   if (history) {
      //     history.push('/login', { replace: false })
      //   } else {
      //     window.location = '/login'
      //   }
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
