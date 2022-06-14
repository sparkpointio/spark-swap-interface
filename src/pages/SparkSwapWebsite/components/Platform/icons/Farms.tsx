import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon'
import { ReactComponent as FarmsIcon } from './images/Farms.svg'

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useContext(ThemeContext)

  return <div style={{ padding: '12.5px 0px' }}><SvgIcon width={120} height={120} Icon={FarmsIcon} /></div>
}

export default Icon
