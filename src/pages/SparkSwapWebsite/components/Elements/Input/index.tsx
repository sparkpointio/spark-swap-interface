import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../styles/Layout/Colors'

const StyledInput = styled.input<{ error?: boolean; fontSize?: string }>`
  color: ${({ error, theme }) => (error ? theme.colors.failure : theme.colors.text)};
  width: 100%;
  height: 45px;
  position: relative;
  font-weight: 500;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${Colors.accent2};
  flex: 1 1 auto;
  background-color: ${Colors.background3};
  font-size: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  -webkit-appearance: textfield;
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`
const StyledTextArea = styled.textarea<{ error?: boolean }>`
  color: ${({ error, theme }) => (error ? theme.colors.failure : theme.colors.text)};
  width: 100%;
  position: relative;
  font-weight: 500;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${Colors.accent2};
  flex: 1 1 auto;
  background-color: ${Colors.background3};
  font-size: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  -webkit-appearance: textfield;
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const InputField = React.memo(function InnerInput({
  handleInput,
  value,
  type,
  field,
  ...rest
}: {
  field: string
  error?: boolean
  value: string | undefined
  type: string
  id: string
  handleInput: (string) => void
}) {
  const enforcer = (inputField: string, nextUserInput: string) => {
    if (nextUserInput === '') {
      handleInput({ inputField, nextUserInput })
    }
    return handleInput({ inputField, nextUserInput })
  }
  return field !== 'message' ? (
    <StyledInput {...rest} value={value || ''} onChange={(event) => enforcer(field, event.target.value)} required />
  ) : (
    <StyledTextArea {...rest} rows={10} cols={50} value={value || ''}  onChange={(event) => enforcer(field, event.target.value)} required />
  )
})

export default InputField
