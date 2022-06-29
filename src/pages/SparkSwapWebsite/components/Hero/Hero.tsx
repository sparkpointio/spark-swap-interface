import React, { useContext, useEffect, useState } from 'react'
// import { useLocation, Route, useRouteMatch } from 'react-router-dom'
import styled, { ThemeContext } from 'styled-components'
import { Text, Flex, Heading, Button, ChevronRightIcon } from '@sparkpointio/sparkswap-uikit'
import Carousel from "react-elastic-carousel";
import PageSection from '../styles/Layout'
import { StyledContainer, ImageContainer, ButtonContainer } from '../styles/Containers'
import { Colors } from '../styles/Layout/Colors'
import { Upnext } from './types';

const DynamicImageContainer = styled.div`
  width: 100%;
`

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const BG = styled(StyledContainer)`
  background: url('/images/Website/hero-bg.png');
  background-color: #161C26;
  background-blend-mode: overlay;
  padding: 3rem 0 0 0;
  justify-content: start;
  position: relative;
`

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 5.5em 0em auto 0em;
  @media screen and (max-width: 1920px) {
    min-height: 60vmin;
  }
  @media screen and (max-width: 1669px) {
    margin-left: 5em;
    margin-right: 5em;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    gap: 5em;
    margin: 3em 0em 3em 0em;
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
`

const LaunchButton = styled(Button)`
  background: linear-gradient(to right, #0071BC, #39BEEC);
  border-radius: 6px;
`

const SubHeaderText = styled(Text)`
  font-family: 'Monda', sans-serif;
  font-size: 1.5em;
  word-spacing: auto;
  margin: 1em 0em 1em 0em;

  @media screen and (max-width: 1366px) {
    font-size: 1.3em;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1em;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3em;
  }

  @media screen and (max-width: 500px) {
    font-size: 1em;
  }
`

const ImageDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

const VolumeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3em;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

`

const VolumeContainer = styled.div`
margin: 3em 0px;
`

const VolumeTitle = styled.p`
  color: ${Colors.accent3};
`

const VolumeValue = styled.p`
  color: ${Colors.text1};
  font-size: 3em;

  @media screen and (max-width: 768px) {
    font-size: 2em;
  }
`

const CustomHeading = styled.div`
  font-family: 'Quatro';
  color: ${Colors.accent3};
  font-size:  5em;

  @media screen and (max-width: 1617px) {
    font-size: 4em;
  }

  @media screen and (max-width: 1366px) {
    font-size: 3em;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2em;
  }

  @media screen and (max-width: 768px) {
    font-size: 3em;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.5em;
  }
`   

const StyledSpan = styled.span`
  font-weight: bold;
  font-family: quatro;
  color: ${Colors.accent3};
`

const Website: React.FC = () => {
  const theme = useContext(ThemeContext)
  
  const ComingUpList = [
    {
      data: 'Improved UI/UX',
    },
    {
      data: 'New Info Page',
    },
    {
      data: 'New Reward System'
    },
    {
      data: 'SparkyVIP'
    },
    {
      data: 'Liquidity Lockers'
    },
    {
      data: 'Limit Orders'
    }, 
    {
      data: 'Perpetual'
    }
  ]
  
  const ComingupContainer = ({ data }: Upnext) => {
    return (
      <>
        <ChevronRightIcon color={Colors.accent3} />{data}<br/>
      </>
    );
  };
  
  const [totalLiquidityAndVolumeUSD, setTotalLiquidityAndVolumeUSD] = useState({
    totalLiquidity: 0,
    totalVolume: 0
  })
  const [totalVolumeUSD, setTotalVolumeUSD] = useState(0)

  const date = new Date()
  const timestampNow = Math.floor(Date.now() / 1000)
  const timestamp24hAgo = Math.floor(date.setDate(date.getDate() - 1) / 1000)
  const apiEndpoint = 'https://api.thegraph.com/subgraphs/name/sparkpointio/spark-swap'
  const apiBlockEndpoint = 'https://api.thegraph.com/subgraphs/name/aldrickb/test2sparkblock'

  const getGraphQLData = () => {
    fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          uniswapFactories(first: 1) {
            totalLiquidityUSD,
            totalVolumeUSD
          }
        }`
      })
    })
      .then(res => res.json())
      .then((data) => setTotalLiquidityAndVolumeUSD({
        totalLiquidity: data?.data?.uniswapFactories[0]?.totalLiquidityUSD,
        totalVolume: data?.data?.uniswapFactories[0]?.totalVolumeUSD
      }))
      .catch(console.error);
  }

  const getGraphQLDataBlock = (block) => {
    fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          uniswapFactories(first: 1 block: { number: ${block} }) {
            totalVolumeUSD
          }
        }`
      })
    })
      .then(res => res.json())
      .then((data) => setTotalVolumeUSD(totalLiquidityAndVolumeUSD.totalVolume - data?.data?.uniswapFactories[0]?.totalVolumeUSD))
      .catch((err) => console.error(err));
  }

  const getGraphQLBlocks = () => {
    fetch(apiBlockEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          blocks(first: 1 orderBy: timestamp orderDirection: asc where: { timestamp_gt: ${timestamp24hAgo} timestamp_lt: ${timestampNow}}) {
            id
            number
            timestamp
          }
        }`
      })
    })
      .then(res => res.json())
      .then((data) => {
        const computedVolume = data?.data?.blocks[0]?.number
        getGraphQLDataBlock(computedVolume)
      })
      .catch(console.error);
  }

  useEffect(() => {
    getGraphQLData()
    getGraphQLBlocks()
  })

  const SparkDeFiNowSwap = () => {
    return (
      <HomeWrapper>
        <StyledFlex>
          <CustomHeading>
            <StyledSpan>Spark</StyledSpan>
              <StyledSpan style={{ color: '#0071BC' }}>DeFi</StyledSpan> is now <br/>
              <StyledSpan>Spark</StyledSpan>
              <StyledSpan style={{ color: '#0071BC' }}>Swap</StyledSpan>!
          </CustomHeading>
          <div> 
            <SubHeaderText bold>Better, Faster, and more Powerful. </SubHeaderText>
            <SubHeaderText style={{ fontSize: '1.3em' }}>
              Welcome to SparkSwap DeFi Platform. <br/>
              <Button as="a" href="https://medium.com/theecosystem/sparkswap-v2-to-the-second-power-fad854707f75" style={{ background: 'linear-gradient(to right, #0071BC, #39BEEC)', borderRadius: '6px', margin: '2em 0px' }}>
                <Text>Read the Press Release</Text>
              </Button>
            </SubHeaderText>
          </div>
          <VolumeWrapper>
            <VolumeContainer>
              <VolumeTitle>24H Volume</VolumeTitle>
              <VolumeValue>{totalVolumeUSD !== 0 ? `$${totalVolumeUSD.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : '$0.00'}</VolumeValue>
            </VolumeContainer>
          </VolumeWrapper>
        </StyledFlex>
        <ImageDiv>
          <DynamicImageContainer>
            <img src="images/Website/HeroSparkSwapIcon.png" alt="HeroSparkSwapIcon" />
          </DynamicImageContainer>
        </ImageDiv>
      </HomeWrapper>
    )
  }

  const DexIsComing = () => {
    return (
      <HomeWrapper>
        <StyledFlex>
          <CustomHeading>A New and Improved <br/>
            <StyledSpan>Spark</StyledSpan>
            <StyledSpan style={{ color: '#0071BC' }}>Swap</StyledSpan>
            <StyledSpan style={{ color: '#FFFFFF' }}>{' '}DEX</StyledSpan> <br/> is coming!
          </CustomHeading>
          <SubHeaderText>
            An improved UI+UX, upgraded Info Page, <br/>
            Sparky VIP Club perks integration, <br/>
            Liquidity Lockers, Limit Order, and <br/>
            perpetial, all coming this 2022! <br/>
            <Button mt="2em" disabled style={{ borderRadius: '6px' }}>
              <Text>
                Coming this 2022!
              </Text>
            </Button>
          </SubHeaderText>
          <VolumeWrapper>
            {/* <VolumeContainer>
              <VolumeTitle>Total Liquidity</VolumeTitle>
              <VolumeValue>{totalLiquidityAndVolumeUSD.totalLiquidity !== 0 ? `$${totalLiquidityAndVolumeUSD.totalLiquidity.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : '$0.00'}</VolumeValue>
            </VolumeContainer> */}
            <VolumeContainer>
              <VolumeTitle>24H Volume</VolumeTitle>
              <VolumeValue>{totalVolumeUSD !== 0 ? `$${totalVolumeUSD.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : '$0.00'}</VolumeValue>
            </VolumeContainer>
          </VolumeWrapper>
        </StyledFlex>
          <ImageDiv>
            <DynamicImageContainer>
              <img src="images/Website/Dex2Icon.png" alt="Dex2Icon" />
            </DynamicImageContainer>
          </ImageDiv>
      </HomeWrapper>
    )
  }

  return (
    <PageSection direction="column" id="hero">
      <BG>
        <Carousel isRTL={false} autoPlaySpeed={6000} enableAutoPlay showArrows={false}>
          {/* Cap to to 4 */}
          {SparkDeFiNowSwap()}
          {DexIsComing()}
          {SparkDeFiNowSwap()}
          {DexIsComing()} 
        </Carousel>
      </BG>
    </PageSection>
  )
}

export default Website