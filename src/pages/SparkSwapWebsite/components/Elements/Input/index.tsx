import React from 'react'
import styled from 'styled-components'

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
  handleInput: (string) => (void)
}) {
  const enforcer = (inputField: string, nextUserInput: string) => {
    if (nextUserInput === '') {
      handleInput({inputField, nextUserInput})
    }
    return handleInput({inputField, nextUserInput})
  }
  return <input {...rest} value={value || ''} onChange={(event) => enforcer(field,event.target.value)}/>
})

export default InputField
