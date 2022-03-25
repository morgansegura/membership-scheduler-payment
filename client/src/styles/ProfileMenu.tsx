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
  position: relative;
  z-index: 2;
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
  z-index: 1;
  overflow: hidden;
  top: 38px;
  right: ${style.sp[6]};
  display: flex;
  flex-direction: column;
  ${style.shadow.lg}
  ${style.radius.lg}
	/* background-color: ${props => props.theme.menu.bgcolor}; */
  transform-origin: 0 100%;
  min-width: 200px;
  padding-bottom: ${style.sp['2']};
  /* border-top: 1px solid ${props => props.theme.colors.panel[20]};
  color: ${props => props.theme.colors.panel[80]}; */
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

  a {
    display: flex;
  }
`

export const ProfileNavItem = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${style.sp[1.5]} ${style.sp[3]};
  ${style.fontSizing('14px', '28px', 900)}
  font-weight: 400;
  cursor: pointer;
  border-top: 1px solid transparent;
  transition: background-color 0.3s ease-out;
  /* border-bottom: 1px solid ${props => props.theme.menu.bordercolor};
  color: ${props => props.theme.colors.panel[80]}; */

  &:hover {
    /* background-color: ${props => rgba(props.theme.colors.panel[10], 0.6)}; */
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
  /* background-color: ${props => props.theme.colors.primary}; */
  color: ${style.colors.white};
  ${style.fontSizing('20px', '40px')}
  font-weight: 900;
  overflow: hidden;
  transition: outline 0.3s ease-out;

  ${(props: AvatarProps) =>
    props.focus
      ? css`
          /* outline: 4px solid ${props => rgba(props.theme.colors.panel[30], 0.6)}; */
        `
      : css`
          outline: 4px solid transparent;
        `}
`

export const Tab = styled.div`
  display: flex;
  align-items: center;
  padding: ${style.sp[2.5]} ${style.sp[4]} ${style.sp[1.5]} ${style.sp[4]};
  ${style.fontSizing('14px', '28px', 700)}
  text-transform: uppercase;
  /* color: ${props => props.theme.colors.panel[60]};
  background-color: ${props => rgba(props.theme.colors.panel[20], 0.4)};
  border-bottom: 1px solid ${props => rgba(props.theme.colors.panel[20], 0.6)}; */
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
  ${style.radius.circle}/* ${(props: ThemeProps) =>
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
        `} */
`
