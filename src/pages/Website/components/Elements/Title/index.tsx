import React from 'react'
import styled from 'styled-components'
import { Flex } from '@sparkpointio/sparkswap-uikit'

const Header = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-bottom: 5em;

  @media and screen (max-width: 425px) {
    margin-bottom: 0;
  }
`

const Heading = styled.div`
  color: #ffffff;
  font-size: 5em;
  text-align: center;
  font-family: 'Quatro';
  position: absolute;
  font-weight: bold;
  z-index: 2;

  @media and screen (max-width: 425px) {
    font-size: 2em;
  }
`

const HeadingBackground = styled(Heading)`
  font-size: 15em;
  opacity: 0.3;
  -webkit-text-stroke: 3px #0071BC;
  -webkit-text-fill-color: transparent;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  z-index: 1;
`

const Title: React.FC<{ value?: string }> = ({ value }) => {
  return (
    <Header>
      <Heading>{value}</Heading>
      <HeadingBackground>{value}</HeadingBackground>
    </Header>
  )
}

export default Title
