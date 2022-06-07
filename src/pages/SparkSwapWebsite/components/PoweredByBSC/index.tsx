import React from 'react'
import PageSection from '../styles/Layout'
import { Colors } from '../styles/Layout/Colors'
import { Title } from '../Elements'

const PoweredByBSC = () => {
  return (
    <PageSection direction='column' padding='8em 0em 5em 0em' background={Colors.background2}>
      <Title value='Powered by Binance Smart Chain' subtitle="✅ Fastest transaction speed, ✅ Low transaction fees, ✅ Cross-chain interoperability. Leveraging Binance Smart Chain's full potential for SparkSwap's fast crypto swapping, and support for users across multiple blockchains." />
    </PageSection>
  )
}

export default PoweredByBSC