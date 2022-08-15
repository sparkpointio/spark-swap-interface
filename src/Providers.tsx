import React from 'react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { Provider } from 'react-redux'
import { ModalProvider } from '@sparkpointio/sparkswap-uikit'
import { ToastsProvider } from 'contexts/ToastsContext'
import { ObserverContextProvider } from 'pages/SparkSwapWebsite/context/ObserverContext'
import { NetworkContextName } from './constants'
import store from './state'
import getLibrary from './utils/getLibrary'
import { ThemeContextProvider } from './ThemeContext'



const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
        <ToastsProvider>
          <ThemeContextProvider>
            <ObserverContextProvider>
            <ModalProvider>{children}</ModalProvider>
            </ObserverContextProvider>
          </ThemeContextProvider>
          </ToastsProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  )
}

export default Providers
