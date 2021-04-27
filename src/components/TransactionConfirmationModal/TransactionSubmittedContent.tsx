import { ChainId, Currency} from '@sparkpointio/sparkswap-sdk'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { ThemeContext } from 'styled-components'
import { Button, LinkExternal, Text } from '@sparkpointio/sparkswap-uikit'
import { ArrowUpCircle } from 'react-feather'
import { RowFixed } from 'components/Row'
import CurrencyLogo from '../CurrencyLogo'
import { AppState } from '../../state'
import { AutoColumn } from '../Column'
import { getEtherscanLink, isAddress } from '../../utils'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'
import { Field } from '../../state/mint/actions'

type TransactionSubmittedContentProps = {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
  currInfo?: {[field in Field]?: Currency }
}

const TransactionSubmittedContent = ({ onDismiss, chainId, hash, currInfo }: TransactionSubmittedContentProps) => {
  const theme = useContext(ThemeContext)
  const state = useSelector<AppState, AppState['transactions']>((s) => s.transactions)
  const transactions = chainId ? state[chainId] ?? {} : {}
  const txn = hash ? transactions[hash] : undefined

  let title = txn?.summary?.split(' ').shift()
  title = title === 'Swap' ? 'Swapp' : title === 'Remove'? 'Remov' : title
  const curr1 = txn?.summary?.split(' ').slice(1, 3).join(' ')
  const curr2 = txn?.summary?.split(' ').slice(4, 6).join(' ')

  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>{`Succesfully ${title}ed!`}</ContentHeader>
        <AutoColumn justify="center">
        <RowFixed>
          { currInfo && <CurrencyLogo currency={currInfo.CURRENCY_A} size="32px" style={{ marginRight: '12px' }} />}
          <Text fontSize="36px">{curr1}</Text>
        </RowFixed>
        <RowFixed>
          <Text fontSize="24px">to</Text>
        </RowFixed>
        <RowFixed>
         { currInfo && <CurrencyLogo currency={currInfo.CURRENCY_B} size="32px" style={{ marginRight: '12px' }} />}
          <Text fontSize="36px">{curr2}</Text>
        </RowFixed>
        </AutoColumn>
        <AutoColumn gap="15px" justify="center">
          {chainId && hash && (
            <LinkExternal style={{ textDecoration: 'underline' }} href={getEtherscanLink(chainId, hash, 'transaction')}>
              View on BscScan
            </LinkExternal>
          )}
          <Button onClick={onDismiss} mt="20px">
            Confirm
          </Button>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default TransactionSubmittedContent
