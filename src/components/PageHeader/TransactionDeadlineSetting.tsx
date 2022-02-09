import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input, Text, Button, Flex } from '@sparkpointio/sparkswap-uikit'
import { useUserDeadline } from 'state/user/hooks'
import QuestionHelper from '../QuestionHelper'
import TranslatedText from '../TranslatedText'

const StyledTransactionDeadlineSetting = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

const Label = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  margin-left: 20px;
  padding-left: 15px;
`
const Field = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  & > ${Input} {
    max-width: 100px;
  }

  & > ${Text} {
    font-size: 14px;
    margin-left: 8px;
  }
`
const DeadlineInput = styled(Input)`
  min-width: 70px;
  max-width: 100px;
  height: 40px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::{
    -moz-appearance: textfield;
  }
`

const ConfirmButton = styled(Button)`
  height: 40px;
  border-radius: 3px;
  // width: 50px;
`

const TransactionDeadlineSetting:React.FC<{ onDismiss?: () => void,}> = ({onDismiss}) => {
  const [deadline, setDeadline] = useUserDeadline()
  const [value, setValue] = useState(deadline / 60) // deadline in minutes
  const [error, setError] = useState<string | null>(null)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = evt.target
    setValue(parseInt(inputValue, 10))
  }

  // Updates local storage if value is valid
  useEffect(() => {
    try {
      const rawValue = value * 60
      if (!Number.isNaN(rawValue) && rawValue > 0) {
        setDeadline(rawValue)
        setError(null)
      } else {
        setError('Enter a valid deadline')
      }
    } catch {
      setError('Enter a valid deadline')
    }
  }, [value, setError, setDeadline])

  return (
    <StyledTransactionDeadlineSetting>
      <Label>
        <Text style={{ fontWeight: 300 }} fontSize="15px">
          <TranslatedText translationId={90}>Transaction deadline</TranslatedText>
        </Text>
        {/* <QuestionHelper text="Your transaction will revert if it is pending for more than this long." /> */}
      </Label>
      <Flex justifyContent='space-around' style={{width: '100%'}}>
      <Field>
        <DeadlineInput type="number" step="1" min="1" value={value} onChange={handleChange} />
        <Text fontSize='12px'>Minutes</Text>
      </Field>
          <ConfirmButton onClick={onDismiss}> <Text fontSize='13px'> Confirm </Text></ConfirmButton>
      </Flex>
      <Label>
      {error && (
        <Text mt="8px" fontSize='12px' color="failure">
          {error}
        </Text>
      )}
      </Label>
    </StyledTransactionDeadlineSetting>
  )
}

export default TransactionDeadlineSetting
