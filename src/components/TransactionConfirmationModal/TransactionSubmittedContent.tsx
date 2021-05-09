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
        prep: title === 'swapp'? 'to':'and',
        // TOKEN 1
        curr1: txn?.summary?.split(' ').slice(1, 3).shift(),
        amount1: txn?.summary?.split(' ').slice(1, 3).pop(),
        curr1Info: currInfo?.CURRENCY_A,
        // TOKEN 2
        curr2: txn?.summary?.split(' ').slice(4, 6).shift(),
        amount2: txn?.summary?.split(' ').slice(4, 6).pop(),
        curr2Info: currInfo?.CURRENCY_B,
      }
    } else {
      newHash = JSON.stringify(hash)
      newHash = JSON.parse(newHash).hash
      const tx2 = newHash ? transactions[newHash] : undefined
      console.log(tx2)
      obj = {
        title: 'wrapp',
        prep: 'to',
        // TOKEN 1
        curr1: tx2?.summary?.split(' ').slice(1, 3).shift(),
        amount1: tx2?.summary?.split(' ').slice(1, 3).pop(),
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
        <ContentHeader onDismiss={onDismiss}>{`Successfully ${displayTitle.title}ed!`}</ContentHeader>
        <AutoColumn justify="center">
        <RowFixed>
          { currInfo && <CurrencyLogo currency={displayTitle.curr1Info} size="32px" style={{ marginRight: '12px' }} />}
          <Text fontSize="32px">{displayTitle.curr1}&nbsp;</Text>
          <Text fontSize="36px" bold>{displayTitle.amount1}</Text>
        </RowFixed>
        <RowFixed>
          <Text fontSize="24px">{displayTitle.prep}</Text>
        </RowFixed>
        <RowFixed>
         { currInfo && <CurrencyLogo currency={displayTitle.curr2Info} size="32px" style={{ marginRight: '12px' }} />}
          <Text fontSize="32px">{displayTitle.curr2}&nbsp;</Text>
          <Text fontSize="36px" bold>{displayTitle.amount2}</Text>
        </RowFixed>
        </AutoColumn>
        <AutoColumn gap="15px" justify="center">
          
          {chainId && hash && (
            <LinkExternal style={{ textDecoration: 'underline' }} href={newHash? getEtherscanLink(chainId, newHash, 'transaction') : getEtherscanLink(chainId, hash, 'transaction') }>
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
