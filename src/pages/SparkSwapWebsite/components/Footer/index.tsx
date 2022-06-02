import { Grid } from '@mui/material'
import styled, { ThemeContext } from 'styled-components'
import { ChevronUp } from 'react-feather'
import { Text, Button, Flex } from '@sparkpointio/sparkswap-uikit'
import React, { useContext } from 'react'
import useMedia from 'use-media'
import { useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {links} from './config'
import MenuLink from '../Navigation/MenuLink'
import PageSection from '../styles/Layout'
import SocialGroup from './SocialGroup'
import { ChildContainer, Container, Label} from './styled'
import { breakpoints } from '../styles/Layout/Breakpoints'

const StyledText = styled(Text)`
  font-size: 1.4em;
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    font-size: 1em;
  }
`

const CustomArrow = styled(ChevronUp)`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
`


const Footer = () => {
  const location = useLocation();
  const theme = useContext(ThemeContext)
  const launcher = links.filter(link => link.type === 'launcher')[0]
  const tag = location.hash === '' ?  location.pathname : location.hash
  const mBreakPoint = useMedia({ maxWidth: 500 }) // custom breakpoint for back-to-top-arrow

  const SwapSocmeds = () => {
    return (
    <>
      <div>
        <HashLink to="#" smooth>
          <img alt="sparkswap-logo" src="/images/Website/SparkSwapLogoWithWord.png" width="250px" />
        </HashLink>
      </div>
      <div>
        <SocialGroup />
      </div>
      <div >
        <StyledText>&copy; 2022 SparkSwap</StyledText>
      </div>
    </>
    )
  }

  return (
    <Container >
      <ChildContainer>
        {SwapSocmeds()}
      </ChildContainer>
      <ChildContainer alignment='flex-end'>
        <Flex flex={1} style={{maxWidth: '400px'}} className='nav-footer'>
          <Grid style={{ lineHeight: '1.6' }} container>
            {links.map((link) => {
              const linker = link.type ?? link.href
              if (link.type === 'launcher'){
                return ''
              }
              return (
                <Grid item xs={8} sm={12} md={6} key={link.label}>
                  <MenuLink href={link.href}>
                    <Label isActive={linker === tag}>{link.label}</Label>
                  </MenuLink>
                </Grid>
              )
            })}
          </Grid>
          <MenuLink href={launcher.href}>
            <Label type={launcher.type} style={{fontSize:'1em', borderRadius: '6px'}}>{launcher.label}</Label>
          </MenuLink>
        </Flex>
        <Flex alignItems='center' justifyContent='space-between'>
          <Text fontSize='1em'>BACK TO TOP </Text>
          <HashLink to='#' smooth>
            <CustomArrow size={mBreakPoint? '1.5em':'3em'} />
          </HashLink>
        </Flex>
      </ChildContainer>
    </Container>
  )
}

export default Footer
