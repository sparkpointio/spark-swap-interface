import React, { useContext } from 'react'
import styled, {ThemeContext} from 'styled-components'
import { Link} from 'react-router-dom'
import { Button, ButtonMenu, ButtonMenuItem, useModal, Flex, Text} from '@sparkpointio/sparkswap-uikit'
import TranslatedText from '../TranslatedText';
import RecentTransactionsModal from '../PageHeader/RecentTransactionsModal';



const StyledNav = styled.div`
  display: flex;
  height: 7vh;
`

const StyledButtonMenu = styled(ButtonMenu)`
  & {
    width: 100%;
    flex: 2;
    background-color: ${({theme}) => theme.colors.background};
  }
`
const StyledButton = styled(Button)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.textSubtle};
  height: 7vh;
`
const StyledFLex = styled(Flex)`
background-color: ${({theme}) => theme.colors.background};
width: 100%;
  & > * {
    color: ${({theme}) => theme.isDark && theme.colors.textSubtle};
    flex: 1;
    width: 100%;
    text-align: center;
    padding: 10px;
  }
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => {
  const theme = useContext(ThemeContext)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal />)

  return (
  <StyledNav>
    <StyledFLex>
      <Link  to="/swap" style={{backgroundColor: activeIndex === 0 ? theme.colors.primary: 'transparent'}}>
        <Text>Swap</Text>
      </Link>
      <Link  id="pool-nav-link" to="/pool" style={{backgroundColor: activeIndex === 1 ? theme.colors.primary: 'transparent'}}>
        <Text>Liquidity</Text>
      </Link>
      <Link  id="history-nav-link" to="/history" style={{backgroundColor: activeIndex === 2 ? theme.colors.primary: 'transparent'}}>
        <Text>History</Text>
      </Link>
    </StyledFLex>
  </StyledNav>
)}

export default Nav
