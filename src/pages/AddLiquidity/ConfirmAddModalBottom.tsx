import React, { useContext } from 'react'
import { Currency, CurrencyAmount, Fraction, Percent } from '@sparkpointio/sparkswap-sdk'
import { Button, Text } from '@sparkpointio/sparkswap-uikit'
import { useUserSlippageTolerance } from 'state/user/hooks'
import { ThemeContext } from 'styled-components'
import { RowBetween, RowFixed } from '../../components/Row'
import CurrencyLogo from '../../components/CurrencyLogo'
import { Field } from '../../state/mint/actions'
import { TYPE } from '../../components/Shared'

const { body: Body } = TYPE

export function ConfirmAddModalBottom({
  noLiquidity,
  price,
  currencies,
  parsedAmounts,
  poolTokenPercentage,
  onAdd,
}: {
  noLiquidity?: boolean
  price?: Fraction
  currencies: { [field in Field]?: Currency }
  parsedAmounts: { [field in Field]?: CurrencyAmount }
  poolTokenPercentage?: Percent
  onAdd: () => void
}) {
  const [allowedSlippage] = useUserSlippageTolerance()
  const theme = useContext(ThemeContext)
  return (
    <div>
      <RowBetween>
        <Body fontSize="12px">{currencies[Field.CURRENCY_A]?.symbol} Deposited</Body>
        <RowFixed>
          <Body fontSize="14px" style={{textAlign: 'right'}}>{parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}</Body>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <Body fontSize="12px">{currencies[Field.CURRENCY_B]?.symbol} Deposited</Body>
        <RowFixed>
          {/* <CurrencyLogo currency={currencies[Field.CURRENCY_B]} style={{ marginRight: '8px' }} /> */}
          <Body fontSize="14px" style={{textAlign: 'right'}}>{parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}</Body>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <Body fontSize="12px">Rates</Body>
        <Body fontSize="14px" style={{textAlign: 'right'}}>
          {`${price?.toSignificant(4)}  ${currencies[Field.CURRENCY_B]?.symbol} per ${
            currencies[Field.CURRENCY_A]?.symbol
          } / ${price?.invert().toSignificant(4)} ${currencies[Field.CURRENCY_A]?.symbol} per ${
            currencies[Field.CURRENCY_B]?.symbol
          }`}
        </Body>
      </RowBetween>

      <RowBetween>
        <Body fontSize="12px">Share of Pool:</Body>
        <Body fontSize="14px" style={{textAlign: 'right'}}>{noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%</Body>
      </RowBetween>
      <div style={{ margin: '0 auto', textAlign: 'center', marginBottom: '10px' }}>
        <Button mt="20px" onClick={onAdd}>
          {noLiquidity ? 'Create Pool & Supply' : 'Confirm Supply'}
        </Button>
      </div>
      <div style={{ margin: '0 auto' }}>
        <Text fontSize="13px" color={theme.colors.textSubtle}>
          {`Note: Output is estimated. If the price changes by more than ${
            allowedSlippage / 100
          }% your transaction will revert.`}{' '}
        </Text>
      </div>
    </div>
  )
}

export default ConfirmAddModalBottom
