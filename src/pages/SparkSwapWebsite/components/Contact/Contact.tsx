import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { Text, Heading, Flex } from '@sparkpointio/sparkswap-uikit'
import { ReactComponent as ContactUsSvg } from 'assets/svg/Contact Us.svg'
import PageSection from '../styles/Layout'
import { Colors } from '../styles/Layout/Colors'
import MessageForm from './Form'
import { Container, ImageContainer } from './styled'

const Contact = () => {
  return (
    <PageSection background={Colors.background2} direction="column">
      <Container id="contact-us">
        <div style={{marginBottom: '-20px'}}>
          <Heading size="xl" color="secondary">
            Contact Us
          </Heading>
          <Text fontSize="1.5em" margin="3rem 0">
            Enter the details below and we&apos;ll connect with you to answer any and all questions.
          </Text>
        </div>
        <Grid container alignItems='center' justifyContent='space-between' style={{marginTop: '-20px'}}>
          <Grid item md={5} sm={12}>
            <MessageForm />
          </Grid>
          <Grid item md={6} sm={12}>
            <ContactUsSvg width="100%" height="100%" />
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  )
}

export default Contact
