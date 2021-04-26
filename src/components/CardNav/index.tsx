import React, { useContext } from 'react'
import styled, {ThemeContext} from 'styled-components'
import { Link} from 'react-router-dom'
import { Button, ButtonMenu, ButtonMenuItem, useModal } from '@sparkpointio/sparkswap-uikit'
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

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => {
  const theme = useContext(ThemeContext)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal />)

  return (
  <StyledNav>
    <StyledButtonMenu size="md" activeIndex={activeIndex}  variant='primary'>
      <ButtonMenuItem fullWidth id="swap-nav-link" to="/swap" as={Link} style={{height: '7vh', ...theme.isDark && {color: `${theme.isDark && theme.colors.text}`}}} >
        <TranslatedText translationId={8}>Swap</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem fullWidth id="pool-nav-link" to="/pool" as={Link} style={{height: '7vh', ...theme.isDark && {color: `${theme.isDark && theme.colors.text}`} }}  >
        <TranslatedText translationId={74}>Liquidity</TranslatedText>
      </ButtonMenuItem>
    </StyledButtonMenu>
    <StyledButton variant="text" fullWidth onClick={onPresentRecentTransactions} style={{ ...theme.isDark ? {color: theme.colors.text} : {color: theme.colors.primary}}}>
        <TranslatedText translationId={74}>History</TranslatedText>
    </StyledButton>
  </StyledNav>
)}

export default Nav
