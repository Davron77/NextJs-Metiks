import axios from 'axios'
import { useEffect } from 'react'

const instance = axios.create({
  baseURL: 'https://api.metiks.uz/api/ru',
})

const AxiosInterceptor = ({ children }) => {
  useEffect(() => {
    const reqInterceptor = (request) => {
      request.headers.Authorization = `Bearer ${
        request.method === 'post' ? localStorage.getItem('token') : ''
      }`

      request.headers.common['X-Language-Code'] =
        localStorage.getItem('i18nextLng')

      return request
    }

    const errInterceptor = (error) => {
      return Promise.reject(error)
    }

    const interceptor = instance.interceptors.request.use(
      reqInterceptor,
      errInterceptor
    )

    return () => instance.interceptors.response.eject(interceptor)
  }, [])

  useEffect(() => {
    const resInterceptor = (response) => {
      return response
    }

    const errInterceptor = (error) => {
      // if (error.response.status === 401) {
      //   navigate('/login')
      // }

      return Promise.reject(error)
    }

    const interceptor = instance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    )

    return () => instance.interceptors.response.eject(interceptor)
  }, [])

  return children
}

export default instance
export { AxiosInterceptor }
