import { MenuEntry } from './types'

const links: MenuEntry[] = [
  {
    label: 'Home',
    href: "/"
  },
  {
    label: 'Ecosystem',
    href: "/ecosystem"
  },
  {
    label: 'Governance',
    href: "/governance"
  },
  {
    label: 'Team',
    href: "/team"
  },
  {
    label: 'Roadmap',
    href: "/roadmap"
  },
  {
    label: 'Whitepaper',
    href: "/whitepaper"
  },
  {
    label: 'Launch App',
    href: "https://app.sparkswap.finance",
    type: 'launcher'
  },
]

export const MENU_HEIGHT = 60;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 175;
export const SIDEBAR_WIDTH_REDUCED = 0;

export default links