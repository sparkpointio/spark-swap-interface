import { MenuEntry } from '@sparkpointio/sparkswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/liquidity'
      }
    ],
  },
  {
    label: 'Stake',
    icon: 'FarmIcon',
    items: [
      {
        label: "Farms",
        href: "https://app.sparkswap.finance/#/farms",
      },
      {
        label: "Pools",
        href: "https://app.sparkswap.finance/#/pools",
      },
      {
        label: "Old Farms/Pools",
        href: "https://app.srk.finance/#/stake",
      },
    ],
  },
  // {
  //   label: "Farm",
  //   icon: "FarmIcon",
  //   href: "https://app.srk.finance/#/stake",
  // },
  // {
  //   label: "Pool",
  //   icon: "PoolIcon",
  //   href: "/pools",
  // },
  {
    label: 'Bridge',
    icon: 'BridgeIcon',
    href: 'https://app.sparkswap.finance/#/bridge',
  },
  {
    label: 'Launch',
    icon: 'LaunchIcon',
    href: 'https://app.sparkswap.finance/#/',
  },
  {
    label: 'Airdrop',
    icon: 'AirdropIcon',
    href: 'https://app.sparkswap.finance/#/airdrop',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    items: [
      {
        label: 'Home',
        href: 'https://nft.sparkswap.finance/#/home',
      },
      {
        label: 'Create',
        href: 'https://nft.sparkswap.finance/#/createNFT',
      },
      {
        label: 'My NFTs',
        href: 'https://nft.sparkswap.finance/#/MyNFT',
      },
      {
        label: 'Marketplace',
        href: 'https://nft.sparkswap.finance/#/marketplace',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Info',
        href: 'https://sparkswap.info/#/home',
      },
      {
        label: 'Teams',
        href: '/teams',
      },
      {
        label: 'Help',
        href: 'https://medium.com/theecosystem/a-beginners-guide-to-sparkswap-79f92a2f7074',
      },
    ]
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
