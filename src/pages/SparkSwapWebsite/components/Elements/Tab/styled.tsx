import { Button, Flex} from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'

export const NavOption = styled(Button)<{ activeIndex: boolean }>`
  background-color: ${({ activeIndex, theme}) => (activeIndex ? theme.colors.primary : 'transparent')};
  color: ${({ theme, activeIndex }) => (activeIndex ? theme.colors.text : theme.colors.textSubtle)};
  padding: 0 2rem;
`

export const NavContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  border-bottom: ${({theme}) => `0.5px solid ${theme.colors.primary}`};
  width: 100%;
  flex-flow: wrap row;
  row-gap: 1rem;
  column-gap: 1.5rem;
`
