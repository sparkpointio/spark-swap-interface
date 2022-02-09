import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Flex, Input, Text, Radio } from '@sparkpointio/sparkswap-uikit'
import { useUserSlippageTolerance } from 'state/user/hooks'
// import QuestionHelper from '../QuestionHelper'
import TranslatedText from '../TranslatedText'
import SlippageController from '../../hooks/slippageController'

const MAX_SLIPPAGE = 5000
const RISKY_SLIPPAGE_LOW = 50
const RISKY_SLIPPAGE_HIGH = 500

const StyledSlippageToleranceSettings = styled.div`
  margin-bottom: 16px;
  justify-content: center;
`

const Option = styled.div`
  padding: 0 4px;
  margin-right: 10px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
`

const Options = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  // padding-left: 20px;
  // border: 1px solid yellow;

  ${Option}:first-child {
    padding-left: 0;
  }

  ${Option}:last-child {
    padding-right: 0;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const DisplayError = styled.div`
  margin-left: 15px;
  padding: 0 15px;
`

const SlippageInput = styled(Input)`
  min-width: 70px;
  max-width: 100px;
  height: 30px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:: {
    -moz-appearance: textfield;
  }
`

const Label = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  justify-content: center;
`

const predefinedValues = [
  { label: '0.1%', value: 0.1 },
  { label: '0.5%', value: 0.5 },
  { label: '1%', value: 1 },
]

const SlippageToleranceSettings = ({ action, action2 }) => {
  const [userSlippageTolerance, setUserslippageTolerance] = useUserSlippageTolerance()
  const [value, setValue] = useState(userSlippageTolerance / 100)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = evt.target
    setValue(parseFloat(inputValue))
  }
  console.log(userSlippageTolerance)
  // Updates local storage if value is valid
  useEffect(() => {
    try {
      const rawValue = value * 100
      if (!Number.isNaN(rawValue) && rawValue > 0 && rawValue < MAX_SLIPPAGE) {
        setUserslippageTolerance(rawValue)
        setError(null)
      } else {
        setError('Enter a valid slippage percentage')
      }
    } catch {
      setError('Enter a valid slippage percentage')
    }
  }, [value, setError, setUserslippageTolerance])

  // Notify user if slippage is risky
  useEffect(() => {
    if (userSlippageTolerance < RISKY_SLIPPAGE_LOW) {
      setError('Your transaction may fail')
      // setErr('Note: Setting to 0.1% may fail the transaction. Proceed with caution')
      action({ type: 'Set' })
      action2({ type: 'Set' })
    } else if (userSlippageTolerance > RISKY_SLIPPAGE_HIGH) {
      setError('Your transaction may be frontrun')
    } else {
      action({ type: 'Remove' })
      action2({ type: 'Remove' })
    }
  }, [userSlippageTolerance, setError, action, action2])

  return (
    <StyledSlippageToleranceSettings>
      <Label>
        <Text style={{ fontWeight: 300 }} fontSize="15px">
          <TranslatedText translationId={88}>Slippage Tolerance Settings</TranslatedText>
        </Text>
      </Label>
      <Options>
        <Flex mb={['8px', 0]} mr={[0, '0px']} alignItems="flex-start" justifyContent="center">
          {predefinedValues.map(({ label, value: predefinedValue }) => {
            const handleClick = () => setValue(predefinedValue)

            return (
              <Option key={predefinedValue}>
                {/* <Button variant={value === predefinedValue ? 'primary' : 'tertiary'} onClick={handleClick}>
                  {label}
                </Button> */}
                <Radio scale="sm" name="SlippageTolerance" checked={predefinedValue === (userSlippageTolerance / 100)} onChange={handleClick} />
                <Text style={{ margin: '0 5px 0 10px' }} fontSize="12px">
                  {label}
                </Text>
              </Option>
            )
          })}
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Option style={{ width: '50%', alignItems: 'center' }}>
            <SlippageInput
              type="number"
              scale="lg"
              step={0.1}
              min={0.1}
              placeholder="5"
              value={value}
              onChange={handleChange}
              isWarning={error !== null}
            />
            <Text fontSize="18px">%</Text>
          </Option>
        </Flex>
      </Options>
      <DisplayError>
        {error && (
          <Text mt="8px" color="failure" fontSize='12px'>
            {error}
          </Text>
        )}
      </DisplayError>
    </StyledSlippageToleranceSettings>
  )
}

export default SlippageToleranceSettings
