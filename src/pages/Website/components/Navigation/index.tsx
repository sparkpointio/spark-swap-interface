import React from 'react'
import { useMatchBreakpoints } from '@sparkpointio/sparkswap-uikit'
import { BodyWrapper, StyledNav, Wrapper, Inner, MobileOnlyOverlay} from "./styled";
import NavbarMenu from './NavbarMenu';
import Logo from './Logo'
import links from "./config";

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
        {!isMobile && <NavbarMenu links={links} />}
      </StyledNav>
      <BodyWrapper>
      <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Navigation