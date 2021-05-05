import React, { useContext, useMemo } from 'react'
import { ThemeContext } from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import Moment from 'react-moment'
import 'moment-timezone';
import ReactTooltip from 'react-tooltip';
import {
  CardBody,
  Text,
  Button,
  ConnectorId,
  useWalletModal,
  CheckmarkCircleIcon,
  ErrorIcon,
  LinkExternal,
} from '@sparkpointio/sparkswap-uikit'
import { useActiveWeb3React } from 'hooks'
import { isTransactionRecent, useAllTransactions } from 'state/transactions/hooks'
import { getEtherscanLink } from 'utils'
import { TransactionDetails } from 'state/transactions/reducer'
import { injected, walletconnect, bsc } from 'connectors'
import CardNav from 'components/CardNav'
import AppBody from 'pages/AppBody'
import TranslatedText from 'components/TranslatedText'
import { CustomStyleCard } from 'components/swap/styleds'
import PageHeader from 'components/PageHeader'
import Loader from 'components/Loader'
import Table from './Table';



export default function History() {
  const theme = useContext(ThemeContext)
  const { account, activate, deactivate } = useWeb3React()
  const { chainId } = useActiveWeb3React()
  const allTransactions = useAllTransactions()

  const handleLogin = (connectorId: ConnectorId) => {
    if (connectorId === 'walletconnect') {
      return activate(walletconnect)
    }
    if (connectorId === 'bsc') {
      return activate(bsc)
    }
    return activate(injected)
  }

  

  const getRowStatus = (sortedRecentTransaction: TransactionDetails) => {
    const { hash, receipt } = sortedRecentTransaction

    if (!hash) {
      return { icon: <Loader />, color: 'text' }
    }

    if (hash && receipt?.status === 1) {
      return { icon: <CheckmarkCircleIcon color="success" />, color: 'success' }
    }

    return { icon: <ErrorIcon color="failure" />, color: 'failure' }
  }

  const newTransactionsFirst = (a: TransactionDetails, b: TransactionDetails) => b.addedTime - a.addedTime

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    
    console.log(txs)
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)
  // new Date(row.confirmedTime).toLocaleString()
  // Data
  const columns = React.useMemo(() => [
    {
      name: 'Age',
      selector: 'confirmedTime',
      cell: (row) => <Moment fromNow data-tip={new Date(row.confirmedTime).toLocaleString()}>{row.confirmedTime}</Moment>
    },
    {
      name: 'Hash',
      selector: 'hash',
      cell: row => <Text  color="textSubtle">{`${row.hash.substring(0,4)}....${row.hash.substring(row.hash.length - 5)}`}</Text>
    },
    {
      name: 'Summary',
      selector: 'summary',
      cell: row => <Text  color="textSubtle">{row.summary}</Text>
    },
    {
      name: 'From',
      selector: 'from',
      cell: row => <Text color="textSubtle">{`${row.from.substring(0,4)}....${row.from.substring(row.from.length - 5)}`}</Text>
    },
    {
      name: 'View',
      selector: 'view',
      cell: (row) => <LinkExternal href={getEtherscanLink(row.chainId, row.hash, 'transaction')} > view </LinkExternal>
    }
  ], []);

  return (
    <>
      <AppBody>
        <CardNav activeIndex={2} />
        <CustomStyleCard>
          <PageHeader title="Transaction History">
            {!account && (
              <Button fullWidth id="join-pool-button" onClick={onPresentConnectModal}>
                <TranslatedText translationId={100}>Connect Wallet</TranslatedText>
              </Button>
            )}
          </PageHeader>
          {account && (
            <CardBody>
              {account && chainId && sortedRecentTransactions.length === 0 && (  <Text> No recent transactions</Text>)}
              {account && chainId && ( 
              <>
              <Table columns={columns} data={sortedRecentTransactions} />
              <ReactTooltip />
              </>
              )}
            </CardBody>
          )}
        </CustomStyleCard>
      </AppBody>
    </>
  )
}
