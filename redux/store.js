import { configureStore } from '@reduxjs/toolkit'
import user from './user'
import product from './product'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'

export const store = configureStore({
  reducer: {
    dataCatalog: user,
    product,
  },
  devTools: false,
  enhancers: [
    devToolsEnhancer({
      trace: true,
      traceLimit: 25,
      realtime: true,
      port: 8000,
    }),
  ],
})

const makeStore = () => store

export const wrapper = createWrapper(makeStore)
