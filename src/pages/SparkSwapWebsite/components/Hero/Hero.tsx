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
  margin: 8em 0em 8em 0em;

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

const Website: React.FC = () => {
  const theme = useContext(ThemeContext)

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

  return (
    <PageSection direction="column" id="hero">
      <BG>
        <HomeWrapper>
          <StyledFlex>
            {/* <HeadingContainer>
              <img src="images/Website/sparkswap-heading.png" alt="SparkSwap Heading" />
            </HeadingContainer> */}
            <CustomHeading>New and Improved <br/>
                <span style={{ color: '#39BEEC', fontWeight: 'bold', fontFamily: 'Quatro' }}>Spark</span>
                <span style={{ color: '#0071BC', fontWeight: 'bold', fontFamily: 'Quatro' }}>Swap</span>
                <span style={{ color: '#FFFFFF', fontWeight: 'bold', fontFamily: 'Quatro' }}>{' '}DEX</span>
              </CustomHeading>
            {/* <SubHeaderText>
              {' '}
              $500,000 worth of SRK and SFUEL allocated for liquidity and rewards. <br/> Join now and receive an airdrop
            </SubHeaderText> */}
            <SubHeaderText bold>What&apos;s coming up next? </SubHeaderText>
            <SubHeaderText>
              {' '}
              Improved UI/UX<br/>
              New Info Page<br/>
              New Reward System<br/>
              SparkyVIP<br/>
              Liquidity Lockers<br/>
              Limit Orders<br/>
              Perpetual<br/>
            </SubHeaderText>
            {/* <ButtonContainer>
              <Button fullWidth as="a" href="/#/swap" style={{ background: 'linear-gradient(to right, #0071BC, #39BEEC)', borderRadius: '6px' }}>
                Launch App
              </Button>
            </ButtonContainer> */}
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
              <img src="images/Website/Hero2Dex.png" alt="Hero2Dex" />
            </DynamicImageContainer>
          </ImageDiv>
        </HomeWrapper>
      </BG>
    </PageSection>
  )
}

export default Website