import '../styles/globals.css'
import type { AppProps } from 'next/app'

import store from '../redux/store'
import { Provider as ReduxProvider } from 'react-redux'

// Global components wrapper
import GlobalComponentsWrapper from '../components/Global.Components/GlobalComponentsWrapper/GlobalComponentsWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <GlobalComponentsWrapper>
        <Component {...pageProps} />
      </GlobalComponentsWrapper>
    </ReduxProvider>
  )
}

export default MyApp
