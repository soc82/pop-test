import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'

import WalletProfile from './walletProfile'
 
const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})
 
function ConnectWallet() {
  return (
    <WagmiConfig client={client}>
      <WalletProfile />
    </WagmiConfig>
  )
}

export default ConnectWallet;