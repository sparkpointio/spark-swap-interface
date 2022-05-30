import React from 'react'
// import { Flex } from '@sparkpointio/sparkswap-uikit'
import { Grid } from '@mui/material'
import { Title } from '../Elements'
import PageSection from '../styles/Layout'
import { Colors } from '../styles/Layout/Colors'
import SignUp from './SignUp'

const Newsletter = () => {
  return (
    <PageSection background={Colors.background1} direction='column'>
      <Title value="NEWSLETTER" />
      <SignUp />
    </PageSection>
  )
}

export default Newsletter
