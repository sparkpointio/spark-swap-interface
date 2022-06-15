import styled from 'styled-components'
import React from 'react'
import { Flex, Text } from '@sparkpointio/sparkswap-uikit'
import { Link } from 'react-router-dom'
import { Menu } from 'react-feather'
import MenuButton from './MenuButton'

interface Props {
  isPushed: boolean
  togglePush: () => void
  href: string
  isMobile: boolean
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`
const StyledImg = styled.img<{isMobile: boolean}>`
  width: ${({isMobile}) => isMobile?  '100px' : '200px'};
`

const Logo: React.FC<Props> = ({ isPushed, togglePush, href, isMobile }) => {
  const innerLogo = <StyledImg alt="icon-logo" src='/SparkSwapLogoWithWord.png' width="220px" isMobile={isMobile}/>

  return (
    <Flex alignItems="center">
      {isMobile && (
        <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
          <Menu />
        </MenuButton>
      )}

      <StyledLink to={href} aria-label="SparkSwap Homepage">
        {innerLogo}
      </StyledLink>
    </Flex>
  )
}

export default Logo
