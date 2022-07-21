/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['/public/logo.svg'],
  },
}

module.exports = {
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',

    domains: [
      {
        domain: 'https://api.metiks.uz/api/ru',
        defaultLocale: 'ru',
        http: true,
      },
      {
        domain: 'https://api.metiks.uz/api/en',
        defaultLocale: 'en',
        locales: ['en'],
      },
    ],
  },
}
