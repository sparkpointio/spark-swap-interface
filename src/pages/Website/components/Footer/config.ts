import { MenuEntry } from '../Navigation/types';

export interface Socials {
  name: string;
  href: string;
}

export const socials: Socials [] = [
  {
    name: 'Twitter',
    href: ''
  },
  {
    name: 'Facebook',
    href: ''
  },
  {
    name: 'Instagram',
    href: ''
  },
  {
    name: 'Discord',
    href: ''
  },
  {
    name: 'Youtube',
    href: ''
  },
  {
    name: 'Medium',
    href: ''
  },
  {
    name: 'Reddit',
    href: ''
  },
  {
    name: 'Medium',
    href: ''
  }
]

export const links: MenuEntry[] = [
  {
    label: 'Home',
    href: "/",
  },
  {
    label: 'Team',
    href: "#team"
  },
  {
    label: 'Whitepaper',
    href: "#whitepaper"
  },
 
  {
    label: 'Ecosystem',
    href: "#ecosystem"
  },
  {
    label: 'Roadmap',
    href: "#roadmap"
  },
  {
    label: 'Launch App',
    href: "https://app.sparkswap.finance",
    type: 'launcher'
  },
  {
    label: 'Governance',
    href: "#governance"
  },
]
