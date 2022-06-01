import React from 'react'
import styled from 'styled-components'
import { Title, Card } from '../Elements'
import PageSection from '../styles/Layout'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 2em;
`

const KeyFeatures = () => {
  return (
    <PageSection direction='column' padding='8em 0em 8em 0em'>
      <div id="features">
      <Title value="KEY FEATURES" />
      <Container>
        <Card src='images/Website/3 Interoperability.png' heading='INTEROPERABILITY' body='Powered by Binance Smart Chain, it can support users across multiple blockchains.' />
        <Card src='images/Website/3 Governance.png' heading='GOVERNANCE' body='SparkSwap DAO members are responsible for governing the protocol via systematic voting.' />
        <Card src='images/Website/3 Instant Exchange.png' heading='INSTANT EXCHANGE' body='Instant swap multiple cryptocurrencies in a trustless and decentralized manner.' />
        <Card src='images/Website/3 Staking.png' heading='STAKING' body='SparkSwap offers multiple staking options to choose from to earn more rewards.' />
      </Container>
      </div>
    </PageSection>
  )
}

export default KeyFeatures
