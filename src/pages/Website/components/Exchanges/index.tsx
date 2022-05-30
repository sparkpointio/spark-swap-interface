import React from 'react'
import styled from 'styled-components'
import { Title } from '../Elements'
import PageSection from '../styles/Layout'

const BG = styled.div`
  background: url('/images/Website/hero-bg.png');
  background-color: #161C26;
  background-blend-mode: overlay;
  padding-top: 8em;
  padding-bottom: 8em;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-bottom: 3em;
  gap: 1em;

  @media screen and (max-width: 768px) {
    width: 40%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
`

const Image = styled.img`
  height: auto;
  width: 100%;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  background: transparent;
  border: 1px solid #39BEEC;
  box-shadow: 0 2px 6px 0 #39BEEC33, 0 3px 10px 0 #39BEEC33;
  border-radius: 6px;
  padding: 0.6em 1.3em 0.6em 1.3em;
  color: #ffffff;
  font-size: 16px;

  &:hover {
    background: linear-gradient(to right, #0071BC, #39BEEC);
  }
`

const Exchanges = () => {
  return (
    <PageSection direction='column'>
      <BG>
        <Title value='EXCHANGES' />
        <FlexContainer>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 1.png' />
            </ImageContainer>
            <ButtonContainer>
              <Button>SFUEL/USDT</Button>
            </ButtonContainer>
          </Container>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 2.png' />
            </ImageContainer>
            <ButtonContainer>
              <Button>SFUEL/BTC</Button>
              <Button>SRK/ET</Button>
            </ButtonContainer>
          </Container>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 3.png' />
            </ImageContainer>
            <ButtonContainer>
              <Button>TRADE</Button>
            </ButtonContainer>
          </Container>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 4.png' />
            </ImageContainer>
            <ButtonContainer>
              <Button>TRADE</Button>
            </ButtonContainer>
          </Container>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 5.png' />
            </ImageContainer>
            <ButtonContainer>
              <Button>SFUEL/BNB</Button>
              <Button>SFUEL/BTC</Button>
              <Button>SRK/ETH</Button>
              <Button>SFUEL/SRK</Button>
            </ButtonContainer>
          </Container>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 6.png' />
            </ImageContainer>
            <ButtonContainer>
              <Button>SFUEL/ETH</Button>
              <Button>SFUEL/BTC</Button>
              <Button>SFUEL/SRK</Button>
            </ButtonContainer>
          </Container>
        </FlexContainer>
      </BG>
    </PageSection>
  )
}

export default Exchanges
