import http from './httpService'

const register = '/register'
const login = '/login'
const me = '/me'
const logout = '/logout'
const services = '/services'

export const authAPI = {
  register: (props) => http.post(register, props),
  login: (props) => http.post(login, props),
  logout: () => http.post(logout),
  me: () => http.get(me),
}

export const productAPI = {
  services: (props) => http.get(services, props),
}
