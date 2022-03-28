import styled from 'styled-components'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const TwoColumn = styled(Column)`
// grid-template-columns: repeat(2, 1fr);
// grid-template-rows: 2;
width: 20%;
max-width: 1200px;
height: auto;
text-align: left;
justify-content: center;
column-gap: 20px;
row-gap: 20px;
margin: 20px;
@media (max-width: 600px){
  grid-template-columns: repeat(1, 1fr);
  width: 80%;
}
`

export const ColumnCenter = styled(Column)`
  width: 100%;
  align-items: center;
  margin: auto;
`

export const AutoColumn = styled.div<{
  gap?: 'sm' | 'md' | 'lg' | string
  justify?: 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'space-between'
}>`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${({ gap }) => (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap};
  justify-items: ${({ justify }) => justify && justify};

`

export const StyledOptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 450px){
    justify-content: flex-start;
    flex-direction: column;
  }
`

export const StyledAutoColumn = styled(Column)`
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`

export const StyledInputContainer = styled.div`
  width: 100%;
`


export default Column
