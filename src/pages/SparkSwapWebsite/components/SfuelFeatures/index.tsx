import React from 'react'
import styled from 'styled-components'
import PageSection from '../styles/Layout'
import { Title, Card } from '../Elements'
import { Colors } from '../styles/Layout/Colors'

const FlexContainerStretch = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 2em;
  width: 100%;
  text-align: center;
`

const SfuelFeatures = () => {
  return (
    <PageSection direction='column' padding='8em 0em 8em 0em' background={Colors.background2}>
      <Title value='Features of the SFUEL Token' />
      <FlexContainerStretch>
        <Card background='#191B1F' src='images/Website/DAO.png' heading='SPARKSWAP DAO' body='Decentralized governance of the SparkSwap DeFi Platform.' />
        <Card background='#191B1F' src='images/Website/Governance.png' heading='GOVERNANCE INCENTIVES' body='SFUEL token holders who participate in SparkDeFi governance for its continued and sustained improvement and growth are entitled to SFUEL.' />
        <Card background='#191B1F' src='images/Website/Rewards.png' heading='STAKING REWARDS' body='SFUEL tokens are used as rewards in our Liquidity Staking/Mining and Savings Pools when users stake either SRK or SFUEL pairs.' />
      </FlexContainerStretch>
    </PageSection>
  )
}

export default SfuelFeatures