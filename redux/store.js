import { configureStore } from '@reduxjs/toolkit'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import catalog from './catalog'
import product from './product'
import userData from './userData'
import isOpen from './openCatalog'

export const store = configureStore({
  reducer: {
    dataCatalog: catalog,
    product,
    userData,
    isOpen,
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
