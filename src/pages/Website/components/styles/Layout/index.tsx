import React from 'react'
import { Flex } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'

const Container = styled(Flex)<{ direction?: string; background?: string; padding?: string }>`
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  border: solid;
  border-color: red;
  height: auto;
  width: 100%;
  background: ${(props) => props.background};
  padding: ${(props) => props.padding};
`

const Layout: React.FC<{ direction?: string; id?: string; background?: string; padding?: string; }> = ({ direction, id, children, background, padding }) => {
  return (
    <Container id={id} direction={direction} background={background} padding={padding}>
      {children}
    </Container>
  )
}

export default Layout