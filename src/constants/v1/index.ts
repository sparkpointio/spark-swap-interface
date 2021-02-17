import { Interface } from '@ethersproject/abi'
import { ChainId } from '@aldrickb/sparkswap-sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xC07d4604400139108BbdB3076636365A385879eF', // TODO
  [ChainId.BSCTESTNET]: '0xC07d4604400139108BbdB3076636365A385879eF'
}

// [ChainId.MAINNET]: '0xd417A0A4b65D24f5eBD0898d9028D92E3592afCC', // TODO
// [ChainId.BSCTESTNET]: '0xd417A0A4b65D24f5eBD0898d9028D92E3592afCC'

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
