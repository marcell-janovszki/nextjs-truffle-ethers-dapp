import "styles/globals.css"

import NetworkProvider from "providers/NetworkProvider"

const App = ({ Component, pageProps }) => {
  return (
    <NetworkProvider>
      <Component {...pageProps} />
    </NetworkProvider>
  )
}

export default App
