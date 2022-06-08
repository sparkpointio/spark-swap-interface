import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon'
import { ReactComponent as LaunchIcon } from './images/Launch.svg'

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useContext(ThemeContext)

  return <SvgIcon width={141} Icon={LaunchIcon} />
}

export default Icon
