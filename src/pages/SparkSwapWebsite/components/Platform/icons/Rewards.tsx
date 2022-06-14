import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon'
import { ReactComponent as RewardsIcon } from './images/Rewards.svg'

const Icon: React.FC<SvgProps> = (props) => {
  return <SvgIcon width={120} height={120} Icon={RewardsIcon} />
}

export default Icon
