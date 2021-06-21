import React, { Dispatch, useContext, useEffect } from 'react'
import { Button, Modal, Text } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'
import { innerReducer, initialState} from '../../hooks/slippageController';

type SettingsModalProps = {
  onDismiss?: () => void,
  action?: Dispatch<{type: string}>

}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

// const ButtonDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 10px;
//   flex-direction: column;
//   border: 1px solid red;
// `

const StyledDiv = styled.div`
  margin: 5px;
  margin-top: -10px;
  // border: 1px solid green;
`

const StyledFooter = styled(StyledDiv)`
  max-width: 200px;
  border: 1px solid red;
`
// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss, action }: SettingsModalProps) => {
  
  const [ state, dispatch ] = React.useReducer(innerReducer, initialState);

  return (
    <Modal title="" onDismiss={onDismiss}>
      <ModalContainer>
      <StyledDiv>
        <SlippageToleranceSetting action={action} action2={dispatch} />
      </StyledDiv>
      <StyledFooter>
        <TransactionDeadlineSetting />
          <Button onClick={onDismiss} fullWidth>Confirm</Button>
      </StyledFooter>
      { state.slipWarning && <Text mt="8px">Note: Setting to 0.1% may fail the transaction. Proceed with caution.</Text> }
      </ModalContainer>
    </Modal>
  )
}

export default SettingsModal
