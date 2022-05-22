import React, { useContext } from 'react'
// import { useLocation, Route, useRouteMatch } from 'react-router-dom'
import styled, { ThemeContext } from 'styled-components'
import { Text, Flex, Heading, Button } from '@sparkpointio/sparkswap-uikit'
import { TwoColumnHeader } from '../styles/Column'
import PageSection from '../styles/Layout'
import { StyledContainer, ImageContainer, ButtonContainer } from '../styles/Containers'

const DynamicImageContainer = styled(ImageContainer)`
  height: 850px;
  @media (max-width: 1360px) {
    height: 500px;
  }
  @media (max-width: 500px) {
    height: 300px;
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
  @media screen and (max-width: 1360px) {
    padding: 40px 80px;
  }
`

const BG = styled(StyledContainer)`
  padding: 3rem 0 0 0;
  min-height: 800px;
  justify-content: start;
  position: relative;
  @media (min-width: 1100px) and (min-height: 815px) {
    height: 100vh;
  }
`

const HomeWrapper = styled(TwoColumnHeader)`
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

const Website: React.FC = () => {
  const theme = useContext(ThemeContext)

  return (
    <PageSection direction="column">
      <BG>
        <HomeWrapper>
          <StyledFlex flexDirection="column">
            <StyledHeading color={theme.colors.primary}>SparkSwap 1.0 IS HERE</StyledHeading>
            <Text fontSize="19px">
              {' '}
              $500,000 worth of SRK and SFUEL allocated for liquidity and rewards. Join now and receive an airdrop
            </Text>
            <ButtonContainer>
              <Flex style={{ width: '50%' }}>
                <Button fullWidth style={{ borderRadius: '6px' }}>
                  Launch App
                </Button>
              </Flex>
            </ButtonContainer>
          </StyledFlex>
          <Flex margin="20px">
            <DynamicImageContainer>
              <img src="images/sparkswap-dashboard.png" alt="SparkSwap Dashboard" />
            </DynamicImageContainer>
          </Flex>
        </HomeWrapper>
      </BG>
    </PageSection>
  )
}

export default Website