import React from 'react'
import styled from 'styled-components'
import { Flex } from '@sparkpointio/sparkswap-uikit'
import { Colors } from '../../styles/Layout/Colors'

const Header = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-bottom: 5em;

  @media screen and (max-width: 600px) {
    margin: 3em 0em 3em 0em;
  }
`

const Heading = styled.div`
  color: ${Colors.accent3};
  font-size: 4em;
  text-align: center;
  font-family: 'Quatro';
  font-weight: bold;
  z-index: 2;

  @media screen and (max-width: 425px) {
    font-size: 2em;
  }
`

const Heading2 = styled.div`
  color: ${Colors.text1};
  text-align: center;
  font-size: 1.5em;
  padding: 1em 0em 2em 0em;
  @media screen and (max-width: 425px) {
    font-size: 1em;
  }
`

const Subtitle = styled.div`
  color: ${Colors.text1};
  text-align: center;
  padding: 0em 8em 0em 8em;
  font-size: 1.5em;

  @media screen and (max-width: 850px) {
    padding: 0em 2em 0em 2em;
  }

  @media screen and (max-width: 425px) {
    font-size: 1em;
  }
`

const Title: React.FC<{ value?: string; value2?: string; subtitle?: string; }> = ({ value, value2, subtitle }) => {
  return (
    <Header>
      <Heading>{value}</Heading>
      <Heading2>{value2}</Heading2>
      <Subtitle>{subtitle}</Subtitle>
    </Header>
  )
}

export default Title
