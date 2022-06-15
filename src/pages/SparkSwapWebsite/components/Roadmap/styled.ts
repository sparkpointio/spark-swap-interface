import styled from 'styled-components'
import { Heading } from '@sparkpointio/sparkswap-uikit'
import { Colors } from '../styles/Layout/Colors'

export const Card = styled.div`
  background-color: ${Colors.background2};
  border: ${Colors.accent3} 0.1rem solid;
  border-radius: 0.5rem;
  padding: 2rem;
  -moz-box-shadow: inset 0 0 2rem #000000;
  -webkit-box-shadow: inset 0 0 2rem #000000;
  box-shadow: inset 0 0 0.1rem #000000, 0 0 0.5rem ${Colors.accent3};
  z-index: 3;
`

export const CardContainer = styled.div`
  flex: 1;
  max-width: 26rem;
  min-width: 16rem;
  position: relative;
`
export const HeadingGlow = styled(Heading)<{ glow?: string }>`
  text-align: center;
  color: ${Colors.accent3};
  
`
export const Line = styled.div`
  width: 10%;
  background-color: rgb(253,218,0);
  z-index: 0;
  position: absolute;
  top: 5rem;
  left: 100%;
  border: solid ${Colors.accent3};
  box-shadow: 0 0 0.3rem #fdda00;
  @media (max-width: 1280px) {
    width: 0.1rem;
    left: 50%;
    top: 100%;
    height: 15%;
  }
`

export const MapList = styled.ul`
  text-align: left;
  color: white;
  list-style-type: none;
  line-height: 1.5;
  font-weight: 400;
`
export const CheckList = styled.li`
  padding: 1rem 0 0 1rem;
  &:before{
    content: "✔";
    color: #06ff65;
    font-weight: bold;
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }
`
export const List = styled.li`
  padding: 1rem 0 0 1rem;
  &:before{
    content: "●";
    color: ${Colors.accent2};
    font-weight: bold;
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }
`

export const TextList = styled.li`
padding: 1rem 0 0 1rem;
&:before{
  content: "-";
  color: ${Colors.text1};
  font-weight: bold;
  display: inline-block;
  width: 1rem;
  margin-left: -1rem;
}
`