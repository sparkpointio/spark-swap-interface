import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Button } from '@sparkpointio/sparkswap-uikit'
import { SvgProps } from 'components/SvgIcon/types'
import { PlatformColumn } from '../styles/Column'
import { Title } from '../Elements'
import PageSection from '../styles/Layout'
import PlatformList from './config'
import { Details } from './types'
import * as IconModule from './icons'
import { Colors } from '../styles/Layout/Colors'

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> }

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 2em;
`

const Box = styled.div<{ background?: string }>`
  padding: 15px;
  line-height: 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  ${({ background }) =>
  background &&
  `
    &:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0.3;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-image: url(${background});
        background-repeat: no-repeat;
        // background-attachment: fixed;
        background-position: center;
        background-size: cover;
    }
`}
`

const BoxHeading = styled(Heading)`
  margin: 15px 0px;
  text-align: center;
  color: ${Colors.accent3};
`

const PlatformBox = ({ image, title, description }: Details) => {
  const Icon = Icons[image]
  const iconElement: React.ReactElement = <Icon width="24px" mr="8px" height="24" />
  return (
    <Box>
      {iconElement}
      <div style={{ textAlign: 'left', margin: '10px' }}>
        <BoxHeading>{title}</BoxHeading>
        <Text fontSize="14px" color="textSubtle" style={{textAlign: 'center'}}>
          {description}
        </Text>
        <div style={{ textAlign: 'center', margin: '20px' }}>
          {title === "SparkSwap DEX" && <Button size="sm" style={{ background: 'linear-gradient(to right, #0071BC, #39BEEC)', borderRadius: '6px' }}>Learn more</Button>}
        </div>
        
      </div>
    </Box>
  )
}

const Renderplatform = () => {
  return PlatformList.map((item) => {
    return <PlatformBox key={item.title} image={item.image} title={item.title} description={item.description} />
  })
}

const Platform: React.FC = () => {
  return (
    <PageSection direction='column' padding='8em 0em 8em 0em' background="linear-gradient(to bottom, #15151A, #000000)">
      <div id="features">
      <Title value="Welcome to SparkSwap DeFi Platform" subtitle="A full-service decentralized finance solution to maximize and unlock your asset&apos;s true value. Welcome to SparkSwap DeFi Platform." />
      
      <Container>
        <PlatformColumn>{Renderplatform()}</PlatformColumn>
      </Container>
      </div>
    </PageSection>
  )
}

export default Platform
