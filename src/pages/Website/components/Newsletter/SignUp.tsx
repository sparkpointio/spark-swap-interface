import React from 'react'
import { Flex, Text } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { StyledButton } from '../Elements/Buttons/Button'

const Container = styled.div`
  margin: 0px auto;
  border: 1px solid red;
`
const AppComponent: React.FC = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <Text as="p">
            Signing up to the newsletter means consenting to receiving marketing and news emails from SparkSwap
          </Text>
        </Grid>
        <Grid item xs={6}>
          <Flex flexDirection='column'>
          <Text>Email Address</Text>
          <input type="text" />
          <StyledButton>Subscribe Now</StyledButton>
          </Flex>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AppComponent
