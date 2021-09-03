import { ethers } from "ethers"
import { useState } from "react"

import SimpleMessageArtifact from "../contracts/SimpleMessage.json"

const HomePage = ({ msg }) => {
  const [message, setMessage] = useState(msg)
  return <>{message ? message : null}</>
}

export default HomePage
