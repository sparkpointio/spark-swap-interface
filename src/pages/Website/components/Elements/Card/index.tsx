import React from 'react'
import styled from 'styled-components'

const Container = styled.div<{ background ?: string }>`
  border: 1px solid #39BEEC;
  padding: 2em;
  border-radius: 10px;
  width: 20%;
  line-height: 1.5em;
  box-shadow: 0 4px 8px 0 #39BEEC33, 0 6px 20px 0 #39BEEC33;
  margin: 0em 1em 0em 1em;
  background: ${(props) => props.background};

  @media screen and (max-width: 1440px) {
    width: 40%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  margin-bottom: 1em;
`

const Image = styled.img``

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1em;
`

const Heading = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  margin-top: 0.5em;
  overflow-wrap: break-word;
  font-family: 'Quatro';
`

const Body = styled.p`
  color: #ffffff;
  width: 100%;
`

const Card: React.FC<{background?: string; src ?: string; heading ?: string; body ?: string}> = ({background, src, heading, body}) => {
  return (
    <Container background={background}>
      <ImageContainer>
        <Image src={src} alt='' />
      </ImageContainer>
      <TextContainer>
        <Heading>{heading}</Heading>
        <Body>{body}</Body>
      </TextContainer>
    </Container>
  )
}

export default Card
