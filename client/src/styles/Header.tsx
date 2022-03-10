import styled from 'styled-components'
import * as style from 'styles/config/utilities'

interface NavItemProps {
  active?: boolean
  theme?: any
}

export const Header = styled.div`
  position: relative;
  z-index: 2;
  background-color: ${props => props.theme.header.bgcolor};
  margin-top: ${style.sp['3']};
  margin-bottom: ${style.sp['2.5']};
  ${style.radius['md']};
  padding: ${style.sp['4']} ${style.sp['6']};

  ${style.media['lg']`
		padding-right: ${style.sp['4']};
		padding-left: ${style.sp['4']};
	`}

  ${style.media['xl']`
		padding-right: ${style.sp['6']};
		padding-left: ${style.sp['6']};
	`}

	${style.media['xxl']`
		padding-right: ${style.sp['8']};
		padding-left: ${style.sp['8']};
	`}

	a {
    text-decoration: none;
    line-height: 0;
    transition: color 0.3s ease-out;

    &:last-of-type {
      margin-right: ${style.sp['3']};
    }

    &:hover {
      color: ${props => props.theme.button.bgcolorForm};
    }
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Logo = styled.div`
  ${style.fontSizing('14px', '28px', 500)}
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${style.colors.slate900};
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  grid-gap: ${style.sp['5']};
`
export const NavItem = styled.span`
  cursor: pointer;
  ${style.fontSizing('12px', '20px', 600)}
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${style.colors.slate700};

  ${(props: NavItemProps) =>
    props.active &&
    `
        color: ${props.theme.button.bgcolorForm};
    `};
`
