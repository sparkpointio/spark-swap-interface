import React from 'react'
import styled from 'styled-components'
import AirdropBannerMobile from '../components/Logo/airdrop_banner_mobile.png'
import AirdropBanner from '../components/Logo/airdrop_banner.png'



const Container = styled.div`
    margin-bottom: 80px;
    max-width: 1024px;
    border-box: box-sizing;
    bottom: 0;
    @media (max-width: 500px) {
        margin-bottom: 40px;
        margin-top: -40px;
        
    }
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

export default function PageBanner(){
    return (
        <Container>
            <a href="https://app.sparkswap.finance/#/airdrop">
            <StyledImg src={AirdropBanner} alt="airdrop_banner" />
            <StyledImgMobile src={AirdropBannerMobile} alt="airdrop_banner" />
            </a>
        </Container>
    )
}