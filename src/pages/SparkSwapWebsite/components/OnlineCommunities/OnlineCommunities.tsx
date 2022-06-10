import React from 'react'
import { Text, Flex, Heading, Button, Image } from '@sparkpointio/sparkswap-uikit'
import styled, { ThemeContext } from 'styled-components'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon'
import { TwoColumn  } from '../styles/Column'
import { StyledContainer } from '../styles/Containers'
import { Title } from '../Elements'
import PageSection from '../styles/Layout'
import SocialGroup from '../Footer/SocialGroup'
import { ReactComponent as CommunityIcon } from './icons/Communities.svg'

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 23px;
  font-family: 'Monda', sans-serif;
  @media screen and (max-width: 1366px) {
    font-size: 21px;
  }
  @media screen and (max-width: 500px) {
    font-size: 17px;
    text-align: left;
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

const CustomHeading = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 4em;
  margin: 20px 0px;
  text-align: left;
  font-family: 'Quatro';
  font-weight: bold;
  z-index: 2;

  @media screen and (max-width: 425px) {
    font-size: 2em;
  }
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
      {/* <ImgContainer>
        <img src="/images/Website/innovative-1.png" alt="Innovative 1" />
      </ImgContainer> */}
      <SvgIcon Icon={CommunityIcon} />
      <ContentContainer>
      <CustomHeading>Online Communities</CustomHeading>
        <StyledText>
          {' '}
          Stay updated of our latest announcement by subscribing to our newsletter and following our social media accounts. 
          Engage and stay connected too with our #SparkyCommunity members by joining our different community channels.{' '}
        </StyledText> {' '}
        &nbsp;
        <SocialGroup />
      </ContentContainer>
    </>
  )
}


const OnlineCommunities = () => {
  return (
    <PageSection direction='column' background='#030A14' padding='8em 0em 8em 0em'>
      <div id="ecosystem">
      
      <StyledContainer>
        <TwoColumn>
        
          <InnovativeSection1/>
          
        </TwoColumn>
      </StyledContainer>
      </div>
    </PageSection>
  )
}

export default OnlineCommunities