import React from 'react'
import { Currency } from '@sparkpointio/sparkswap-sdk'
import { ApprovalState } from 'hooks/useApproveCallback'
import Modal from '../Modal'
import { useActiveWeb3React } from '../../hooks'
import ConfirmationPendingContent from './ConfirmationPendingContent'
import TransactionSubmittedContent from './TransactionSubmittedContent'
import { Field } from '../../state/mint/actions'

interface IApprovalState {
  approvalA?: number
  approvalB?: number
  signatureData?: { v: number; r: string; s: string; deadline: number } | null
  isPending?: boolean
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
  wrapState?: string
  currencies?: { [field in Field]?: Currency }
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
  wrapState,
  currencies,
}: ConfirmationModalProps) => {
  const { chainId } = useActiveWeb3React()

  if (!chainId) return null
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={90}>
      {attemptingTxn ||
      approvalState?.approvalA === ApprovalState.NOT_APPROVED ||
      approvalState?.approvalB === ApprovalState.NOT_APPROVED ||
      approvalState?.approvalA === ApprovalState.PENDING ||
      approvalState?.approvalB === ApprovalState.PENDING ||
      approvalState?.isPending ? (
        <ConfirmationPendingContent onDismiss={onDismiss} pendingText={pendingText} />
      ) : hash && hash !== 'clear'? (
        <TransactionSubmittedContent
          currInfo={currInfo}
          currencies={currencies}
          chainId={chainId}
          hash={hash}
          onDismiss={onDismiss}
        />
      ) : hash === '' || hash === undefined? (
        content()
      ): null }
    </Modal>
  )
}

export default TransactionConfirmationModal
