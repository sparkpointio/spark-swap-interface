import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Flex, Input, Text, Radio } from '@sparkpointio/sparkswap-uikit'
import { useUserSlippageTolerance } from 'state/user/hooks'
// import QuestionHelper from '../QuestionHelper'
import TranslatedText from '../TranslatedText'

const MAX_SLIPPAGE = 5000
const RISKY_SLIPPAGE_LOW = 50
const RISKY_SLIPPAGE_HIGH = 500

const StyledSlippageToleranceSettings = styled.div`
  margin-bottom: 16px;
`

const Option = styled.div`
  padding: 0 4px;
  margin-right: 10px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  // border: 1px solid red;
`

const Options = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  // justify-content: center;
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

const Label = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  justify-content: center;
`

const predefinedValues = [
  { label: '0.1%', value: 0.1 },
  { label: '0.5%', value: 0.5 },
  { label: '1%', value: 1 }
]

const SlippageToleranceSettings = ({action}) => {
  const [userSlippageTolerance, setUserslippageTolerance] = useUserSlippageTolerance()
  const [value, setValue] = useState(userSlippageTolerance / 100)
  const [error, setError] = useState<string | null>(null)
 
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = evt.target
    setValue(parseFloat(inputValue))
  }

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
      action({type: 'Set Error'})
    } else if (userSlippageTolerance > RISKY_SLIPPAGE_HIGH) {
      setError('Your transaction may be frontrun')
    } else {
      action({type: 'Remove Error'})
    }
  }, [userSlippageTolerance, setError, action])

  return (
    <StyledSlippageToleranceSettings>
      <Label>
        <Text style={{ fontWeight: 600 }}>
          <TranslatedText translationId={88}>Slippage tolerance</TranslatedText>
        </Text>
        {/* <QuestionHelper text="Your transaction will revert if the price changes unfavorably by more than this percentage." /> */}
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
                <Radio scale="sm" name="SlippageTolerance" onChange={handleClick} />
                <Text style={{margin: '0 5px 0 10px'}}>{label}</Text>
              </Option>
            )
          })}
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Option style={{width: '50%'}}>
            <Input
              type="number"
              scale="lg"
              step={0.1}
              min={0.1}
              placeholder="5%"
              value={value}
              onChange={handleChange}
              isWarning={error !== null}
            />
             <Text fontSize="18px">%</Text>
          </Option>
          {/* <Option>
           
          </Option> */}
        </Flex>
      </Options>
      {error && (
        <Text mt="8px" color="failure">
          {error}
        </Text>
      )}
    </StyledSlippageToleranceSettings>
  )
}

export default SlippageToleranceSettings
