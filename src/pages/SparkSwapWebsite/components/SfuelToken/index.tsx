import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Title, Card } from '../Elements'
import PageSection from '../styles/Layout'

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
  margin-left: 1em;
  margin-right: 1em;
`

const FlexContainerStretch = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 2em;
`

const Image = styled.img``

const CardSingle = styled.div`
  border: 1px solid #39BEEC;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 #39BEEC33, 0 6px 20px 0 #39BEEC33;
  padding: 2em;
  border-radius: 10px;
  background: #191B1F;
  overflow-wrap: break-word;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const ContentContainer = styled.div`
  line-height: 2;
  margin-bottom: 2em;
`
  
const Heading = styled.p`
  font-weight: bold;
  color: #39BEEC;
  font-family: 'Quatro';
`

const Body = styled.p`
  color: #ffffff;
`

const InfoContainer = styled.div`
  display: flex;
  gap: 2em;
  margin-bottom: 2em;
`

const InfoBorder =  styled.div`
  flex: 1;
  border-right: 1px solid #39BEEC;
`

const InfoNoBorder = styled.div`
  flex: 1;
`

const Powered = styled.i`
  color: #39BEEC;
`

const SfuelToken = () => {

  const [rates, setRates] = useState({
    conversions: {
      sfuel: {
        usd: 0,
        php: 0
      }
    }
  })

  useEffect(() => {
    (() => {
      fetch('https://wallet.sparkpoint.io/api/v2/wallet/conversionRates')
      .then(res => res.json())
      .then(data => setRates(data))
    })()
  }, [])
  
  return (
    <PageSection direction='column' padding='8em 0em 8em 0em' background='#070708'>
      <div id="governance">
      <Title value="SFUEL TOKEN" />
      <FlexContainer>
        <Image src='images/Website/5 Token.png' />
        <CardSingle>
          <ContentContainer>
            <Heading>Contract Address</Heading>
            <Body>0x37ac4d6140e54304d77437a5c11924f61a2d976f</Body>
          </ContentContainer>
          <ContentContainer>
            <Heading>SparkPoint Fuel (SFUEL)</Heading>
            <Body>{rates.conversions.sfuel.usd} USD</Body>
          </ContentContainer>
          <InfoContainer>
            <InfoBorder>
              <Heading>Rank</Heading>
              <Body>#2314</Body>
            </InfoBorder>
            <InfoBorder>
              <Heading>Market Cap</Heading>
              <Body>$91.84 K</Body>
            </InfoBorder>
            <InfoNoBorder>
              <Heading>Volume</Heading>
              <Body>$97.97 K</Body>
            </InfoNoBorder>
          </InfoContainer>
          <Powered>Powered by CoinMarketCap</Powered>
        </CardSingle>
      </FlexContainer>
      <FlexContainerStretch>
        <Card background='#191B1F' src='images/Website/5 DAO.png' heading='SPARKSWAP DAO' body='Decentralized governance of the SparkSwap DeFi Platform.' />
        <Card background='#191B1F' src='images/Website/5 Incentive.png' heading='GOVERNANCE INCENTIVES' body='SFUEL token holders who participate in SparkDeFi governance for its continued and sustained improvement and growth are entitled to SFUEL.' />
        <Card background='#191B1F' src='images/Website/5 Rewards.png' heading='STAKING REWARDS' body='SFUEL tokens are used as rewards in our Liquidity Staking/Mining and Savings Pools when users stake either SRK or SFUEL pairs.' />
      </FlexContainerStretch>
      </div>
    </PageSection>
  )
}

export default SfuelToken
