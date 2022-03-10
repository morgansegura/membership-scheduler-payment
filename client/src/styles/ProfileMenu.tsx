import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'
import { rgba } from 'polished'

interface MenuProps {
  isVisible: boolean
}
interface AvatarProps {
  focus: boolean
}
interface ThemeProps {
  theme: string
}
interface ActiveProps {
  active?: boolean
}

export const MenuSelector = styled.div`
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  padding: 0;
  margin: 0;
  border: none;
  background-color: unset;

  &:hover {
    opacity: 0.8;
  }
`

export const Menu = styled.div`
  position: absolute;
  z-index: 100;
  overflow: hidden;
  top: ${style.sp[10]};
  right: ${style.sp[8]};
  display: flex;
  flex-direction: column;
  ${style.shadow.lg}
  ${style.radius.lg}
	background-color: ${style.colors.white};
  transform-origin: 0 100%;
  min-width: 200px;
  /* padding-top: ${style.sp['1.5']}; */
  padding-bottom: ${style.sp['1.5']};
  border-top: 2px solid ${style.colors.slate50};
  color: ${style.colors.slate800};
  letter-spacing: normal;
  transition: opacity 0.3s ease-out;

  ${(props: MenuProps) =>
    props.isVisible
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};
`

export const NavItem = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${style.sp[1]};
  padding-right: ${style.sp[3]};
  padding-bottom: ${style.sp[1]};
  padding-left: ${style.sp[3]};
  color: ${style.colors.slate800};
  ${style.fontSizing('14px', '28px')}
  font-weight: 400;
  cursor: pointer;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: background-color 0.3s ease-out;

  /* &:not(:first-of-type) { */
  border-top: 1px solid ${rgba(style.colors.slate200, 0.4)};
  color: ${style.colors.slate600};
  /* } */

  &:hover {
    background-color: ${rgba(style.colors.slate100, 0.6)};
  }

  ${(props: ActiveProps) => props.active && css``}

  &:active {
  }
`

export const Avatar = styled.div`
  user-select: none;
  ${style.radius.circle};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.button.bgcolorForm};
  color: ${style.colors.white};
  ${style.fontSizing('20px', '40px')}
  font-weight: 900;
  overflow: hidden;
  transition: outline 0.3s ease-out;

  ${(props: AvatarProps) =>
    props.focus
      ? css`
          outline: 4px solid ${rgba(style.colors.violet300, 0.6)};
        `
      : css`
          outline: 4px solid transparent;
        `}
`

export const Tab = styled.div`
  display: flex;
  align-items: center;
  padding: ${style.sp[2.5]} ${style.sp[4]} ${style.sp[1.5]} ${style.sp[4]};
  ${style.fontSizing('13px', '26px')}
  text-transform: uppercase;
  font-weight: 600;
  color: ${style.colors.slate500};
  background-color: ${rgba(style.colors.slate200, 0.4)};
  border-bottom: 1px solid ${rgba(style.colors.slate300, 0.1)};
`

export const Badge = styled.strong`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  padding: ${style.sp[1.5]};
  ${style.fontSizing('12px', '24px')}
  font-weight: 900;
  ${style.radius.circle}

  ${(props: ThemeProps) =>
    props.theme === 'success'
      ? css`
          color: ${style.colors.red50};
          background-color: ${style.colors.red800};
        `
      : props.theme === 'warning'
      ? css`
          color: ${style.colors.red50};
          background-color: ${style.colors.red800};
        `
      : props.theme === 'danger'
      ? css`
          color: ${style.colors.red50};
          background-color: ${style.colors.red800};
        `
      : css`
          color: ${style.colors.slate900};
          background-color: ${style.colors.slate200};
        `}
`
