import styled from "styled-components";
import { MENU_HEIGHT, SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_REDUCED } from "./config";
import { breakpoints } from "../styles/Layout/Breakpoints";
import Overlay from '../Overlay'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledNav = styled.div<{ showMenu?: boolean; isMobile?: boolean;}>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: transparent;
  z-index: 20;
  transform: translate3d(0, 0, 0);
  padding: ${({ isMobile }) => !isMobile && `0px 50px 0px 50px`};
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
  }
`;

export const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  ${({ theme }) => theme.mediaQueries.nav} {
    // margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    margin-left: ${SIDEBAR_WIDTH_REDUCED};
  }
`;



// Components
export const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;
  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;