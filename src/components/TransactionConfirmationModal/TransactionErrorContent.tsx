import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Button, Text } from '@sparkpointio/sparkswap-uikit'
import { AlertTriangle } from 'react-feather'
import { AutoColumn } from '../Column'
import { Wrapper, Section, BottomSection, ContentHeader, OptionButton } from './helpers'

type TransactionErrorContentProps = { message: string; onDismiss: () => void }

const TransactionErrorContent = ({ message, onDismiss }: TransactionErrorContentProps) => {
  const theme = useContext(ThemeContext)
  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>Error</ContentHeader>
        <AutoColumn style={{ marginTop: 20, padding: '1rem 0' }} gap="12px" justify="center">
          <AlertTriangle color={theme.colors.failure} style={{ strokeWidth: 1.5 }} size={64} />
          <Text fontSize="16px" color="failure" style={{ textAlign: 'center', width: '85%' }}>
            {message}
          </Text>
        </AutoColumn>
      </Section>
      <BottomSection gap="12px">
        <OptionButton onClick={onDismiss} style={{borderRadius: '5px'}}>Dismiss</OptionButton>
      </BottomSection>
    </Wrapper>
  )
}

export default TransactionErrorContent
