import React, { useCallback, useState } from 'react'
import { Text } from '@sparkpointio/sparkswap-uikit'
import { MessageProps } from './type'
import InputField from '../Elements/Input';

const fields = ['name', 'email', 'company', 'subject', 'message'];

const MessageForm: React.FC= () => {
  const [message, setMessage] = useState<MessageProps>({ name: '', email: '', company: '', subject: '', message: '' })
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message)
  }

  const handleUserInput = useCallback(({inputField, nextUserInput}: {inputField: string; nextUserInput?: string}) => {
    setMessage({...message, [inputField]: nextUserInput})
  }, [setMessage, message])

  
  return (
    <form onSubmit={handleSubmit}>
        {
          fields.map((field) => (
            <div key={field}>
              <Text>{field}</Text>
              <InputField id={field} type="text" field={field} value={message[`${field}`]}  handleInput={handleUserInput} />
            </div>
          ))
        }
      <input type="submit" value="submit" />
    </form>
  )
}

export default MessageForm