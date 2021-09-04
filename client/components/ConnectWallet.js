import { useNetwork } from "providers/NetworkProvider"

const ConnectWallet = () => {
  const { connectWallet } = useNetwork()

  function connectWalletHandler() {
    connectWallet()
  }

  return (
    <button
      onClick={connectWalletHandler}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      CONNECT
    </button>
  )
}

export default ConnectWallet
