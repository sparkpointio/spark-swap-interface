import React from 'react'
import { Flex } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'

const Container = styled(Flex)<{ direction?: string; background?: string; padding?: string }>`
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  height: auto;
  width: 100%;
  background: ${(props) => props.background};
  padding: ${(props) => props.padding};
  line-height: normal;

  @media (max-width: 425px) {
    padding-top: 0;
  }
`

const Layout: React.FC<{ direction?: string; id?: string; background?: string; padding?: string; }> = ({ direction, id, children, background, padding }) => {
  return (
    <Container id={id} direction={direction} background={background} padding={padding}>
      {children}
    </Container>
  )
}

export default Layout