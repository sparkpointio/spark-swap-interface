import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon'
import { ReactComponent as NftIcon } from './images/Nft.svg'

const Icon: React.FC<SvgProps> = (props) => {
  return <SvgIcon width={100} Icon={NftIcon} />
}

export default Icon
