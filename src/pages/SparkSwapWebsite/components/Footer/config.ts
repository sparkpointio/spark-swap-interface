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
    href: 'https://www.youtube.com/c/sparkpointio'
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
    type: '/',
  },
  {
    label: 'Ecosystem',
    href: "https://medium.com/theecosystem"
  },
  {
    label: 'Features',
    href: "#features"
  },
  {
    label: 'Whitepaper',
    href: "https://github.com/sparkpointio/sparkdefi-whitepaper/blob/main/WHITEPAPER.md"
  },
  {
    label: 'Launch App',
    href: "/swap",
    type: 'launcher'
  },
  {
    label: 'Governance',
    href: "#governance"
  },
  
  {
    label: 'Roadmap',
    href: "#roadmap"
  },
  {
    label: 'Team',
    href: "#team"
  },
  {
    label: 'Contact Us',
    href: '#contact-us'
  },

]
