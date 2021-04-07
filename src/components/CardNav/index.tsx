import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@sparkpointio/sparkswap-uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  display: flex;
`

const StyledButtonMenu = styled(ButtonMenu)`
  & {
    width: 100%
  }
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  <StyledNav>
    <div style={{flex: 1, textAlign: 'center'}}>
    <StyledButtonMenu  activeIndex={activeIndex}  variant="subtle">
      <ButtonMenuItem fullWidth id="swap-nav-link" to="/swap" as={Link}>
        <TranslatedText translationId={8}>Swap</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem fullWidth id="pool-nav-link" to="/pool" as={Link}>
        <TranslatedText translationId={74}>Liquidity</TranslatedText>
      </ButtonMenuItem>
    </StyledButtonMenu>
    </div>
  </StyledNav>
)

export default Nav
