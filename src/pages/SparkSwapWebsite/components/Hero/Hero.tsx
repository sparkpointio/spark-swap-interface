import React, { useContext, useEffect, useState } from 'react'
// import { useLocation, Route, useRouteMatch } from 'react-router-dom'
import styled, { ThemeContext } from 'styled-components'
import { Text, Flex, Heading, Button } from '@sparkpointio/sparkswap-uikit'
import { SvgIcon } from '@material-ui/core'
import { ReactComponent as HeroSwap } from 'assets/svg/HeroSwap.svg'
import { TwoColumnHeader } from '../styles/Column'
import PageSection from '../styles/Layout'
import { Title } from '../Elements'
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
    width: 900px;
    height: auto;
    margin: 35px;
  }
  @media (max-width: 1600px) {
    width: 620px;
    height: 620px;
    margin: 20px;
  }
  @media (max-width: 1366px) {
    height: 500px;
    // width: 500px;
    padding-right: 90px;
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
    padding: 0px 0px 40px 120px;
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
  // padding: 5em 0em;
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

const ImageDiv = styled.div`
  // margin: 80px auto;
  padding: 8em 4em;
  @media screen and (max-width: ${breakpoints.Desktop.laptopL}px) {
    padding: 9em auto 9em 19em;
  }
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    padding: 30px;
  }
`

const VolumeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
`

const VolumeContainer = styled.div``

const VolumeTitle = styled(Text)`
  color: ${Colors.accent3};
  font-family: 'Monda', sans-serif;
  font-size: 27px;
`

const VolumeValue = styled.p`
  color: ${Colors.text1};
  font-size: 3.2em;
`

const CustomHeading = styled.div`
  font-family: 'Quatro';
  // font-weight: bold;
  color: ${Colors.accent3};
  font-size:  4.5em;
  @media screen and (max-width: 1366px) {
    font-size: 3em;
    width: 500px;
  }
  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    margin: 2.5em 0em 2em 0em;
  }
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    font-size: 2em;
    text-align: center;

  }
`

const CustomHeading2 = styled.span`
  font-family: 'Quatro';
  font-weight: bold;
  color: ${Colors.accent3};
  font-size: 4.5em;
  display: inline-block;
  
  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
    margin: 2.5em 0em 2em 0em;
  }
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    font-size: 2em;
    text-align: center;
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
          {/* <ImageDiv>
            <DynamicImageContainer>
              <img src="images/Website/Hero2Dex.png" alt="Hero2Dex" />
            </DynamicImageContainer>
          </ImageDiv> */}
          
          <StyledFlex flexDirection="column">
            {/* <HeadingContainer>
              <img src="images/Website/sparkswap-heading.png" alt="SparkSwap Heading" />
            </HeadingContainer> */}
            <div>
              <CustomHeading>New and Improved <br/>
                <span style={{ color: '#39BEEC', fontWeight: 'bold', fontFamily: 'Quatro' }}>Spark</span>
                <span style={{ color: '#0071BC', fontWeight: 'bold', fontFamily: 'Quatro' }}>Swap</span>
                <span style={{ color: '#FFFFFF', fontWeight: 'bold', fontFamily: 'Quatro' }}>{' '}DEX</span>
              </CustomHeading>
            </div>
            
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