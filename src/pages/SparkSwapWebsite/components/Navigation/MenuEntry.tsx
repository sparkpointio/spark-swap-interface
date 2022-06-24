import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { Colors } from '../styles/Layout/Colors'

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed?: boolean; isActive?: boolean; linkType?: string }>`
  color: ${({ isActive }) => isActive && Colors.accent3};
  cursor: pointer;
  transition: color 0.4s;
  flex-grow: 1;
  display: inline-block;
  vertical-align: top;
  position: relative;
  text-align: center;
  padding: 7px 0px;
  ${({linkType, theme}) => linkType === 'launcher' && `
  background: rgb(57,190,236);
  background: linear-gradient(to right, #0071BC, #39BEEC);
  border-radius: 6px;
  color: ${theme.colors.text};
  padding: 12px;
  `}
  &:hover {
    &::before {
      position: absolute;
        transform: translateX(-50%);
        background: ${({theme}) => theme.colors.primary};
        bottom: 0;
        height: 2px;
        content: '';
        width: 100%;
        left: 50%;
      }
  }
  @media (max-width: 836px){
    &::before {
      display: none;
  }
  ${({theme}) => theme.mediaQueries.md} {
    padding: 20px 10px;
  }
`;

const MenuEntry = styled.div<Props>`
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "12px" : "14px")};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")};
  color: ${({ theme }) => theme.colors.textSubtle};
  // box-shadow: ${({ isActive, theme }) => (isActive ? `0 5px 5px ${theme.colors.primary}` : "none")};
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  svg {
    fill: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.textSubtle)};
  }
  // Safari fix
  flex-shrink: 0;
  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
    color: white;
  }
  &.rainbow svg {
    fill: white;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { MenuEntry, LinkLabel };