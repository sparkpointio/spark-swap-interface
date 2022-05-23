import React from 'react'
import throttle from 'lodash/throttle'
import { useMatchBreakpoints } from '@sparkpointio/sparkswap-uikit'
import { BodyWrapper, StyledNav, Wrapper, Inner, MobileOnlyOverlay } from './styled'
import NavbarMenu from './NavbarMenu'
import Logo from './Logo'
import links from './config'
import '../styles/App.css'

const Navigation = ({ children }) => {
  const { isXl } = useMatchBreakpoints()
  const [colorChange, setColorChange] = React.useState(false)
  const isMobile = isXl === false
  const [isPushed, setIsPushed] = React.useState(!isMobile)
  const [showMenu, setShowMenu] = React.useState(true)
  const refPrevOffset = React.useRef(window.pageYOffset)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight
      const isTopOfPage = currentOffset === 0
      // Always show the menu when user reach the top
      if (window.scrollY <= 80) {
        setColorChange(false)
      }
      if (isTopOfPage) {
        setShowMenu(true)
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true)
          if (window.scrollY >= 100) {
            setColorChange(true)
          }
        } else {
          // Has scroll down
          setShowMenu(false)
          setColorChange(true)
        }
      }
      refPrevOffset.current = currentOffset
    }
    const throttledHandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledHandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])

  return (
    <Wrapper>
      <StyledNav isMobile={isMobile} showMenu={showMenu} className={colorChange ? 'navbar colorChange' : 'navbar'}>
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
