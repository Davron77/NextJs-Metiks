import http from './httpService'

const register = '/register'
const login = '/login'
const me = '/me'
const sendVerificationCode = '/send-verification-code'
const checkVerificationCode = '/check-verification-code'
const logout = '/logout'
const services = '/services'
const instagram = '/instagram'
const settings = '/settings'
const about = '/about'
const manufacture = '/manufacture'
const category = '/categories'
const reviews = '/reviews'
const banner = '/banner'
const products = '/products/'
const message = '/message'
const addToCart = '/add-to-cart'

export const authAPI = {
  register: (props) => http.post(register, props),
  login: (props) => http.post(login, props),
  sendVerificationCode: (props) => http.post(sendVerificationCode, props),
  checkVerificationCode: (props) => http.post(checkVerificationCode, props),
  logout: () => http.post(logout),
  me: () => http.post(me),
  message: (props) => http.post(message, props),
}

export const productAPI = {
  services: () => http.get(services),
  instagram: () => http.get(instagram),
  settings: () => http.get(settings),
  about: () => http.get(about),
  manufacture: () => http.get(manufacture),
  category: () => http.get(category),
  reviews: () => http.get(reviews),
  banner: () => http.get(banner),
  products: () => http.get(products),
  product: (id) => http.get(products + id),
  addToCart: (props) => http.post(addToCart, props),
  filter: (category_id, property_id) =>
    http.get(
      `products?filter[category_id]=${category_id}${
        property_id.length > 0
          ? `&filter[property_id]=${property_id.join('')}`
          : ''
      }`
    ),
  search: (search) => http.get(`products?filter[search]=${search}`),
}
