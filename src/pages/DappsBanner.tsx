import React from 'react'
import { Text, Flex, Footer, Heading } from '@sparkpointio/sparkswap-uikit';
import styled from 'styled-components'
import { Grid } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import LaunchBanner from '../components/Logo/launch_banner.png'
import BridgeBanner from '../components/Logo/bridge_banner.png'
import NftBanner from '../components/Logo/nft_banner.png'
import StakeBanner from '../components/Logo/stake_banner.png'

const Container = styled.div`
    margin-bottom: 0;
    max-width: 1024px;
    border-box: box-sizing;
    bottom: 0;
`
const StyledImg = styled.img`
    height: auto;
    display: block;
    background-attachment: fixed;
    // margin-top: 20px;
    @media (max-width: 500px) {
        display: none;
    }
`

const StyledImgMobile = styled.img`
    height: auto;
    margin-top: auto;
    background-attachment: fixed;
    // margin-top: 20px;
    display: none;
    @media (max-width: 500px) {
        display: block;
    }
`

export default function DappsPageBanner() {
    const muitheme = useTheme()
    const largeScreen = useMediaQuery(muitheme.breakpoints.up('md'))
    return (
        <Grid>
            <Heading size='xl' margin="50px 0" style={{ textAlign: 'center' }}> Explore our SparkSwap DApps </Heading>

            <Flex style={largeScreen ? { maxWidth: '1024px', flexDirection: 'row', margin: '30px 0px', columnGap: '30px' } : { flexDirection: 'column', rowGap: '20px', margin: '20px 0px' }}>
                <div>
                    <a href="https://bridge.sparkswap.finance/#/bridge">
                        <StyledImg src={BridgeBanner} alt="bridge_banner" />
                        <StyledImgMobile src={BridgeBanner} alt="bridge_banner" />
                    </a>
                </div>
                <div>
                    <a href="https://app.sparkswap.finance/#/pools">
                        <StyledImg src={StakeBanner} alt="stake_banner" />
                        <StyledImgMobile src={StakeBanner} alt="stake_banner" />
                    </a>
                </div>
            </Flex>
            <Flex style={largeScreen ? { maxWidth: '1024px', flexDirection: 'row', columnGap: '30px' } : { flexDirection: 'column', rowGap: '20px' }}>
                <div>
                    <a href="https://app.sparkswap.finance/#/">
                        <StyledImg src={LaunchBanner} alt="launch_banner" />
                        <StyledImgMobile src={LaunchBanner} alt="launch_banner" />
                    </a>
                </div>
                <div>
                    <a href="https://nft.sparkswap.finance/#/home">
                        <StyledImg src={NftBanner} alt="nft_banner" />
                        <StyledImgMobile src={NftBanner} alt="nft_banner" />
                    </a>
                </div>
            </Flex>
        </Grid>

    )
}
