import React from 'react'
import { Flex } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'
import { Colors } from './Colors'

const Container = styled(Flex)<{ direction?: string; background?: string; padding?: string }>`
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  height: auto;
  width: 100%;
  background: ${(props) => props.background};
  padding: ${(props) => props.padding};
  line-height: normal;
  position: relative;

  @media (max-width: 425px) {
    padding-top: 0;
  }
`

const HeadingBackground = styled.div<{position?: string; position2?:string; positionSecondary?: string; positionSecondary2?: string; width?: string}>`
  color: ${Colors.accent3};
  font-family: 'Quatro';
  font-weight: bold;
  font-size: 13em;
  opacity: 0.3;
  -webkit-text-stroke: 3px #0071BC;
  -webkit-text-fill-color: transparent;
  overflow: hidden;
  white-space: ${(props) => props.position === 'right' || props.position === 'left' || props.position2 === 'right' || props.position2 === 'left' || props.positionSecondary === 'left' || props.positionSecondary === 'right' || props.positionSecondary2 === 'left' || props.positionSecondary2 === 'right' ? 'wrap' : 'nowrap'};
  position: absolute;
  line-height: 1em;
  width: ${(props) => props.width};
  ${(props) => props.position}: 0;
  ${(props) => props.position2}: 0;
  ${(props) => props.positionSecondary}: 0;
  ${(props) => props.positionSecondary2}: 0;
  text-transform: uppercase;
  ${(props) => props.position === 'right' && 'text-align: right;'}
  ${(props) => props.position === 'left' && 'text-align: left;'}
  ${(props) => props.position2 === 'right' && 'text-align: right;'}
  ${(props) => props.position2 === 'left' && 'text-align: left;'}
  ${(props) => props.positionSecondary === 'right' && 'text-align: right;'}
  ${(props) => props.positionSecondary === 'left' && 'text-align: left;'}
  ${(props) => props.positionSecondary2 === 'right' && 'text-align: right;'}
  ${(props) => props.positionSecondary2 === 'left' && 'text-align: left;'}
`

const Inner = styled.div`
  z-index: 0;
`

const Outer = styled.div`
  z-index: 1;
`

const Layout: React.FC<{ direction?: string; id?: string; background?: string; padding?: string; position?: string; positionSecondary?: string; backgroundText?: string; position2?: string; positionSecondary2?: string; backgroundText2?: string; width?: string }> = ({ direction, id, children, background, padding, position='left', positionSecondary='top', backgroundText, position2='left', positionSecondary2='bottom', backgroundText2, width='100%' }) => {
  return (
    <Container id={id} direction={direction} background={background} padding={padding}>
      <Inner>
        {backgroundText && <HeadingBackground position={position} positionSecondary={positionSecondary} width={width}>{backgroundText}</HeadingBackground>}
        {backgroundText2 && <HeadingBackground position2={position2} positionSecondary2={positionSecondary2} width={width}>{backgroundText2}</HeadingBackground>}
      </Inner>
      <Outer>
        {children}
      </Outer>
    </Container>
  )
}

export default Layout