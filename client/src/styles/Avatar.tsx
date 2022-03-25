import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'
import { rgba } from 'polished'

export const UserText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  user-select: none;
  ${style.radius.circle};
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${props => props.theme.colors.primary}; */
  color: ${style.colors.white};
  font-weight: 900;
  overflow: hidden;
  transition: outline 0.3s ease-out;
`

type UserImageProps = {
  size?: string
}

export const IconContainer = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 1;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${rgba(style.colors.black, 0.5)};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  svg {
    font-size: 25px;
    fill: ${rgba(style.colors.white, 0.9)};
  }
  transition: opacity 0.3s ease-out;
`

export const UserImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${style.radius.circle};

  input {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    border: 1px solid red;
    opacity: 0;
  }

  ${(props: UserImageProps) =>
    props.size === 'sm'
      ? css`
          width: 45px;
          height: 45px;

          ${UserText} {
            ${style.fontSizing('22px', '40px', 900)}
          }
        `
      : props.size === 'md'
      ? css`
          width: 65px;
          height: 65px;
          ${UserText} {
            ${style.fontSizing('32px', '40px', 900)}
          }
        `
      : props.size === 'lg'
      ? css`
          width: 80px;
          height: 80px;
          ${UserText} {
            ${style.fontSizing('40px', '40px', 900)}
          }
        `
      : css`
          width: 55px;
          height: 55px;
          ${UserText} {
            ${style.fontSizing('27px', '40px', 900)}
          }
        `}
  &:hover {
    ${IconContainer} {
      opacity: 1;
    }
  }

  img {
    display: flex;
  }
`
