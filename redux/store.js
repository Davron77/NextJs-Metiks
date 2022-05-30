import { configureStore } from '@reduxjs/toolkit'
import user from './user'
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = configureStore({
  reducer: user,
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

export default store
