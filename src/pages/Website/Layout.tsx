import React from 'react'
import { Flex } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'

const Container = styled(Flex)<{ direction?: string }>`
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  border: solid;
  border-color: red;
  height: auto;
  width: 100%;
  margin-bottom: 25px;
  padding-bottom: 25px;
`

const Layout: React.FC<{ direction?: string; id?: string }> = ({ direction, id, children }) => {
  return (
    <Container id={id} direction={direction}>
      {children}
    </Container>
  )
}

export default Layout
