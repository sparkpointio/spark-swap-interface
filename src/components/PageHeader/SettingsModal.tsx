import React, { Dispatch, useContext, useEffect } from 'react'
import { Button, Flex, Modal, Text } from '@sparkpointio/sparkswap-uikit'
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
  margin-top: -30px;
`

const ConfirmButton = styled(Button)`
  height: 50px;
  border-radius: 3px;
  // width: 50px;
`

const StyledFooter = styled(Flex)`
  // max-width: 200px;
  justify-content: center;
  width: 100%;
  align-items: center;
`
// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss, action }: SettingsModalProps) => {
  
  const [ state, dispatch ] = React.useReducer(innerReducer, initialState);

  return (
    <Modal title="" onDismiss={onDismiss} bodyPadding='15px'>
      <ModalContainer>
      <Flex>
        <SlippageToleranceSetting action={dispatch} action2={dispatch} />
      </Flex>
      <StyledFooter>  
        <TransactionDeadlineSetting onDismiss={onDismiss}/>
        {/* <ConfirmButton onClick={onDismiss} variant="secondary" > <Text fontSize='15px'> Confirm </Text></ConfirmButton> */}
      </StyledFooter>
      { state.slipWarning && <Text mt="8px" fontSize='12px'>Note: Setting to 0.1% may fail the transaction. Proceed with caution.</Text> }
      </ModalContainer>
    </Modal>
  )
}

export default SettingsModal
