import React from 'react'
import { Currency, Percent, Price } from '@sparkpointio/sparkswap-sdk'
import { Text } from '@sparkpointio/sparkswap-uikit'
import { AutoColumn } from '../../components/Column'
import { AutoRow } from '../../components/Row'
import { ONE_BIPS } from '../../constants'
import { Field } from '../../state/mint/actions'
import { TYPE } from '../../components/Shared'

const { black: Black } = TYPE

export function PoolPriceBar({
  currencies,
  noLiquidity,
  poolTokenPercentage,
  price,
}: {
  currencies: { [field in Field]?: Currency }
  noLiquidity?: boolean
  poolTokenPercentage?: Percent
  price?: Price
}) {
  return (
    <AutoColumn gap="md">
      <AutoRow justify="space-around" gap="4px">
        <AutoRow justify="space-between">
          <Text fontSize="14px" color="textSubtle" pt={1}>
            Price
          </Text>
          <Black>{price?.invert()?.toSignificant(6) ?? '-'} {currencies[Field.CURRENCY_A]?.symbol} per {currencies[Field.CURRENCY_B]?.symbol} / {price?.toSignificant(6) ?? '-'} {currencies[Field.CURRENCY_B]?.symbol} per {currencies[Field.CURRENCY_A]?.symbol} </Black>
        </AutoRow>
        <AutoRow justify="space-between">
          <Text fontSize="14px" color="textSubtle" pt={1}>
            Share of Pool
          </Text>
          <Black>
            {noLiquidity && price
              ? '100'
              : (poolTokenPercentage?.lessThan(ONE_BIPS) ? '<0.01' : poolTokenPercentage?.toFixed(2)) ?? '0'}
            %
          </Black>
        </AutoRow>
      </AutoRow>
    </AutoColumn>
  )
}

export default PoolPriceBar
