import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon'
import { ReactComponent as DaoIcon } from './images/Dao.svg'

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useContext(ThemeContext)

  return <SvgIcon width={120} height={120} Icon={DaoIcon} />
}

export default Icon
