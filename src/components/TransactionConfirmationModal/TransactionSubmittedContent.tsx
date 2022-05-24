import { ChainId, Currency} from '@sparkpointio/sparkswap-sdk'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { ThemeContext } from 'styled-components'
import ReactLoading from 'react-loading'
import { Button, LinkExternal, Text } from '@sparkpointio/sparkswap-uikit'
import { ArrowUpCircle } from 'react-feather'
import { RowFixed } from 'components/Row'
import CurrencyLogo from '../CurrencyLogo'
import { AppState } from '../../state'
import { AutoColumn } from '../Column'
import { getEtherscanLink, isAddress } from '../../utils'
import { Wrapper, Section, ConfirmedIcon, ContentHeader, OptionButton } from './helpers'
import { Field } from '../../state/mint/actions'

type TransactionSubmittedContentProps = {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
  currInfo?: {[field in Field]?: Currency }
  currencies?: {[field in Field]?: Currency }
}

type TitleObject = {
  title?: string
  curr1?: string
  amount1?: string
  amount2?: string
  curr1Info?: Currency
  curr2Info?: Currency
  curr2?: Array<string> | string
  prep?: string
}

const TransactionSubmittedContent = ({ onDismiss, chainId, hash, currInfo, currencies }: TransactionSubmittedContentProps) => {
  const theme = useContext(ThemeContext)
  const state = useSelector<AppState, AppState['transactions']>((s) => s.transactions)
  const transactions = chainId ? state[chainId] ?? {} : {}
  const txn = hash ? transactions[hash] : undefined
  let newHash
  const displayTxnFn = () => {
    let obj: TitleObject = {}
    if (txn) {
      const title = txn?.summary?.split(' ').shift()
      obj = {
        title: title === 'Swap' ? 'swapp' : title === 'Remove'? 'remov' : 'add',
        prep: title === 'Swap'? 'to':'and',
        // TOKEN 1
        curr1: txn?.summary?.split(' ').slice(1, 3).pop(),
        amount1: txn?.summary?.split(' ').slice(1, 3).shift(),
        curr1Info: currInfo?.CURRENCY_A,
        // TOKEN 2
        curr2: txn?.summary?.split(' ').slice(4, 6).pop(),
        amount2: txn?.summary?.split(' ').slice(4, 6).shift(),
        curr2Info: currInfo?.CURRENCY_B,
      }
    } else {
      newHash = JSON.stringify(hash)
      newHash = JSON.parse(newHash).hash
      const tx2 = newHash ? transactions[newHash] : undefined
      const title = tx2?.summary?.split(' ').shift()
      obj = {
        title: title === 'Wrap'? 'wrapp': 'unwrapp',
        prep: 'to',
        // TOKEN 1
        curr1: tx2?.summary?.split(' ').slice(1, 3).pop(),
        amount1: tx2?.summary?.split(' ').slice(1, 3).shift(),
        curr1Info: currencies?.CURRENCY_A,
        // TOKEN 2
        curr2: tx2?.summary?.split(' ').slice(3, 5).pop(),
        curr2Info: currencies?.CURRENCY_B,
      }
    }
    return obj;
  }
  const displayTitle = displayTxnFn();
  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>Transaction Submitted!</ContentHeader>
        <AutoColumn justify="center">
        <RowFixed>
          { currInfo && <CurrencyLogo currency={displayTitle.curr1Info} size="32px" style={{ marginRight: '12px' }} />}
          <Text fontSize="32px" color='textSubtle'>{displayTitle.amount1}&nbsp;</Text>
          <Text fontSize="36px" bold>{displayTitle.curr1}</Text>
        </RowFixed>
        <RowFixed>
          <Text fontSize="24px">{displayTitle.prep}</Text>
        </RowFixed>
        <RowFixed>
         { currInfo && <CurrencyLogo currency={displayTitle.curr2Info} size="32px" style={{ marginRight: '12px' }} />}
          <Text fontSize="32px" color='textSubtle'>{displayTitle.amount2}&nbsp;</Text>
          <Text fontSize="36px" bold>{displayTitle.curr2}</Text>
        </RowFixed>
        </AutoColumn>
        <AutoColumn gap="15px" justify="center">
          
          {chainId && hash && (
            <LinkExternal style={{ textDecoration: 'underline' }} href={newHash? getEtherscanLink(chainId, newHash, 'transaction') : getEtherscanLink(chainId, hash, 'transaction') }>
              View on BscScan
            </LinkExternal>
          )}
          <OptionButton onClick={onDismiss} mt="20px">
            OK
          </OptionButton>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default TransactionSubmittedContent
