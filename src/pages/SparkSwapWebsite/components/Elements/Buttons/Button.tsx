import { Button } from '@sparkpointio/sparkswap-uikit'
import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../styles/Layout/Colors'

const StyledButton = styled(Button)`
background: linear-gradient(to right, #0071BC, #39BEEC);
color: ${Colors.text1};
height: 45px;
`

export const SignUpButton = styled(StyledButton)`
  border-radius: 3px;
`
export const MessageSendBtn = styled(StyledButton)`
  border-radius: 3px;
`
