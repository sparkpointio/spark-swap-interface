import React from 'react'
import { Text, Flex, Heading, Button, Image } from '@sparkpointio/sparkswap-uikit'
import styled, { ThemeContext } from 'styled-components'
import { TwoColumn  } from '../styles/Column'
import { StyledContainer } from '../styles/Containers'
import { Title } from '../Elements'
import PageSection from '../styles/Layout'
import { Colors } from '../styles/Layout/Colors'
import { breakpoints } from '../styles/Layout/Breakpoints'

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
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
  height: 270px;
  width: 270px;
  padding: auto;
  @media (max-width: 1366px) {
    height: 220px;
    width: 220px;
  }
  @media (max-width: ${breakpoints.Mobile.l}px) {
    height: auto;
    margin: auto;
    flex-direction: column;
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
  justify-content: space-between;
  flex-direction: column; 
  // margin: auto; 
  max-width: 850px; 
  width: 650px;
  // text-align: left;
  @media (max-width: 1366px) {
    width: 550px;
    margin: auto;
  }
  @media (max-width: 500px) {
    max-width: 300px;
    margin: auto; 
  }
`

const StyledHeading = styled.div`
  font-family: 'Quatro';
  font-weight: bold;
  color: ${Colors.accent3};
  font-size: 2.5em;
  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    margin: 2.5em 0em 2em 0em;
  }
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    font-size: 2em;
    text-align: center;
  }
`

const PavingContainer = styled.div`
  width: 100%
  height: 100%;
  justify-content: center;
  margin: auto;
  @media screen and (max-width: ${breakpoints.Desktop.laptopL}px) {
    margin: 0px 0px 0px 60px;
  }
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    width: auto;
    height: auto;
    margin: auto;
    grid-row: 2;
  }
`

const UnlockSection1 = () => {
  return (
    <>
      <Flex flexDirection="column">
      <ContentContainer>
        <StyledHeading>
          {' '}
          Unlock your asset&apos;s true value{' '}
        </StyledHeading> {' '}
        &nbsp;
        <StyledText>
          {' '}
          SparkSwap is your to-go Decentralized Finance platform. 
          Your one-stop access DeFi platform for swapping crypto, bridging, earning rewards through staking, launching new projects, and managing your NFT collection.{' '}
        </StyledText> {' '}
        &nbsp;
      </ContentContainer>
      </Flex>
      <ImgContainer>
        <img src="/images/Website/SparkPool.png" alt="SparkPool" style={{ opacity: '50%' }} />
        <img src="/images/Website/SparkBridge.png" alt="SparkBridge" />
        <img src="/images/Website/SparkLaunch.png" alt="SparkLaunch" style={{ opacity: '50%' }} />
      </ImgContainer>
    </>
  )
}

const UnlockSection2 = () => {
  return (
    <>
      <PavingContainer>
        <img src="/images/Website/PavingFinTech.png" alt="PavingFinTech" />
      </PavingContainer>
      <Flex flexDirection="column" justifyContent="center">
        <ContentContainer>
          <StyledHeading>
            {' '}
            Paving the way of FinTech with SparkPoint{' '}
          </StyledHeading> 
          &nbsp;
          <StyledText>
            {' '}
              SparkSwap DeFi Platform is SparkTech (Sparkpoint Technologies) flagship product. Developed by the same team that grew out of the crypto winter, and now with almost 4 years of track record on developing and launching blockchain products and services.{' '}
          </StyledText> {' '}
          &nbsp;
        </ContentContainer>
      </Flex>
    </>
  )
}

const Unlock = () => {
  return (
    <PageSection direction='column' background='#141C27' padding='8em 0em 8em 0em'>
      <div id="unlock">
        {/* <Title value="Unlock you asset's true value" /> */}
        <StyledContainer>
          <TwoColumn>
            <UnlockSection1/>
          </TwoColumn>
          <TwoColumn>
            <UnlockSection2/>
          </TwoColumn>
        </StyledContainer>
      </div>
    </PageSection>
  )
}

export default Unlock
