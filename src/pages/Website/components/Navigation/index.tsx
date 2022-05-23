import React from 'react'
import { useMatchBreakpoints } from '@sparkpointio/sparkswap-uikit'
import { BodyWrapper, StyledNav, Wrapper, Inner, MobileOnlyOverlay} from "./styled";
import Logo from './Logo'

const Navigation = ({ children }) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = React.useState(!isMobile);
  const [showMenu, setShowMenu] = React.useState(true);

  return (
    <Wrapper>
      <StyledNav isMobile={isMobile} showMenu={showMenu}>
        <Logo 
        isPushed={isPushed}
        togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
        href="/"
        isMobile={isMobile}
        />
      </StyledNav>
      <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
    </Wrapper>
  )
}

export default Navigation