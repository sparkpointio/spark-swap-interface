import React from 'react'
import { BackgroundImage, Flex, Text } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { SignUpButton } from '../Elements/Buttons/Button'
import { Input } from '../Elements/Input.tsx'
import { Colors } from '../styles/Layout/Colors'

const Container = styled.div`
 font-family: 'Quatro';
  margin: 0px auto;
  border: 1px solid ${Colors.accent3};
  padding: 17px;
  max-width: 900px;
  border-radius: 10px;
  height: 30vh;
  display: flex;
  align-items: center;
  background-color: #00071e;
  box-shadow: 1px 6px 13px -3px rgba(57,190,236,0.75);
  position: relative;
-webkit-box-shadow: 1px 6px 13px -3px rgba(57,190,236,0.75);
-moz-box-shadow: 1px 6px 13px -3px rgba(57,190,236,0.75);
  & > * {
    margin: 0px 15px;
  }
`
const InputContainer = styled(Flex)`
  & > * {
    margin: 10px 0px;
  }
`

const Background = styled.img`
  width: 260px;
  position: absolute;
  top: 0;
  margin: 30px 30px 0px 30px;
`

const Message = styled(Text)`
  font-family: 'Quatro';
  z-index: 1; 
  position: relative;
`

const AppComponent: React.FC = () => {
  return (
    <Container>
      <Grid container justifyContent='space-around' alignItems='center'>
        <Grid item xs={5}>
          <Background alt='mail-icon' src='/images/Website/Mail.png'/>
          <Message fontSize='1.29em' as="p" color={Colors.text1}>
            Signing up to the newsletter means consenting to receiving marketing and news emails from SparkSwap
          </Message>
        </Grid>
        <Grid item xs={5}>
          <InputContainer flexDirection='column'>
          <Text fontSize='1.3em' as="p" color={Colors.accent3}>Email Address</Text>
          <Input type="text" />
          <SignUpButton>Subscribe Now</SignUpButton>
          </InputContainer>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AppComponent
