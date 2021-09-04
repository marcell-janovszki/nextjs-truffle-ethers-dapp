import { useNetwork } from "providers/NetworkProvider"

import ConnectWallet from "components/ConnectWallet"

const HomePage = () => {
  const { provider, account } = useNetwork()
  return (
    <>
      <div>PROVIDER: {provider ? provider.connection.url : "none"}</div>
      <div>ACCOUNT: {account && account.length > 0 ? account : "none"}</div>
      <div>CONTRACT: SimpleMessage.sol</div>
      <ConnectWallet />
    </>
  )
}

export async function getServerSideProps() {
  return { props: {} }
}

export default HomePage
