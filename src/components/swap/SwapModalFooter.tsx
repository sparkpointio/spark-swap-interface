import { Trade, TradeType } from '@sparkpointio/sparkswap-sdk'
import React, { useMemo, useState, useContext } from 'react'
import { Text, Button } from '@sparkpointio/sparkswap-uikit'
import { Repeat } from 'react-feather'
import {ThemeContext} from 'styled-components'
import { Field } from '../../state/swap/actions'
import {
  computeSlippageAdjustedAmounts,
  computeTradePriceBreakdown,
  formatExecutionPrice,
  warningSeverity,
} from '../../utils/prices'
import { AutoColumn } from '../Column'
import QuestionHelper from '../QuestionHelper'
import { AutoRow, RowBetween, RowFixed } from '../Row'
import FormattedPriceImpact from './FormattedPriceImpact'
import { StyledBalanceMaxMini, SwapCallbackError } from './styleds'

export default function SwapModalFooter({
  trade,
  onConfirm,
  allowedSlippage,
  swapErrorMessage,
  disabledConfirm,
}: {
  trade: Trade
  allowedSlippage: number
  onConfirm: () => void
  swapErrorMessage: string | undefined
  disabledConfirm: boolean
}) {
  const [showInverted, setShowInverted] = useState<boolean>(false)
  const slippageAdjustedAmounts = useMemo(() => computeSlippageAdjustedAmounts(trade, allowedSlippage), [
    allowedSlippage,
    trade,
  ])
  const { priceImpactWithoutFee, realizedLPFee } = useMemo(() => computeTradePriceBreakdown(trade), [trade])
  const severity = warningSeverity(priceImpactWithoutFee)
  const theme = useContext(ThemeContext);
  return (
    <>
      <AutoColumn gap="0px">
        <AutoRow
          style={{
            display: 'flex',
            marginTop: '-30px',
            padding: '0 0 30px 0',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={onConfirm}
            disabled={disabledConfirm}
            variant={severity > 2 ? 'danger' : 'primary'}
            mt="10px"
            id="confirm-swap-or-send"
          >
            {/* {severity > 2 ? 'Swap Anyway' : 'Confirm Swap'} */}
            Confirm
          </Button>

          {swapErrorMessage ? <SwapCallbackError error={swapErrorMessage} /> : null}
        </AutoRow>
          <AutoRow
           style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Text fontSize="12px" color={theme.colors.textSubtle}>Note: Output is estimated. You will receive atleast {slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} or the transaction will revert.</Text>
          </AutoRow>
        <div style={{ margin: '15px 20px 10px 20px' }}>
          <RowBetween align="center">
            <Text fontSize="14px">Rate</Text>
            <Text
              fontSize="14px"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                textAlign: 'right',
                paddingLeft: '8px',
                fontWeight: 500,
              }}
            >
              {formatExecutionPrice(trade, showInverted)}
              {/* <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
                <Repeat size={14} />
              </StyledBalanceMaxMini> */}
            </Text>
          </RowBetween>
          <RowBetween align="center">
            <Text fontSize="14px">Inverse Rate</Text>
            <Text
              fontSize="14px"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                textAlign: 'right',
                paddingLeft: '8px',
                fontWeight: 500,
              }}
            > {formatExecutionPrice(trade, !showInverted)}</Text>
          </RowBetween>
          <RowBetween>
            <RowFixed>
              <Text fontSize="14px">Fee</Text>
              {/* <QuestionHelper text="For each trade a total of .20% is charged, .17% goes to liquidity providers as incentive while the other .03% goes to SparkSwap treasury." /> */}
            </RowFixed>
            <Text fontSize="14px">
              {realizedLPFee ? `${realizedLPFee?.toSignificant(6)} ${trade.inputAmount.currency.symbol}` : '-'}
            </Text>
          </RowBetween>
          <RowBetween>
            <RowFixed>
              <Text fontSize="14px">Price Impact</Text>
              {/* <QuestionHelper text="The difference between the market price and your price due to trade size." /> */}
            </RowFixed>
            <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />
          </RowBetween>
          <RowBetween>
            <RowFixed>
              <Text fontSize="14px">
              {trade.tradeType === TradeType.EXACT_INPUT ? 'Minimum received' : 'Maximum sold'}
              </Text>
      
              {/* <QuestionHelper text="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed." /> */}
            </RowFixed>
            <RowFixed>
              <Text fontSize="14px">
               {trade.tradeType === TradeType.EXACT_INPUT
                  ? slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4) ?? '-'
                  : slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4) ?? '-'}
                {/* {slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} */}
              </Text>
              <Text fontSize="14px" marginLeft="4px">
                {trade.tradeType === TradeType.EXACT_INPUT
                  ? trade.outputAmount.currency.symbol
                  : trade.inputAmount.currency.symbol}
                  {/* {trade.inputAmount.currency.symbol} */}
              </Text>
            </RowFixed>
          </RowBetween>
        </div>
      </AutoColumn>
    </>
  )
}
