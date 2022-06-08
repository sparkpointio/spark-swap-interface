import React, { useCallback, useState } from 'react'
import { Button, Text } from '@sparkpointio/sparkswap-uikit'
import { Grid } from '@mui/material';
import { MessageProps } from './type'
import { Form } from './styled';
import InputField from '../Elements/Input';
import { MessageSendBtn } from '../Elements/Buttons/Button';


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
    <Form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justifyContent='center' columnSpacing={{md: 3, lg: 5}} rowSpacing={{xs: 5, md: 3, lg: 8}} marginBottom='4rem'>
        {
          fields.map((field) => (
            <Grid key={field} item  md={field === 'message' ? 12:6} sm={12} xs={12}>
              <Text marginBottom='1em' fontSize='1.5em'>{field.charAt(0).toUpperCase() + field.slice(1)}</Text>
              <InputField id={field} type="text" field={field} value={message[`${field}`]}  handleInput={handleUserInput} />
            </Grid>
          ))
        }
      </Grid>
      <MessageSendBtn fullWidth type="submit">SEND</MessageSendBtn>
    </Form>
  )
}

export default MessageForm