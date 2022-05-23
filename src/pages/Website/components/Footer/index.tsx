import { Grid } from '@mui/material'
import { ThemeContext } from 'styled-components'
import { ChevronUp } from 'react-feather'
import { Text, Button, Flex } from '@sparkpointio/sparkswap-uikit'
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {links} from './config'
import MenuLink from '../Navigation/MenuLink'
import PageSection from '../styles/Layout'
import SocialGroup from './SocialGroup'
import { ChildContainer, Container, Label} from './styled'


const Footer = () => {
  const location = useLocation();
  const theme = useContext(ThemeContext)
  const launcher = links.filter(link => link.type === 'launcher')[0]
  return (
    <Container>
      <ChildContainer>
        <div>
          <Link to="/">
            <img alt="sparkswap-logo" src="/images/Website/SparkSwapLogoWithWord.png" width="250px" />
          </Link>
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
                    <Label isActive={link.href === location.pathname}>{link.label}</Label>
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
            <ChevronUp color={theme.colors.primary} size="4em" style={{marginLeft: '10px', border: `2px solid ${theme.colors.primary}`}} type='outline' />
        </Flex>
      </ChildContainer>
    </Container>
  )
}

export default Footer
