import React from 'react'
import { Flex } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'

const Container = styled(Flex)<{ direction?: string; background?: string }>`
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  border: solid;
  border-color: red;
  height: auto;
  width: 100%;
  background: ${(props) => props.background};
  padding: 8em 0em 8em 0em;
`

const Layout: React.FC<{ direction?: string; id?: string; background?: string; }> = ({ direction, id, children, background }) => {
  return (
    <Container id={id} direction={direction} background={background}>
      {children}
    </Container>
  )
}

export default Layout