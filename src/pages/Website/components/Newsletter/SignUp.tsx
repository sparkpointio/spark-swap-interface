import React from 'react'
import { BackgroundImage, Flex, Text } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { SignUpButton } from '../Elements/Buttons/Button'
import { Input } from '../Elements/Input.tsx'
import { Colors } from '../styles/Layout/Colors'
import { breakpoints } from '../styles/Layout/Breakpoints'

const Container = styled.div`
 font-family: 'Quatro';
  margin: 0px auto 10em auto;
  border: 1px solid ${Colors.accent3};
  padding: 17px;
  max-width: 900px;
  border-radius: 10px;
  min-height: 30vh;
  display: flex;
  align-items: center;
  background-color: #00071e;
  box-shadow: 1px 6px 13px -3px rgba(57,190,236,0.75);
  position: relative;
  -webkit-box-shadow: 1px 6px 13px -3px rgba(57,190,236,0.75);
  -moz-box-shadow: 1px 6px 13px -3px rgba(57,190,236,0.75);
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    margin: 0px 1em 10em 1em;
  }
`
const InputContainer = styled(Flex)``

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
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    padding: 0px;
    text-align: center;
  }
`

const NewsletterWidget = styled.iframe<{screenSize?: number}>`
  min-height: 25vh;
  // width: 600px;
  // padding: 5px;
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    padding: 0px;
  }
`


const AppComponent: React.FC = () => {
  return (
    <Container>
      <Grid container justifyContent='space-around' alignItems='center'>
        <Grid item xs={12} sm={6} md={5}>
          <Flex style={{minHeight: '250px'}} alignItems='center'>
          <Background alt='mail-icon' src='/images/Website/Mail.png'/>
          <Message fontSize='1.29em' as="p" color={Colors.text1}>
            Signing up to the newsletter means consenting to receiving marketing and news emails from SparkSwap
          </Message>
          </Flex>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <InputContainer flexDirection='column'>
          <NewsletterWidget id='newsletter' title='newsletter' src="https://app.mailjet.com/widget/iframe/5Eqa/NdK" width="100%" frameBorder="0" scrolling="no"/>
          </InputContainer>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AppComponent
