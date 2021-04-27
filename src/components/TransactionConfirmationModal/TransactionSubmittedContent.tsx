import { ChainId } from '@sparkpointio/sparkswap-sdk'
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

type TransactionSubmittedContentProps = {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
}

const TransactionSubmittedContent = ({ onDismiss, chainId, hash }: TransactionSubmittedContentProps) => {
  const theme = useContext(ThemeContext)
  const state = useSelector<AppState, AppState['transactions']>((s) => s.transactions)
  const transactions = chainId ? state[chainId] ?? {} : {}
  const txn = hash ? transactions[hash] : undefined

  let title = txn?.summary?.split(' ').shift()
  title = title === 'Swap' ? 'Swapp' : title

  const curr1 = txn?.summary?.split(' ').slice(1, 3).join(' ')
  const curr2 = txn?.summary?.split(' ').slice(4, 6).join(' ')

  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>{`Succesfully ${title}ed!`}</ContentHeader>
        <AutoColumn justify="center">
        <RowFixed>
          <Text fontSize="36px">{curr1}</Text>
        </RowFixed>
        <RowFixed>
          <Text fontSize="24px">to</Text>
        </RowFixed>
        <RowFixed>
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
