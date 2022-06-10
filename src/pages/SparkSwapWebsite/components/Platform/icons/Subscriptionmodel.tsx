import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { SvgProps } from 'components/SvgIcon/types'
import { ReactComponent as SubscriptionmodelIcon } from 'assets/About/Subscriptionmodel.svg'
import { ReactComponent as SubscriptionmodellightIcon } from 'assets/About/Subscriptionmodel_light.svg'
import SvgIcon from 'components/SvgIcon'

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useContext(ThemeContext)

  return <SvgIcon width={100} Icon={theme.isDark ? SubscriptionmodelIcon : SubscriptionmodellightIcon} />
}

export default Icon
