import React from 'react'
import { Text } from '@sparkpointio/sparkswap-uikit'
import styled from 'styled-components'
import { RowFixed } from '../Row'

export const FilterWrapper = styled(RowFixed)`
  padding: 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  user-select: none;
  & > * {
    user-select: none;
  }
  :hover {
    cursor: pointer;
  }
`

export default function SortButton({
  toggleSortOrder,
  ascending
}: {
  toggleSortOrder: () => void
  ascending: boolean
}) {
  return (
    <FilterWrapper onClick={toggleSortOrder}>
      <Text fontSize="14px">{ascending ? '↑' : '↓'}</Text>
    </FilterWrapper>
  )
}
