import { Button, Flex} from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'
import { Colors } from '../../styles/Layout/Colors'

export const NavOption = styled(Button)<{ activeIndex: boolean }>`
  background-color: ${({ activeIndex, theme}) => (activeIndex ? Colors.accent3 : 'transparent')};
  color: ${({ theme, activeIndex }) => (activeIndex ? theme.colors.text : theme.colors.textSubtle)};
  padding: 0 3rem;
`

export const NavContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  border-bottom: 0.5px solid ${Colors.accent3};
  width: 100%;
  flex-flow: wrap row;
  row-gap: 1rem;
  column-gap: 5rem;
`

export const StyledFlex = styled(Flex)`
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`