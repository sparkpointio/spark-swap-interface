import { MenuEntry } from '../Navigation/types';

export interface Socials {
  name: string;
  href: string;
}

export const socials: Socials [] = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/SparkDeFi'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/SparkDeFi'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sparkdefi'
  },
  {
    name: 'Discord',
    href: 'https://discord.com/invite/Sgc6yDEAAe'
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/channel/sparkpointio'
  },
  {
    name: 'Medium',
    href: 'https://medium.com/theecosystem'
  },
  {
    name: 'Reddit',
    href: 'https://www.reddit.com/r/SparkPoint/'
  },
]

export const links: MenuEntry[] = [
  {
    label: 'Home',
    href: "#",
    type: '/'
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
    href: "https://medium.com/theecosystem"
  },
  {
    label: 'Roadmap',
    href: "https://sparkpoint.io/roadmap"
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
