import React from 'react'
import { Modal } from '@sparkpointio/sparkswap-uikit'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'


type SettingsModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss }: SettingsModalProps) => {
  return (
    <Modal title="" onDismiss={onDismiss}>
      <SlippageToleranceSetting />
      <TransactionDeadlineSetting />
    </Modal>
  )
}

export default SettingsModal
