import React, { useContext } from 'react'
import * as IconCollection from 'react-icons/fa'
import styled, { ThemeContext } from 'styled-components'
import { socials } from './config'
import { breakpoints } from '../styles/Layout/Breakpoints'
import { Colors } from '../styles/Layout/Colors'

const Container = styled.div`
  & > * {
    // color: ${({theme}) => theme.colors.secondary};
    color: ${Colors.accent3};
    width: 30px;
    font-size: 30px;
    margin-right: 20px;
    @media screen and (max-width: ${breakpoints.Mobile.l}px) {
      margin: 0px 10px 0px 0px;
    }
  }
`

const icons = (IconCollection as unknown) as { [key: string]: React.FC}
const SocialGroup:React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
     <Container>
      {socials.map((social) => {
        const res = `Fa${social.name}`
        const Icon = icons[res]
        return (
          <a href={social.href} key={social.name} target="_blank" rel="noreferrer noopener">
            <Icon />
          </a>
        )
      })}
     </Container>
  )
}

export default SocialGroup