import styled from 'styled-components'
import { rgba } from 'polished'
import * as style from 'styles/config/utilities'

export const BGContainer = styled.div`
  user-select: none;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`
export const BGThemeColorsFromBottom = styled.div`
  &:before,
  &:after {
    z-index: -1;
    content: '';
    position: fixed;
    height: 100%;
    top: 0;
    width: 55%;
  }

  &:before {
    /* background: linear-gradient(
      65deg,
      ${props => rgba(props.theme.body.bgcolor, 0.9)} 0%,
      ${rgba(style.colors.pink300, 0.0)} 45%,
      transparent 60%
    ); */
    left: 0;
  }
  &:after {
    background: linear-gradient(
      -65deg,
      ${rgba(style.colors.white, 0.9)} 0%,
      ${rgba(style.colors.blue300, 0.0)} 45%,
      transparent 60%
    );
    right: 0;
  }
`
