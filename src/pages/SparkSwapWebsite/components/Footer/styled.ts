import styled from 'styled-components'
import { breakpoints } from '../styles/Layout/Breakpoints'
import { Colors } from '../styles/Layout/Colors'

export const Container = styled.div`
  width: 100%;
  min-height: 25vh;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  @media screen and (max-width: ${breakpoints.Mobile.xl}px) {
    flex-direction: column;
    padding: 30px 10px;
  }
`

export const ChildContainer = styled.div<{ direction?: string; alignment?: string }>`
  width: 100%;
  display: flex;
  margin: 10px 25px;
  padding: 24px;
  justify-content: space-around;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  align-items: ${({ alignment }) => alignment ?? 'flex-start'};
  .nav-footer {
    margin-top: 20px;
  }
  & > * {
    margin: 0px 0px 25px 0px;
  }
  @media screen and (max-width: ${breakpoints.Mobile.xl}px) {
    margin: 0;
    padding: 0px 24px;
    align-items: flex-start;
    & > * {
      align-items: flex-start;
    }
    .nav-footer {
      flex-direction: column;
      & > * {
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: ${breakpoints.Mobile.xl}px) {
    justify-content: center;
    align-items: center;
  }
`
export const Label = styled.div<{ type?: string; isActive?: boolean }>`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.textSubtle};
  color: ${({ isActive }) => isActive && Colors.accent3};
  ${({ type, theme }) =>
    type === 'launcher' &&
    `
    // border: 2px solid ${theme.colors.primary}};
    padding: 10px;
    text-align: center;
    width: 130px;
    color: ${theme.colors.text};
    background: rgb(57,190,236);
    background: linear-gradient(277deg, rgba(57,190,236,1) 13%, rgba(0,113,188,1) 59%);
  `}
  :hover {
    color: ${({ theme }) => theme.colors.text};
  }
  @media screen and (max-width: ${breakpoints.Mobile.xl}px) {
    font-size: 1em;
  }
`
