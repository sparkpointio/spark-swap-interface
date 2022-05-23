import React from 'react'
import styled from 'styled-components'
import { Title } from '../Elements'
import PageSection from '../styles/Layout'

const Tokens = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const SupportedCrypto = () => {
  return (
    <PageSection direction='column' background='#141C27'>
      <Title value="SUPPORTED CRYPTO ASSETS" />
      <Tokens>
        <img src='images/Website/4 token 1.png' alt='SparkPoint' />
        <img src='images/Website/4 token 2.png' alt='SparkSwap' />
        <img src='images/Website/4 token 3.png' alt='Bitcoin' />
        <img src='images/Website/4 token 4.png' alt='Ethereum' />
        <img src='images/Website/4 token 5.png' alt='Binance' />
        <img src='images/Website/4 token 6.png' alt='Dai' />
      </Tokens>
    </PageSection>
  )
}

export default SupportedCrypto
