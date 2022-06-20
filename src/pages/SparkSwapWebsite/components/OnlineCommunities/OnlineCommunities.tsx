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
import { Colors } from '../styles/Layout/Colors'

const StyledText = styled(Text)`
  color: ${Colors.text2};
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
  color: ${Colors.accent3};
  font-size: 4em;
  margin: 20px 0px;
  text-align: left;
  font-family: 'Quatro';
  font-weight: bold;
  z-index: 2;

  @media screen and (max-width: 900px) {
    font-size: 3em;
  }

  @media screen and (max-width: 500px) {
    text-align: center;
  }

  @media screen and (max-width: 425px) {
    font-size: 2em;
  }
`

const ContentContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0em 5em 5em 5em;

  @media screen and (max-width: 425px) {
    margin: 5em 2em 5em 2em;
  }
`

const SvgContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Content = () => {
  return (
    <FlexContainer>
      <SvgContainer>
        <SvgIcon Icon={CommunityIcon} />
      </SvgContainer>
      <ContentContainer>
        <CustomHeading>Online Communities</CustomHeading>
          <StyledText>
            {' '}
            Stay updated on our latest announcement by subscribing to our newsletter and following our social media accounts. 
            Engage and stay connected too with our #SparkyCommunity members by joining our different community channels.{' '}
          </StyledText> {' '}
          &nbsp;
          <SocialGroup />
      </ContentContainer>
    </FlexContainer>
  )
}


const OnlineCommunities = () => {
  return (
    <PageSection direction='column' background='#030A14' padding='8em 0em 0em 0em' position='left' positionSecondary='bottom' backgroundText='online communities'>
      <div id="onlinecommunities">
        <Content/>
      </div>
    </PageSection>
  )
}

export default OnlineCommunities