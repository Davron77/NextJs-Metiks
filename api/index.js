import http from './httpService'

const register = '/register'
const login = '/login'
const me = '/me'
const logout = '/logout'
const services = '/services'
const instagram = '/instagram'

export const authAPI = {
  register: (props) => http.post(register, props),
  login: (props) => http.post(login, props),
  logout: () => http.post(logout),
  me: () => http.get(me),
}

export const productAPI = {
  services: () => http.get(services),
  instagram: () => http.get(instagram),
}
