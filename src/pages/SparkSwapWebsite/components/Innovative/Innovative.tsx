import React from 'react'
import { Text, Flex, Heading, Button, Image } from '@sparkpointio/sparkswap-uikit'
import styled, { ThemeContext } from 'styled-components'
import { TwoColumn  } from '../styles/Column'
import { StyledContainer } from '../styles/Containers'
import { Title } from '../Elements'
import PageSection from '../styles/Layout'

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 23px;
  font-family: 'Monda', sans-serif;
  @media screen and (max-width: 1366px) {
    font-size: 21px;
  }
  @media screen and (max-width: 500px) {
    font-size: 17px;
    text-align: center;
  }
`

const ImgContainer = styled(Flex)`
  height: 700px;
  width: 700px;
  @media (max-width: 1366px) {
    height: 550px;
    width: 550px;
  }
  @media (max-width: 500px) {
    height: 300px;
    justify-content: center;
  }
`

const CustomHeadingBG = styled(Heading)`
  z-index: 1;
  position: relative;
  font-size: 15em;
  opacity: 0.3;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  -webkit-text-stroke: 3px #0071BC;
  -webkit-text-fill-color: transparent;
`

const ContentContainer = styled(Flex)`
  flex-direction: column; 
  margin: auto; 
  max-width: 850px; 
  width: 650px;
  @media (max-width: 1366px) {
    width: 550px;
  }
  @media (max-width: 500px) {
    max-width: 300px;
  }
`

const InnovativeSection1 = () => {
  return (
    <>
      <ImgContainer>
        <img src="/images/Website/innovative-1.png" alt="Innovative 1" />
      </ImgContainer>
      <ContentContainer>
        <StyledText>
          {' '}
          SparkSwap is a governance token-based DeFi platform that empowers individuals to unlock the true value of their cryptocurrency assets. 
          It is a full-service decentralized finance solution that combines a decentralized exchange, liquidity, and pool-based staking.{' '}
        </StyledText> {' '}
        &nbsp;
        <StyledText>
          {' '}
          Users can easily bridge tokens from one blockchain network to another and vice versa through a built-in bridge decentralized app, SparkBridge. 
          The platform also features sub-platforms like SparkNFT Platform where you can mint, buy, sell, and farm NFTS, 
          and a platform where everyone can discover the latest project launches and participate in their IDOs through SparkLaunch.{' '}
        </StyledText> {' '}
        &nbsp;
      </ContentContainer>
    </>
  )
}

const InnovativeSection2 = () => {
  return (
    <>
      <ContentContainer>
        <StyledText>
          {' '}
          SparkSwap is part of the ecosystem project of the SparkPoint team that grew out of the bear market. 
          SparkPoint has been around for 3 years and has a strong track record of launching blockchain products.{' '}
        </StyledText> {' '}
        &nbsp;
        <StyledText>
          {' '}
          SparkPoint&apos;s token, SRK, is one of the few tokens that has an ROI of over 1,000% according to CoinMarketCap and CoinGecko data.{' '}
        </StyledText> {' '}
        &nbsp;
      </ContentContainer>
      <ImgContainer>
        <img src="/images/Website/innovative-2.png" alt="Innovative 2" />
      </ImgContainer>
    </>
  )
}

const Innovative = () => {
  return (
    <PageSection direction='column' background='#141C27' padding='8em 0em 8em 0em'>
      <div id="ecosystem">
      <Title value="AN INNOVATIVE CRYPTOCURRENCY-BASED FINANCIAL TECHNOLOGY" />
      <StyledContainer>
        <TwoColumn>
          <InnovativeSection1/>
        </TwoColumn>
        <CustomHeadingBG>CRYPTOCURRENCY-BASED FINANCIAL <br/> TECHNOLOGY</CustomHeadingBG>
        <TwoColumn>
          <InnovativeSection2/>
        </TwoColumn>
      </StyledContainer>
      </div>
    </PageSection>
  )
}

export default Innovative