import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import catalog from './catalog'
import product from './product'
import userData from './userData'
import isOpen from './openCatalog'
import cart from './cart'
import catalogId from './catalogId'

export const store = configureStore({
  reducer: {
    dataCatalog: catalog,
    product,
    userData,
    isOpen,
    cart,
    catalogId,
  },
})

const makeStore = () => store

export const wrapper = createWrapper(makeStore)
