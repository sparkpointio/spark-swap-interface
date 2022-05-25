import styled from 'styled-components'
import { breakpoints } from '../styles/Layout/Breakpoints';

export const Container = styled.div`
  min-height: 25vh;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    flex-direction: column;
    padding: 10px;
  }
`

export const ChildContainer = styled.div<{ direction?: string; alignment?: string }>`
  display: flex;
  margin: 10px 25px;
  padding: 24px;
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  justify-content: space-around;
  align-items: ${({ alignment }) => alignment ?? 'flex-start'};
  & > * {
    margin: 0px 0px 25px 0px;
  }
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    align-items: center;
    & > * {
      align-items: center;
    }
    .nav-footer {
      flex-direction: column;
      & > * {
        margin-top: 10px;
      }
    }
  }
`
export const Label = styled.div<{type?: string; isActive?: boolean}>`
  font-size: 1.2em;
  color: ${({theme})=> theme.colors.textSubtle};
  color: ${({ theme, isActive }) => isActive && theme.colors.text};
  ${({type, theme}) => type === 'launcher' && `
    border: 2px solid ${theme.colors.primary}};
    padding: 10px;
    text-align: center;
    width: 130px;
    color: ${theme.colors.text};
  `}
  :hover {
    color: ${({theme}) => theme.colors.text};
  }
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    font-size: 1em;
  }
`