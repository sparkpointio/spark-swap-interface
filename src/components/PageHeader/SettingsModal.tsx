import React from 'react'
import { Button, Modal, Text } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'
import { initialState, reducer } from './modalController'

type SettingsModalProps = {
  onDismiss?: () => void
}

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  flex-direction: column;
`

const StyledDiv = styled.div`
  margin: 10px;
`
// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss }: SettingsModalProps) => {
  // const [ isErr, setErr ] = React.useState<string | null>(null);

  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <Modal title="" onDismiss={onDismiss}>
      <StyledDiv>
        <SlippageToleranceSetting action={dispatch} />
      </StyledDiv>
      <StyledDiv>
        <TransactionDeadlineSetting />
        <ButtonDiv>
          <Button onClick={onDismiss}>Confirm</Button>
          {state.Error && <Text mt="8px">Note: Setting to 0.1% may fail the transaction. Proceed with caution.</Text>}
        </ButtonDiv>
      </StyledDiv>
    </Modal>
  )
}

export default SettingsModal
