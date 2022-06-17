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
  color: ${Colors.text1};
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

const ImgContainer = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
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

const ContentContainer = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const StyledHeading = styled.div`
  font-family: 'Quatro';
  font-weight: bold;
  color: ${Colors.accent3};
  font-size: 2.5em;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`

const PavingContainer = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const FlexSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;
  gap: 3em;

  @media screen and (max-width: 500px) {
    font-size: 17px;
    text-align: center;
  }

  @media screen and (max-width: 425px) {
    margin: 5em 0em 5em 0em;
  }
`

const FlexSectionReverse = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;
  gap: 3em;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 500px) {
    font-size: 17px;
    text-align: center;
  }

  @media screen and (max-width: 425px) {
    margin: 5em 0em 5em 0em;
  }
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageWrapper = styled.div`
  margin: 0em 5em 0em 5em;

  @media screen and (max-width: 600px) {
    margin: 0em 2em 0em 2em;
  }
`

const Img = styled.img`
  width: 200px;

  @media screen and (max-width: 1000px) {
    width: 150px;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-width: 600px) {
    width: 150px;
  }

  @media screen and (max-width: 425px) {
    width: 100px;
  }
`

const UnlockSection1 = () => {
  return (
    <FlexSection>
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
      <ImgContainer>
        <ImgWrapper>
          <Img src="/images/Website/SparkPool.png" alt="SparkPool" style={{ opacity: '50%'}} />
          <Img src="/images/Website/SparkBridge.png" alt="SparkBridge" />
          <Img src="/images/Website/SparkLaunch.png" alt="SparkLaunch" style={{ opacity: '50%'}} />
        </ImgWrapper>
      </ImgContainer>
    </FlexSection>
  )
}

const UnlockSection2 = () => {
  return (
    <FlexSectionReverse>
      <PavingContainer>
        <img src="/images/Website/PavingFinTech.png" alt="PavingFinTech" />
      </PavingContainer>
      <ContentContainer>
          <StyledHeading>
            {' '}
            Paving the way for FinTech with SparkPoint{' '}
          </StyledHeading> 
          &nbsp;
          <StyledText>
            {' '}
              SparkSwap DeFi Platform is SparkTech (Sparkpoint Technologies) flagship product. Developed by the same team that grew out of the crypto winter, and now with almost 4 years of track record on developing and launching blockchain products and services.{' '}
          </StyledText> {' '}
          &nbsp;
        </ContentContainer>
    </FlexSectionReverse>
  )
}

const Unlock = () => {
  return (
    <PageSection direction='column' background='#141C27' padding='8em 0em 5em 0em' backgroundText='unlock true value' position='top' backgroundText2='paving way fintech with sparkpoint' position2='bottom'>
      <PageWrapper>
        <div id="unlock">
          <UnlockSection1/>
          <UnlockSection2/>
        </div>
      </PageWrapper>
    </PageSection>
  )
}

export default Unlock
