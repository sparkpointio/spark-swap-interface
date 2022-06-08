import React, { useContext, useEffect, useState } from 'react'
// import { useLocation, Route, useRouteMatch } from 'react-router-dom'
import styled, { ThemeContext } from 'styled-components'
import { Text, Flex, Heading, Button } from '@sparkpointio/sparkswap-uikit'
import { SvgIcon } from '@material-ui/core'
import { ReactComponent as HeroSwap } from 'assets/svg/HeroSwap.svg'
import { TwoColumnHeader } from '../styles/Column'
import PageSection from '../styles/Layout'
import { StyledContainer, ImageContainer, ButtonContainer } from '../styles/Containers'
import { breakpoints } from '../styles/Layout/Breakpoints'
import { Colors } from '../styles/Layout/Colors'

const DynamicImageContainer = styled(ImageContainer)`
  margin: auto;
  @media (max-width: 2560px) {
    width: 850px;
    height: 850px;
    margin: 170px;
  }
  @media (max-width: 1920px) {
    width: 750px;
    height: 750px;
    margin: 35px;
  }
  @media (max-width: 1600px) {
    width: 620px;
    height: 620px;
    margin: 20px;
  }
  @media (max-width: 1366px) {
    height: 500px;
    width: 500px;
  }
  @media (max-width: 500px) {
    height: 300px;
    width: 300px;
  }
`

const StyledFlex = styled(Flex)`
  align-items: flex-start;
  row-gap: 40px;
  padding: 25px;
  text-align: left;
  max-width: 900px;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 65px 80px;
  }
  @media screen and (max-width: 1366px) {
    padding: 40px 80px;
  }
`

const BG = styled(StyledContainer)`
  background: url('/images/Website/hero-bg.png');
  background-color: #161C26;
  background-blend-mode: overlay;
  padding: 3rem 0 0 0;
  min-height: 800px;
  justify-content: start;
  position: relative;
  @media (min-width: 1100px) and (min-height: 815px) {
    height: 100vh;
  }
`

const HomeWrapper = styled(TwoColumnHeader)`
  padding: auto;
  @media (min-width: 2500px) {
    min-height: 78vmin;
  }
  & > * {
    margin: 0px auto;
  }
`

const StyledHeading = styled(Heading)`
  font-size: 4.5rem;
  @media screen and (max-width: 1024px) {
    font-size: 2rem;
  }
`

const HeadingContainer = styled(Flex)`
  width: auto;
  // @media screen and (max-width: 1920px) {
  //   width: 650px;
  // }
  // @media screen and (max-width: 1360px) {
  //   width: 550px;
  // }
`

const LaunchButton = styled(Button)`
  background: linear-gradient(to right, #0071BC, #39BEEC);
  border-radius: 6px;
`

const SubHeaderText = styled(Text)`
  font-family: 'Monda', sans-serif;
  font-size: 27px;
  word-spacing: auto;
  line-height: 1.6;
  @media (max-width: 1920px) {
    margin-right: 220px;
  }
  @media (max-width: 1366px) {
    margin-right: 100px;
    font-size: 22px;
  }
  @media (max-width: 500px) {
    margin: auto;
    font-size: 17px;
  }
`

const ImageDiv = styled(Flex)`
  padding: 60px;
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    padding: 30px;
  }
`

const VolumeContainer = styled.div``

const VolumeTitle = styled.p`
  color: ${Colors.accent3};
  font-size: 1.5em;
`

const VolumeValue = styled.p`
  color: ${Colors.text1};
  font-size: 3em;
  font-family: 'Quatro', sans-serif;
  font-weight: bold;
`

const Website: React.FC = () => {
  const theme = useContext(ThemeContext)
  const [volume, setVolume] = useState({
    value: '$0.00',
    percentage: 0
  })

  const loadVolume = () => {
    fetch('https://test-api-cyan.vercel.app/api/v1/jobs/sfuel')
      .then((res) => res.json())
      .then((data) => {
        const sfuelData = data.data.SFUEL[0]
        const quoteVolume = sfuelData.quote.USD.volume_24h.toString().split('.')[0].toLocaleString('en-US').replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        const quotePercentage = sfuelData.quote.USD.percent_change_24h
        setVolume({
          value: `$${quoteVolume}`,
          percentage: quotePercentage
        })
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    loadVolume()
  }, [])
  

  return (
    <PageSection direction="column" id="hero">
      <BG>
        <HomeWrapper>
          <ImageDiv>
            <DynamicImageContainer>
              <HeroSwap/>
            </DynamicImageContainer>
          </ImageDiv>
          <StyledFlex flexDirection="column">
            <HeadingContainer>
              <img src="images/Website/sparkswap-heading.png" alt="SparkSwap Heading" />
            </HeadingContainer>
            <SubHeaderText>
              {' '}
              $500,000 worth of SRK and SFUEL allocated for liquidity and rewards. <br/> Join now and receive an airdrop
            </SubHeaderText>
            <ButtonContainer>
              <Button fullWidth as="a" href="/#/swap" style={{ background: 'linear-gradient(to right, #0071BC, #39BEEC)', borderRadius: '6px' }}>
                Launch App
              </Button>
            </ButtonContainer>
            <VolumeContainer>
              <VolumeTitle>24H Volume</VolumeTitle>
              <VolumeValue>{volume.value}</VolumeValue>
            </VolumeContainer>
          </StyledFlex>
        </HomeWrapper>
      </BG>
    </PageSection>
  )
}

export default Website