import styled from 'styled-components' 


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  padding: 2rem;
 ${({theme}) => theme.mediaQueries.sm} {
  padding: 10rem 5rem 5rem 5rem;
  }
`

export const Form = styled.form``

export const ImageContainer = styled.div`
  width: 1000px;
  height: 1000px;
`