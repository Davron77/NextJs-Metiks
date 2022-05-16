import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WithLayout } from '../layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default WithLayout(MyApp)
