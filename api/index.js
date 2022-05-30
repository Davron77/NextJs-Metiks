import http from './httpService'

const register = '/register'
const login = '/login'
const me = '/me'
const logout = '/logout'
const services = '/services'
const instagram = '/instagram'
const settings = '/settings'
const about = '/about'
const manufacture = '/manufacture'
const category = '/category'

export const authAPI = {
  register: (props) => http.post(register, props),
  login: (props) => http.post(login, props),
  logout: () => http.post(logout),
  me: () => http.post(me),
}

export const productAPI = {
  services: () => http.get(services),
  instagram: () => http.get(instagram),
  settings: () => http.get(settings),
  about: () => http.get(about),
  manufacture: () => http.get(manufacture),
  category: () => http.get(category),
}
