import React from 'react'
import { Button, Modal, Text } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'

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
  
  const [ isErr, setErr ] = React.useState<string | null>(null);

  return (
    <Modal title="" onDismiss={onDismiss}>
        <StyledDiv>
          <SlippageToleranceSetting setErr={setErr}/>
        </StyledDiv>
        <StyledDiv>
          <TransactionDeadlineSetting />
        </StyledDiv>
        <ButtonDiv>
          <Button>Confirm</Button>
          {isErr && <Text mt="8px" style={{margin: '10px'}}> {isErr}  </Text>}
        </ButtonDiv>
    </Modal>
  )
}

export default SettingsModal