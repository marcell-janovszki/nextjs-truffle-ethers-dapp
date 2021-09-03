import { ethers } from "ethers"
import { useState } from "react"

import SimpleMessageArtifact from "../contracts/SimpleMessage.json"

const HomePage = ({ msg }) => {
  const [message, setMessage] = useState(msg)
  return <>{message ? message : null}</>
}

export async function getServerSideProps() {
  const provider = new ethers.getDefaultProvider("http://127.0.0.1:7545")

  console.log(provider)

  const SimpleMessageContract = new ethers.Contract(
    SimpleMessageArtifact.networks["1337"].address,
    SimpleMessageArtifact.abi,
    provider
  )

  const msg = await SimpleMessageContract.callStatic.message()

  return { props: { msg: msg } }
}

export default HomePage
