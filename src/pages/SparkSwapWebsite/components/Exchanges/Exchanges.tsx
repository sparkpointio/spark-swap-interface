import React from 'react'
import styled from 'styled-components'
import { Title } from '../Elements'
import PageSection from '../styles/Layout'

const BG = styled.div`
  background: url('/images/Website/hero-bg.png');
  background-color: #161C26;
  background-blend-mode: overlay;
  padding-top: 20em;
  padding-bottom: 13em;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  margin-top: 8em;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-bottom: 3em;
  gap: 1em;
  @media screen and (max-width: 1366px) {
    margin: 3em auto auto auto;
  }
  @media screen and (max-width: 768px) {
    width: 40%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
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
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #0071BC, #39BEEC);
  }
`

const Link = styled.a``

const Exchanges = () => {
  return (
    <PageSection direction='column'>
      <BG>
        <Title value='Get SFUEL here!' subtitle='SFUEL is readily available in the SparkSwap DEX and other exchanges!' noBg />
        <FlexContainer>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 1.png' />
            </ImageContainer>
            <ButtonContainer>
              <Link href='https://www.bithumb.pro/en-us/exchange/professional?q=SFUEL-USDT' target='_blank' rel='noreferrer'>
                <Button>SFUEL/USDT</Button>
              </Link>
            </ButtonContainer>
          </Container>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 2.png' />
            </ImageContainer>
            <ButtonContainer>
              <Link href='https://www.bitmart.com/trade/en?layout=pro&symbol=SFUEL_BTC' target='_blank' rel='noreferrer'>
                <Button>SFUEL/BTC</Button>
              </Link>
              <Link href='https://www.bitmart.com/trade/en?layout=basic&symbol=SRK_ETH' target='_blank' rel='noreferrer'>
                <Button>SRK/ETH</Button>
              </Link>
            </ButtonContainer>
          </Container>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 3.png' />
            </ImageContainer>
            <ButtonContainer>
              <Link href='https://exchange.pancakeswap.finance/#/swap' target='_blank' rel='noreferrer'>
                <Button>TRADE</Button>
              </Link>
            </ButtonContainer>
          </Container>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 4.png' />
            </ImageContainer>
            <ButtonContainer>
              <Link href='https://sparkswap.finance/#/swap' target='_blank' rel='noreferrer'>
                <Button>TRADE</Button>
              </Link>
            </ButtonContainer>
          </Container>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 5.png' />
            </ImageContainer>
            <ButtonContainer>
              <Link href='https://changenow.io/?from=sfuel&to=bnbbsc' target='_blank' rel='noreferrer'>
                <Button>SFUEL/BNB</Button>
              </Link>
              <Link href='https://changenow.io/?from=sfuel&to=btc' target='_blank' rel='noreferrer'>
                <Button>SFUEL/BTC</Button>
              </Link>
              <Link href='https://changenow.io/?from=sfuel&to=eth' target='_blank' rel='noreferrer'>
                <Button>SFUEL/ETH</Button>
              </Link>
              <Link href='https://changenow.io/?from=sfuel&to=srk' target='_blank' rel='noreferrer'>
                <Button>SFUEL/SRK</Button>
              </Link>
            </ButtonContainer>
          </Container>
          <Container>
            <ImageContainer>
              <Image src='images/Website/6 Exchanges 6.png' />
            </ImageContainer>
            <ButtonContainer>
              <Link href='https://swapzone.io/exchange/sfuel/eth' target='_blank' rel='noreferrer'>
                <Button>SFUEL/ETH</Button>
              </Link>
              <Link href='https://swapzone.io/exchange/sfuel/btc' target='_blank' rel='noreferrer'>
                <Button>SFUEL/BTC</Button>
              </Link>
              <Link href='https://swapzone.io/exchange/sfuel/srk' target='_blank' rel='noreferrer'>
                <Button>SFUEL/SRK</Button>
              </Link>
            </ButtonContainer>
          </Container>
        </FlexContainer>
      </BG>
    </PageSection>
  )
}

export default Exchanges
