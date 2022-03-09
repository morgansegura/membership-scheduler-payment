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
    width: 50%;
  }

  &:before {
    background: linear-gradient(
      40deg,
      ${rgba(style.colors.slate400, 0.6)} 0%,
      ${rgba(style.colors.slate100, 0.6)} 25%,
      ${style.colors.white} 45%,
      ${props => props.theme.body.bgcolor} 80%
    );
    left: 0;
  }
  &:after {
    background: linear-gradient(
      -40deg,
      ${rgba(style.colors.slate400, 0.6)} 0%,
      ${rgba(style.colors.slate100, 0.6)} 25%,
      ${style.colors.white} 45%,
      ${props => props.theme.body.bgcolor} 80%
    );
    right: 0;
  }
`
