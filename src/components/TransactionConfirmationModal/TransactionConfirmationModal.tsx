import React from 'react'
import { Currency } from '@sparkpointio/sparkswap-sdk'
import { ApprovalState } from 'hooks/useApproveCallback'
import { useActivePopups } from '../../state/application/hooks'
import Modal from '../Modal'
import { useActiveWeb3React } from '../../hooks'
import ConfirmationPendingContent from './ConfirmationPendingContent'
import TransactionSubmittedContent from './TransactionSubmittedContent'
import { Field } from '../../state/mint/actions'

interface IApprovalState {
  approvalA: number
  approvalB: number
}

interface ConfirmationModalProps {
  isOpen: boolean
  onDismiss: () => void
  hash: string | undefined
  content: () => React.ReactNode
  attemptingTxn: boolean
  pendingText: string
  currInfo?: { [field in Field]?: Currency }
  approvalState?: IApprovalState
}

const TransactionConfirmationModal = ({
  isOpen,
  onDismiss,
  attemptingTxn,
  hash,
  pendingText,
  content,
  currInfo,
  approvalState,
}: ConfirmationModalProps) => {
  const { chainId } = useActiveWeb3React()
  if (!chainId) return null
  // console.log(approvalState?.approvalB)
  // console.log(approvalState?.approvalB === ApprovalState.NOT_APPROVED)
  // confirmation screen
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={90}>
      {attemptingTxn ||
      approvalState?.approvalA === ApprovalState.NOT_APPROVED ||
      approvalState?.approvalB === ApprovalState.NOT_APPROVED ||
      approvalState?.approvalA === ApprovalState.PENDING ||
      approvalState?.approvalB === ApprovalState.PENDING ? (
        <ConfirmationPendingContent onDismiss={onDismiss} pendingText={pendingText} />
      ) : hash ? (
        <TransactionSubmittedContent currInfo={currInfo} chainId={chainId} hash={hash} onDismiss={onDismiss} />
      ) : (
        content()
      )}
    </Modal>
  )
}

export default TransactionConfirmationModal
