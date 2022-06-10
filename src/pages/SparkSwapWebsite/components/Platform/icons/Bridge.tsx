import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon'
import { ReactComponent as BridgeIcon } from './images/Bridge.svg'

const Icon: React.FC<SvgProps> = (props) => {
  return <SvgIcon width={118.8} Icon={BridgeIcon} />
}

export default Icon
