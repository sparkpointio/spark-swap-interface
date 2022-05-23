import React from 'react'
import styled from 'styled-components'
import { Flex } from '@sparkpointio/sparkswap-uikit'

const Heading = styled.h1`
  color: #ffffff;
`

const Header = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Title: React.FC<{ value?: string }> = ({ value }) => {
  return (
    <Header>
      <Heading>{value}</Heading>
    </Header>
  )
}

export default Title
