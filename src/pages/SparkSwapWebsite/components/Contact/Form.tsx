import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import { Button, Text } from '@sparkpointio/sparkswap-uikit'
import useToast from 'hooks/useToast'
import { Grid } from '@mui/material';
import { MessageProps } from './type'
import { Form } from './styled';
import InputField from '../Elements/Input';
import { MessageSendBtn } from '../Elements/Buttons/Button';

interface MessagePrompt {
  show?: boolean,
  message?: string
}

const fields = ['name', 'email', 'company', 'subject', 'message'];

const MessageStatus = styled.p`
  color: #ffffff;
  margin-bottom: 2em;
`

const MessageForm: React.FC= () => {
  const [message, setMessage] = useState<MessageProps>({ name: '', email: '', company: '', subject: '', message: '', receiver: 'defi@sparkpoint.io' })
  const [isDisabled, setIsDisabled] = useState(false)
  const [sent, setSent] = useState(false)
  const { toastSuccess, toastError } = useToast()
  const [messagePrompt, setMessagePrompt] = useState<MessagePrompt>({
    show: false,
    message: ''
  })

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      setIsDisabled(true)
      fetch('https://test-api-cyan.vercel.app/api/v1/send', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.status === 200) {
          setSent(true)
          setMessage({
            name: '',
            email: '',
            company: '',
            subject: '',
            message: '',
            receiver: 'defi@sparkpoint.io'
          })
          setMessagePrompt({
            show: true,
            message: 'Message sent to SparkPoint Support Team!'
          })
          toastSuccess(`Thanks for contacting us! We'll be in touch with you shortly.`)
          setIsDisabled(false)
          setSent(false)
        }
        setTimeout(() => {
          setMessagePrompt({
            show: false,
            message: ''
          })
        }, 3000);
      })
    }
    catch (e) {
      setIsDisabled(false)
      setSent(false)
      toastError('Message not sent, please try again later.')
    }
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setIsDisabled(true)
  //   fetch('https://test-api-cyan.vercel.app/api/v1/send', {
  //     method: 'POST',
  //     body: JSON.stringify(message),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8"
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if(data?.status === 200) {
  //         setSent(true)
  //         setMessage({
  //           name: '',
  //           email: '',
  //           company: '',
  //           subject: '',
  //           message: '',
  //           receiver: 'defi@sparkpoint.io'
  //         })
  //         setMessagePrompt({
  //           show: true,
  //           message: 'E-mail sent!'
  //         })
  //         toastSuccess('Hello')
  //         setIsDisabled(false)
  //         setSent(false)
  //       }
  //       setTimeout(() => {
  //         setMessagePrompt({
  //           show: false,
  //           message: ''
  //         })
  //       }, 3000);
  //     })
  //     .catch((err) => console.error(err))
  // }

  const handleUserInput = useCallback(({inputField, nextUserInput}: {inputField: string; nextUserInput?: string}) => {
    setMessage({...message, [inputField]: nextUserInput})
  }, [setMessage, message])

  
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justifyContent='center' columnSpacing={{md: 3, lg: 5}} rowSpacing={{xs: 5, md: 3, lg: 3}} marginBottom='4rem'>
        {
          fields.map((field) => (
            <Grid key={field} item  md={field === 'message' ? 12:6} sm={12} xs={12}>
              <Text marginBottom='0.5em' fontSize='1.5em'>{field.charAt(0).toUpperCase() + field.slice(1)}</Text>
              <InputField id={field} type={field === 'email' ? 'email' : 'text'} field={field} value={message[`${field}`]}  handleInput={handleUserInput} />
            </Grid>
          ))
        }
      </Grid>
      {messagePrompt && (
        <MessageStatus>
          {messagePrompt.message}
        </MessageStatus>
      )}
      <MessageSendBtn fullWidth type="submit" disabled={isDisabled}>{isDisabled ? 'SENDING...' : (sent ? 'SENT' : 'SEND')}</MessageSendBtn>
    </Form>
  )
}

export default MessageForm