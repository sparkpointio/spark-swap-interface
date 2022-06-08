import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { Title } from '../Elements'
import PageSection from '../styles/Layout'
import { Colors } from '../styles/Layout/Colors'
import { MessageProps } from './type'
import MessageForm from './Form'


const Contact = () => {
 
  return (
    <PageSection background={Colors.background1} direction="column">
      <Title value="Contact Us" />
      <div>
        <MessageForm />
      </div>
    </PageSection>
  )
}

export default Contact
