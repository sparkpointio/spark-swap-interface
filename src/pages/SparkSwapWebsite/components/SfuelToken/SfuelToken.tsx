import React, { useEffect, useState } from 'react'
import { FaCopy } from 'react-icons/fa'
import styled from 'styled-components'
import { Title } from '../Elements'
import PageSection from '../styles/Layout'
import { Colors } from '../styles/Layout/Colors'

/* Styled Component start */

const FlexContainer = styled.div`
  margin-top: 5em;
`

const Chain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  background-color: #191B1F;
  border: 1px solid ${Colors.accent3};
  box-shadow: 0 4px 8px 0 #39BEEC33, 0 6px 20px 0 #39BEEC33;
  margin: 0em 8em 0em 8em;
  padding: 5em;

  @media screen and (max-width: 850px) {
    margin: 0em 3em 0em 3em;
  }

  @media screen and (max-width: 600px) {
    margin: 0em 1em 0em 1em;
    padding: 2em;
  }
`

const ChainInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1em;
  text-align: center;
`

const ImageContainer = styled.div`
  width: 5em;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const ContentContainer = styled.div`
  color: ${Colors.text1};
`

const ContentTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  align-items: center;
`

const ContentBody = styled.div`
  overflow-wrap: anywhere;
`

const Span = styled.span`
  font-size: 2em;
  font-weight: bold;
  font-family: 'Monda', sans-serif;

  @media screen and (max-width: 480px) {
    font-size: 1.5em;
  }
`

const IconContainer = styled.div`
  color: ${Colors.accent3};
  cursor: pointer;
  `
  
  const Bold = styled.b`
  color: ${Colors.accent3};
  font-size: 2em;
  font-family: 'Quatro', sans-serif;

  @media screen and (max-width: 480px) {
    font-size: 1.5em;
  }
`

const AddToWallet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  border-radius: 5px;
  padding: 1em 2em 1em 2em;
  font-family: 'Quatro', sans-serif;
  background: linear-gradient(to right, ${Colors.accent1}, ${Colors.accent3});
  border: none;
  color: $main-white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.text1}; 
  cursor: pointer;
`

const ButtonImage = styled.img`
  width: 50px;
  height: 50px;
`

const TokenInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2em;
  color: ${Colors.text1};

  @media screen and (max-width: 480px) {
    justify-content: stretch;
  }
`

const Small = styled.p`

`

const TokenInfo = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`

const HeadingImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3em;

  @media screen and (max-width: 850px) {
    margin: 3em 2em 3em 2em;
  }
`

const HeadingImage = styled.img`
  width: 800px;
  height: auto;
`

/* Styled Component end */

declare let window: any;

const SfuelToken = () => {

  const [sfuelToken, setSfuelToken] = useState({
    name: 'SparkPoint Fuel',
    ticker: 'SFUEL',
    currentSupply: '150 Million',
    circulatingSupply: '28+ Million'
  })
  
  const loadSFUELdata = () => {
    fetch('https://test-api-cyan.vercel.app/api/v1/jobs/sfuel')
      .then((res) => res.json())
      .then((data) => {
        const sfuelData = data.data.SFUEL[0]
        const unitsWords = ['Hundred', 'Thousand', 'Million', 'Billion']
        const circulating = parseInt(sfuelData.circulating_supply.toString().split('.')[0]).toLocaleString('en-US').replace(/,/g, ".")
        const supply = parseInt(sfuelData.total_supply.toString().split('.')[0]).toLocaleString('en-US').replace(/,/g, ".")
        const supplySplit = supply.split('.').length - 1
        setSfuelToken({
          name: sfuelData.name,
          ticker: sfuelData.symbol,
          currentSupply: `${supply.split('.')[0]} ${unitsWords[supplySplit]}`,
          circulatingSupply: `${circulating.split('.')[0]}+ ${unitsWords[supplySplit]}`
        })
      })
      .catch((err) => console.error(err))
  }

  const addToWallet = async () => {
    if(typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask wallet extension')
      return
    }
    if(window.ethereum?.chainId.toString() === '0x38') {
      await window.ethereum?.request({
        method: 'wallet_watchAsset',
        params: {
          type: "ERC20",
          options: {
            address: "0x37ac4d6140e54304d77437a5c11924f61a2d976f",
            symbol: "SFUEL",
            decimals: 18,
            image: 'http://bscscan.com/token/images/sparkpointfuel_32.png'
          },
        },
        id: Math.round(Math.random() * 100000)
      })
      return
    }
    alert('Please connect to bsc mainnet')
  }

  const copyAddress = () => {
    const value = '0x37ac4d6140e54304d77437a5c11924f61a2d976f'
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).then(() => {
        alert('Copied to clipboard')
      })
      return
    }
    alert('Clipboard API not supported')
  }
  
  useEffect(() => {
    loadSFUELdata()
  }, [])

  return (
    <PageSection direction='column' padding='8em 0em 8em 0em' background='#15151A'>
      <div id="governance">
      <HeadingImageContainer>
        <HeadingImage src='images/Website/SFUEL Token.png' />
      </HeadingImageContainer>
      <Title value='The SFUEL Token' value2='The power behind SparkSwap' subtitle="The SFUEL token is SparkSwap's governance token that enables the delegation of governance of the SparkSwap platform to SFUEL holders. These DAO members are responsible for the direction of the protocol through systematic voting." />
      <FlexContainer>
        <Chain>
          <ChainInfo>
            <ImageContainer>
              <Image src='images/Website/bsc.png' alt='' />
            </ImageContainer>
            <ContentContainer>
              <ContentTitle>
                <Span>Binance Smart Chain (BEP-20)</Span>
                <Span>Contract Address</Span>
                <IconContainer onClick={copyAddress}>
                  <FaCopy />
                </IconContainer>
              </ContentTitle>
              <ContentBody>
                <Bold>0x37ac4d6140e54304d77437a5c11924f61a2d976f</Bold>
              </ContentBody>
            </ContentContainer>
          </ChainInfo>
          <AddToWallet>
            <Button type='button' onClick={addToWallet}>Add to <ButtonImage src='images/Website/metamask.png' alt='MetaMask' /> MetaMask Wallet</Button>
          </AddToWallet>
          <TokenInfoWrapper>
            <TokenInfo>
              <Bold>{sfuelToken.name}</Bold>
              <Small>Token Name</Small>
            </TokenInfo>
            <TokenInfo>
              <Bold>{sfuelToken.ticker}</Bold>
              <Small>Ticker Name</Small>
            </TokenInfo>
            <TokenInfo>
              <Bold>{sfuelToken.currentSupply}</Bold>
              <Small>Current Total Supply</Small>
            </TokenInfo>
            <TokenInfo>
              <Bold>{sfuelToken.circulatingSupply}</Bold>
              <Small>Circulating Supply</Small>
            </TokenInfo>
          </TokenInfoWrapper>
        </Chain>
      </FlexContainer>
      </div>
    </PageSection>
  )
}

export default SfuelToken
