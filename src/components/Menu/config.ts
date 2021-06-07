import { MenuEntry } from '@sparkpointio/sparkswap-uikit'

const config: MenuEntry[] = [
  {
    label: "Swap",
    icon: "TradeIcon",
    href: "/swap",
  },
  {
    label: "Farm",
    icon: "FarmIcon",
    href: "https://app.srk.finance/#/stake",
  },
  {
    label: "Pool",
    icon: "PoolIcon",
    href: "https://app.srk.finance/#/pool",
  },
  {
    label: "Bridge",
    icon: "BridgeIcon",
    href: "https://app.srk.finance/#/bridge",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    href: "https://sparkswap.info/#/home",
  },
  {
    label: "Airdrop",
    icon: "AirdropIcon",
    href: "https://app.srk.finance/#/airdrop"
  },
  {
    label: "Help",
    icon: "MoreIcon",
    href: "https://medium.com/theecosystem/a-beginners-guide-to-sparkswap-79f92a2f7074"
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   initialOpenState: true,
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: '/swap'
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: '/pool'
  //     }
  //   ]
  // },
  /*
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://coinmarketcap.com/currencies/sparkpoint/",
      },
      {
        label: "Trade SRK",
        href: "https://srk.sh/trade",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "SparkDeFi",
        href: "https://srk.finance/",
      },
      {
        label: "SparkPoint",
        href: "https://sparkpoint.io/",
      },
      {
        label: "Github",
        href: "https://github.com/sparkpointio",
      },
      {
        label: "White Paper",
        href: "https://github.com/sparkpointio/sparkdefi-whitepaper/blob/main/WHITEPAPER.md",
      },
      {
        label: "Blog",
        href: "https://medium.com/theecosystem",
      },
    ],
  },
  */
]

export default config
