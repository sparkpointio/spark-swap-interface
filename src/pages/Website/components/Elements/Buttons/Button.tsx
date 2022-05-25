import { Button } from '@sparkpointio/sparkswap-uikit'
import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../styles/Layout/Colors'

export const StyledButton = styled(Button)`
background: rgb(57,190,236);
background: linear-gradient(277deg, rgba(57,190,236,1) 13%, rgba(0,113,188,1) 59%);
color: ${Colors.text1};
padding: 12px;
`