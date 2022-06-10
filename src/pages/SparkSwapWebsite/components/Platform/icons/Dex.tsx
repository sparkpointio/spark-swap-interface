import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon'
import { ReactComponent as DexIcon } from './images/Dex.svg'

const Icon: React.FC<SvgProps> = (props) => {
  return <SvgIcon width={120} Icon={DexIcon} />
}

export default Icon
