import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WithLayout } from '../layout/main/layout'
import { Provider } from 'react-redux'
import { store, wrapper } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(WithLayout(MyApp))
