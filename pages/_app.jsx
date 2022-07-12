import '../styles/globals.css'
import { WithLayout } from '../layout/main/layout'
import { Provider } from 'react-redux'
import { store, wrapper } from '../redux/store'
import { useSelector } from 'react-redux'

function MyApp({ Component, pageProps }) {
  const selector = useSelector((state) => state.isOpen)

  return (
    <div
      className={`${
        selector
          ? '!max-h-0 overflow-hidden transition-all duration-700 ease-in-out'
          : null
      } max-h-full`}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  )
}

export default wrapper.withRedux(WithLayout(MyApp))
