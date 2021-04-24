import React from 'react'
import styled from 'styled-components'
import { Card } from '@sparkpointio/sparkswap-uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  max-width: 1024px;
  width: 100%;
  z-index: 5;
  min-height: auto;  
  @media ( max-width: 320px) {
    width: 300px;
  }

  margin-top: 2rem;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
