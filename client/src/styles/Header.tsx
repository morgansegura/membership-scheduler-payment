import styled from 'styled-components'
import * as include from 'styles/config/utilities'

interface NavItemProps {
  active?: boolean
}

export const Header = styled.div`
  position: relative;
  z-index: 2;
  background-color: ${include.colors.white};
  margin-top: ${include.sp['3']};
  margin-bottom: ${include.sp['2.5']};
  ${include.radius['md']};
  padding: ${include.sp['4']} ${include.sp['6']};

  ${include.media['lg']`
		padding-right: ${include.sp['4']};
		padding-left: ${include.sp['4']};
	`}

  ${include.media['xl']`
		padding-right: ${include.sp['6']};
		padding-left: ${include.sp['6']};
	`}

	${include.media['xxl']`
		padding-right: ${include.sp['8']};
		padding-left: ${include.sp['8']};
	`}

	a {
    text-decoration: none;
    ilin-height: 0;
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Logo = styled.div`
  ${include.fontSizing('14px', '28px', 500)}
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${include.colors.slate900};
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  grid-gap: ${include.sp['5']};
`
export const NavItem = styled.span`
  cursor: pointer;
  ${include.fontSizing('12px', '20px', 500)}
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${include.colors.slate700};

  ${(props: NavItemProps) =>
    props.active &&
    `
        color: ${include.colors.blue600};
    `};
`
