import styled from 'styled-components'

const WebsiteColumn = styled.div`
  display: grid;
`

export const TwoColumnHeader = styled(WebsiteColumn)`
  // grid-template-columns: repeat(2, 2fr);
  grid-template-columns: 1fr auto;
  grid-template-rows: 1;
  width: 100%;
  // max-width: 2000px;
  height: auto;
  text-align: center;
  justify-content: center;
  column-gap: 0px;
  row-gap: 0px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`

export const TwoColumn = styled(WebsiteColumn)`
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: 1;
  width: 100%;
  max-width: 1500px;
  height: auto;
  text-align: left;
  justify-content: center;
  column-gap: 70px;
  row-gap: 20px;
  @media (max-width: 1366px) {
    column-gap: 20px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
  }
`

export const PlatformColumn = styled(WebsiteColumn)`
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  width: 100%;
  max-width: 1200px;
  height: auto;
  text-align: center;
  justify-content: center;
  column-gap: 20px;
  row-gap: 20px;
  // margin: 20px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
  }
`