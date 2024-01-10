import http from './httpService'

const REGISTER = '/register'
const LOGIN = '/login'
const ME = '/me'
const SEND_VERIFICATION_CODE = '/send-verification-code'
const CHECK_VERIFICATION_CODE = '/check-verification-code'
const LOGOUT = '/logout'
const MESSAGE = '/message'
const SERVICES = '/services'
const INSTAGRAM = '/instagram'
const SETTINGS = '/settings'
const ABOUT = '/about'
const MANUFACTURE = '/manufacture'
const CATEGORY = '/categories'
const REVIEWS = '/reviews'
const BANNER = '/banner'
const PRODUCTS = '/products/'
const ADD_TO_CART = '/add-to-cart'
const CART = '/cart'
const REMOVE_FROM_CART = '/remove-from-cart'
const CLEAR_CART = '/clear-cart'
const CART_CHECKOUT = '/cart/checkout'

const langAPI = (locale) => {
  return {
    headers: {
      'X-Language-Code': locale ?? 'ru',
    },
  }
}

export const authAPI = {
  register: (props) => http.post(REGISTER, props),
  login: (props) => http.post(LOGIN, props),
  sendVerificationCode: (props) => http.post(SEND_VERIFICATION_CODE, props),
  checkVerificationCode: (props) => http.post(CHECK_VERIFICATION_CODE, props),
  logout: () => http.post(LOGOUT),
  me: () => http.post(ME),
  message: (props) => http.post(MESSAGE, props),
}

export const productAPI = {
  services: (locale) => http.get(SERVICES, langAPI(locale)),
  instagram: () => http.get(INSTAGRAM),
  settings: (locale) => http.get(SETTINGS, langAPI(locale)),
  about: (locale) => http.get(ABOUT, langAPI(locale)),
  manufacture: (locale) => http.get(MANUFACTURE, langAPI(locale)),
  category: (locale) => http.get(CATEGORY, langAPI(locale)),
  reviews: (locale) => http.get(REVIEWS, langAPI(locale)),
  banner: (locale) => http.get(BANNER, langAPI(locale)),
  products: (locale) => http.get(PRODUCTS, langAPI(locale)),
  product: (id, locale) => http.get(PRODUCTS + id, langAPI(locale)),
  filter: (category_id, property_id, locale) =>
    http.get(
      `products?filter[category_id]=${category_id}${
        property_id.length > 0
          ? `&filter[property_id]=${property_id.join(',')}`
          : ''
      }`,
      langAPI(locale)
    ),
  singleProductFilter: (category_id, property_id, locale) =>
    http.get(
      `products?filter[category_id]=${category_id}&filter[property_id]=${property_id}`,
      langAPI(locale)
    ),
  search: (search, locale) =>
    http.get(`products?filter[search]=${search}`, langAPI(locale)),
  addToCart: (props) => http.post(ADD_TO_CART, props),
  cart: (locale) => http.post(CART, langAPI(locale)),
  removeFromCart: (props) => http.post(REMOVE_FROM_CART, props),
  clearCart: () => http.post(CLEAR_CART),
  cartCheckout: (props) => http.post(CART_CHECKOUT, props),
  productPost: (id, locale) => http.post(PRODUCTS + id, langAPI(locale)),
}
