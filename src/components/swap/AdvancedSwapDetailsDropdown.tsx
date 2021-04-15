import React from 'react'
import styled from 'styled-components'
import { useLastTruthy } from '../../hooks/useLast'
import { AdvancedSwapDetails, AdvancedSwapDetailsProps } from './AdvancedSwapDetails'

const AdvancedDetails= styled.div<{ show: boolean }>`
  // padding-top: calc(10px + 2rem);
  padding-bottom: 20px;

  width: 100%;
  // max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({ theme }) => theme.colors.textSubtle};
  // z-index: 1;
  // transform: ${({ show }) => (show ? 'translateY(0%)' : 'translateY(-100%)')};
  // margin-top: -2rem;
  transition: transform 300ms ease-in-out;
`

export default function AdvancedSwapDetailsDropdown({ trade, ...rest }: AdvancedSwapDetailsProps) {
  const lastTrade = useLastTruthy(trade)

  return (
    <AdvancedDetails show={Boolean(trade)}>
      <AdvancedSwapDetails {...rest} trade={trade ?? lastTrade ?? undefined}  />
    </AdvancedDetails>
  )
}
