import styled from 'styled-components'
import { Flex } from '@sparkpointio/sparkswap-uikit'

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`

export const StyledContainer = styled(Container)`
  height: auto;
  display: run-in;
  width: 100%;
  justify-content: space-evenly;
  row-gap: 60px;
`

export const BgContainer = styled.div`
  width: 100%;
`

export const HomeContainer = styled(Flex)`
  // height: auto;
  // margin: 23px;
`

export const ImageContainer = styled(Flex)`
  margin: 24px auto;
  height: 500px;
  & > * {
    margin: 0px auto;
  }
`
export const ButtonContainer = styled(Flex)`
  justify-content: space-between;
  column-gap: 30px;
  width: 30%;
  @media (max-width: 1366px) {
    width: 40%;
  }
  @media (max-width: 500px) {
    width: 50%;
  }
`