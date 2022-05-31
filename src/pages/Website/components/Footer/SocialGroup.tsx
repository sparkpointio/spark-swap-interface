import React, { useContext } from 'react'
import * as IconCollection from 'react-icons/fa'
import styled, { ThemeContext } from 'styled-components'
import { socials } from './config'

const Container = styled.div`
  & > * {
    color: ${({theme}) => theme.colors.primary};
    width: 30px;
    font-size: 30px;
    margin-right: 20px;
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