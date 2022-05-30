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
]

export const links: MenuEntry[] = [
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
    label: 'Newsletter',
    href: '#newsletter'
  },
  {
    label: 'Launch App',
    href: "https://sparkswap.finance/#/swap",
    type: 'launcher'
  },
  {
    label: 'Whitepaper',
    href: "https://github.com/sparkpointio/sparkdefi-whitepaper/blob/main/WHITEPAPER.md"
  },
]
