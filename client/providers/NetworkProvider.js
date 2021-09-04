import { createContext, useContext, useState, useEffect } from "react"

import { ethers } from "ethers"

const NetworkContext = createContext()

function NetworkProvider(props) {
  const [initialized, setInitialized] = useState(false)
  const [provider, setProvider] = useState()
  const [account, setAccount] = useState()

  function setupJSONRPC() {
    const _provider = new ethers.getDefaultProvider("http://127.0.0.1:7545")
    setProvider(_provider)
  }

  async function setupWeb3(ethereum) {
    const _provider = new ethers.providers.Web3Provider(ethereum)
    setProvider(_provider)
  }

  useEffect(() => {
    const ethereum = window.ethereum

    if (ethereum) setupWeb3(ethereum)
    else setupJSONRPC()

    ethereum.on("accountsChanged", function (_accounts) {
      setAccount(_accounts)
    })

    setInitialized(true)
  }, [])

  useEffect(async () => {

    if (!initialized) return

    const _account = await getAccount(false)
    setAccount(_account)

    console.log("PROVIDER: ", provider)
  }, [initialized])

  async function getAccount(requestAccess) {
    let _account
    let method = requestAccess ? "eth_requestAccounts" : "eth_accounts"
    _account = await provider.provider.request({ method: method })
    return _account
  }

  function connectWallet() {
    getAccount(true)
  }

  const variables = { provider, account }
  const functions = { connectWallet }
  const value = { ...variables, ...functions }

  return initialized ? <NetworkContext.Provider value={value} {...props} /> : null
}

export const useNetwork = () => {
  return useContext(NetworkContext)
}

export default NetworkProvider
