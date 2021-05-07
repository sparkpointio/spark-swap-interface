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

  const displayTitle = () => {
      const title = txn?.summary?.split(' ').shift()
      return {
        title: title === 'Swap' ? 'swapp' : title === 'Remove'? 'remov' : 'add',
        curr1: txn?.summary?.split(' ').slice(1, 3),
        curr2: txn?.summary?.split(' ').slice(4, 6),
        prep: title === 'swapp'? 'to':'and',
      }
    
  }
  

  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>{`Successfully ${displayTitle().title}ed!`}</ContentHeader>
        <AutoColumn justify="center">
        <RowFixed>
          { currInfo && <CurrencyLogo currency={currInfo.CURRENCY_A} size="32px" style={{ marginRight: '12px' }} />}
          <Text fontSize="32px">{displayTitle().curr1?.[0]}&nbsp;</Text>
          <Text fontSize="36px" bold>{displayTitle().curr1?.[1]}</Text>
        </RowFixed>
        <RowFixed>
          <Text fontSize="24px">{displayTitle().prep}</Text>
        </RowFixed>
        <RowFixed>
         { currInfo && <CurrencyLogo currency={currInfo.CURRENCY_B} size="32px" style={{ marginRight: '12px' }} />}
          <Text fontSize="32px">{displayTitle().curr2?.[0]}&nbsp;</Text>
          <Text fontSize="36px" bold>{displayTitle().curr2?.[1]}</Text>
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
