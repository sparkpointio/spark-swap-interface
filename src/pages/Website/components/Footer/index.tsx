import { Grid } from '@mui/material'
import { ThemeContext } from 'styled-components'
import { ChevronUp } from 'react-feather'
import { Text, Button, Flex } from '@sparkpointio/sparkswap-uikit'
import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {links} from './config'
import MenuLink from '../Navigation/MenuLink'
import PageSection from '../styles/Layout'
import SocialGroup from './SocialGroup'
import { ChildContainer, Container, Label} from './styled'


const Footer = () => {
  const location = useLocation();
  const theme = useContext(ThemeContext)
  const launcher = links.filter(link => link.type === 'launcher')[0]
  const tag = location.hash === '' ?  location.pathname : location.hash
  
  return (
    <Container>
      <ChildContainer>
        <div>
          <HashLink to="#" smooth>
            <img alt="sparkswap-logo" src="/images/Website/SparkSwapLogoWithWord.png" width="250px" />
          </HashLink>
        </div>
        <div>
          <SocialGroup />
        </div>
        <div>
          <Text fontSize="1.4em">&copy; 2022 SparkSwap</Text>
        </div>
      </ChildContainer>
      <ChildContainer alignment='flex-end'>
        <Flex flex={1} style={{maxWidth: '400px'}} className='nav-footer'>
          <Grid container>
            {links.map((link) => {
              if (link.type === 'launcher'){
                return ''
              }
              return (
                <Grid item xs={6} md={6}>
                  <MenuLink href={link.href}>
                    <Label isActive={link.href === tag}>{link.label}</Label>
                  </MenuLink>
                </Grid>
              )
            })}
          </Grid>
          <MenuLink href={launcher.href}>
            <Label type={launcher.type}>{launcher.label}</Label>
          </MenuLink>
        </Flex>
        <Flex alignItems='center' justifyContent='space-between'>
            <Text fontSize='2em'>BACK TO TOP </Text>
            <HashLink to='#' smooth>
            <ChevronUp color={theme.colors.primary} size="4em" style={{marginLeft: '10px', border: `2px solid ${theme.colors.primary}`}} type='outline' />
            </HashLink>
        </Flex>
      </ChildContainer>
    </Container>
  )
}

export default Footer
