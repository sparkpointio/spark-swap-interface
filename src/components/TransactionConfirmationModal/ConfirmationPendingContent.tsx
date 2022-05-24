import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@sparkpointio/sparkswap-uikit'
import { Spinner } from '../Shared'
import { AutoColumn } from '../Column'
import Circle from '../../assets/images/blue-loader.svg'
import { Wrapper, Section, ConfirmedIcon, ContentHeader, StyledWrapper } from './helpers'

type ConfirmationPendingContentProps = { onDismiss: () => void; pendingText: string }

const CustomLightSpinner = styled(Spinner)<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

const ConfirmationPendingContent = ({ onDismiss, pendingText }: ConfirmationPendingContentProps) => {
  return (
    <StyledWrapper>
      <Section >
          <AutoColumn gap="12px" justify="center">
            <Text fontSize="14px">
              <strong>Wallet Confirmation Details</strong>
            </Text>
          </AutoColumn>
      </Section>
    </StyledWrapper>
  )
}

export default ConfirmationPendingContent
