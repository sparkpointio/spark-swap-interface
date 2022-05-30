import { MenuEntry } from './types'

const links: MenuEntry[] = [
  {
    label: 'Home',
    href: "#",
    type: '/',
  },
  {
    label: 'Ecosystem',
    href: "#ecosystem"
  },
  {
    label: 'Features',
    href: "#features"
  },
  {
    label: 'Governance',
    href: "#governance"
  },
  {
    label: 'Team',
    href: "#team"
  },
  {
    label: 'Whitepaper',
    href: "https://github.com/sparkpointio/sparkdefi-whitepaper/blob/main/WHITEPAPER.md"
  },
  {
    label: 'Launch App',
    href: "https://sparkswap.finance/#/swap",
    type: 'launcher'
  },
]

export const MENU_HEIGHT = 60;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 175;
export const SIDEBAR_WIDTH_REDUCED = 0;

export default links