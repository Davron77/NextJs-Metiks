const { i18n } = require('./next-i18next.config')
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['/public/logo.svg'],
  },
  i18n,
}
