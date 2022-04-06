import styled from '@emotion/styled'
import { Theme } from 'styles/config/interfaces/Theme'

export const StyledHeader = styled.div`
  .HeaderContainer-root {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
  .HeaderLogo-root {
    text-decoration: none;
  }
`
export const StyledAppBar = styled.div`
  .AppBarContainer-root {
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 1rem 0 1rem;
  }
  .AppBar-root {
    z-index: 1200;
    color: ${(props: Theme) => props.theme.palette.text.primary};
    transition: box-shadow 0.3s ${(props: Theme) => props.theme.transitions.easing.easeOut};
    overflow: hidden;
    width: 100%;
    max-width: 2256px;
    position: relative;
    padding: 0.75rem 1.25rem;
    border-radius: 1rem;
    box-sizing: border-box;
  }
`
