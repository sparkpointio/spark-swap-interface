import React, { useContext, useMemo } from 'react'
import { ThemeContext } from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import {
  CardBody,
  Text,
  Button,
  ConnectorId,
  useWalletModal,
  CheckmarkCircleIcon,
  ErrorIcon,
  Flex,
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
import { LightCard } from 'components/Card'
import Loader from 'components/Loader'

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
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])
  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)

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
              {account && chainId && sortedRecentTransactions.length === 0 && (
                <LightCard>
                  <Text> No recent transactions</Text>
                </LightCard>
              )}

              {account &&
                chainId &&
                sortedRecentTransactions.map((sortedRecentTransaction) => {
                  const { hash, summary } = sortedRecentTransaction
                  const { icon, color } = getRowStatus(sortedRecentTransaction)

                  return (
                    <>
                      <Flex key={hash} alignItems="center" justifyContent="space-between" mb="4px">
                        <LinkExternal href={getEtherscanLink(chainId, hash, 'transaction')} color={color}>
                          {summary ?? hash}
                        </LinkExternal>
                        {icon}
                      </Flex>
                    </>
                  )
                })}
            </CardBody>
          )}
        </CustomStyleCard>
      </AppBody>
    </>
  )
}
