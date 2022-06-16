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
  margin-bottom: 1em;

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

  @media screen and (max-width: 768px) {
    font-size: 2em;
  }
`

const Heading2 = styled.div`
  color: ${Colors.text1};
  text-align: center;
  font-size: 1.5em;
  padding: 1em 0em 2em 0em;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`

const Subtitle = styled.div`
  color: ${Colors.text2};
  text-align: center;
  padding: 0em 8em 0em 8em;
  font-size: 1.5em;

  @media screen and (max-width: 850px) {
    padding: 0em 2em 0em 2em;
  }

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`

const HeadingBackground = styled(Heading)`
  font-size: 13em;
  opacity: 0.3;
  -webkit-text-stroke: 3px #0071BC;
  -webkit-text-fill-color: transparent;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
`

const HeadingWrapper = styled.div`
  position: absolute;
  text-align: center;
  z-index: 2;
`

const Title: React.FC<{ value?: string; value2?: string; subtitle?: string; noBg?: boolean }> = ({ value, value2, subtitle, noBg }) => {
  return (
    <Header>
      <HeadingWrapper>
        <Heading>{value}</Heading>
        {value2 && <Heading2>{value2}</Heading2>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </HeadingWrapper>
      {!noBg && <HeadingBackground>{value}</HeadingBackground>}
    </Header>
  )
}

export default Title
