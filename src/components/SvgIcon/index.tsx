import React from 'react'
import styled from 'styled-components'
// import { SvgContainer } from "./svgicon-styles"

interface Props {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  width?: number
  height?: number
  fill?: string
}

export const SvgContainer = styled.div<{
  height?: number
  width?: number
  fill?: string
}>`
  height: 'auto';
  width: 'auto';
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: ${(props) => (props.fill ? props.fill : props.theme.colors.text)};
    height: ${(props) => (props.height ? `${props.height}px` : '100%')};
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  }
`

const SvgIcon: React.FC<Props> = (props) => {
  const { Icon } = props
  return (
    <SvgContainer {...props}>
      <Icon />
    </SvgContainer>
  )
}

export default SvgIcon
