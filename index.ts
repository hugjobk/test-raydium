import { DEFAULT_TOKEN, wallet } from './config'
import { createMarket } from './src/utilsCreateMarket'

async function main() {
  const baseToken = DEFAULT_TOKEN.CUSTOM
  const quoteToken = DEFAULT_TOKEN.USDC

  const { txids } = await createMarket({
    baseToken,
    quoteToken,
    wallet: wallet,
  })

  console.log('txids', txids)
}

main()
