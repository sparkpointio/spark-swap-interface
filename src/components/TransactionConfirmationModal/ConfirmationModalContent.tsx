import React from 'react'
import { Text } from '@sparkpointio/sparkswap-uikit';
import { Wrapper, Section, BottomSection, ContentHeader, ContentSection } from './helpers'

type ConfirmationModalContentProps = {
  title: string
  onDismiss: () => void
  topContent: () => React.ReactNode
  bottomContent: () => React.ReactNode
}

const ConfirmationModalContent = ({ title, bottomContent, onDismiss, topContent }: ConfirmationModalContentProps) => {
  return (
    <Wrapper>
       <ContentHeader onDismiss={onDismiss}>{null}</ContentHeader>
       <ContentSection>
         <Text fontSize="20px">{title}</Text>
        {topContent()}
      </ContentSection>
      <BottomSection gap="12px">{bottomContent()}</BottomSection>
    </Wrapper>
  )
}

export default ConfirmationModalContent
