import { createContext } from "react"

import { ethers } from "ethers"

import SimpleMessageArtifact from "../contracts/SimpleMessage.json"

const NetworkContext = createContext()

const NetworkProvider = (props) => {
  const variables = {}
  const functions = {}
  const value = { ...variables, ...functions }

  return <NetworkContext.Provider value={value} {...props} />
}

export async function getServerSideProps() {
  const provider = new ethers.getDefaultProvider("http://127.0.0.1:7545")
  const SimpleMessageContract = new ethers.Contract(
    SimpleMessageArtifact.networks["1337"].address,
    SimpleMessageArtifact.abi,
    provider
  )
  const msg = await SimpleMessageContract.callStatic.message()
  return { props: msg }
}

export default NetworkProvider
