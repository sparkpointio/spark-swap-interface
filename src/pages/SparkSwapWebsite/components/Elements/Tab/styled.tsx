import { Button } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'

export const NavOption = styled(Button)<{ activeIndex: boolean }>`
  background-color: ${({ activeIndex }) => (activeIndex ? '#00f4fd' : 'transparent')};
  color: ${({ theme, activeIndex }) => (activeIndex ? 'black' : theme.colors.textSubtle)};
`

export const NavContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid #00f4fd;
  width: 100%;
  flex-flow: wrap row;
  row-gap: 1rem;
  column-gap: 1.5rem;
`
