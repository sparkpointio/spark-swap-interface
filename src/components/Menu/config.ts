import { MenuEntry } from '@aldrickb/sparkswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.srk.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap'
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance'
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com'
      }
    ]
  }
]

export default config
