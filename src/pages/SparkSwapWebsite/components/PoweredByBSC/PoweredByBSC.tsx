import React from 'react'
import styled from 'styled-components'
import PageSection from '../styles/Layout'
import { Colors } from '../styles/Layout/Colors'
import { Title } from '../Elements'
import { breakpoints } from '../styles/Layout/Breakpoints'

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 4em;
  }
  @media (max-width: ${breakpoints.Mobile.l}px) {
    margin: 5em 0px 0px 0px;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 0em 2em 0em 2em;
  }
`

const ImageWrapper = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0em 2em 0em 2em;
  }
`

const H1 = styled.div`
  color: ${Colors.accent3};
  font-size: 4em;
  font-family: 'Quatro', sans-serif;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 2em;
  }
`

const Ul = styled.ul`
  color: ${Colors.text1};
  font-size: 1.3em;
  list-style: none;
  text-align: left;
  
  @media screen and (max-width: 768px) {
    align-self: center;
  }
  
  @media screen and (max-width: 360px) {
    font-size: revert;
  }
`

const Li = styled.li``

const P = styled.p`
  color: ${Colors.text1};
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 800px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

const PoweredByBSC = () => {
  return (
    <PageSection direction='column' padding='8em 0em 5em 0em' background={Colors.background2} position='right' backgroundText='powered by binance smart chain' width='60%'>
      <FlexContainer>
        <InfoWrapper>
          <H1>Powered by Binance Smart Chain</H1>
          <Ul>
            <Li>✅ Fastest transaction speed</Li>
            <Li>✅ Low transaction fees</Li>
            <Li>✅ Cross-chain interoperability</Li>
          </Ul>
          <P>Leveraging Binance Smart Chain&apos;s full potential for SparkSwap&apos;s fast crypto swapping, and support for users across multiple blockchains.</P>
        </InfoWrapper>
        <ImageWrapper>
          <ImageContainer>
            <Img src='images/Website/PoweredbyBinance.png' alt='' />
          </ImageContainer>
        </ImageWrapper>
      </FlexContainer>
    </PageSection>
  )
}

export default PoweredByBSC