import styled from 'styled-components'
import * as style from 'styles/config/utilities'

interface NavItemProps {
	active?: boolean
	theme?: any
}

export const Header = styled.div`
	position: relative;
	z-index: 2;
	/* background-color: ${props => props.theme.header.bgcolor}; */
	margin-top: ${style.sp['4']};
	margin-bottom: ${style.sp['2.5']};
	${style.radius['md']};
	padding: 0 ${style.sp['6']};
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;

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

		&:hover {
			/* color: ${props => props.theme.button.bgcolorForm}; */
		}
	}
`
export const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1 0 auto;
`
export const Logo = styled.div`
	${style.fontSizing('14px', '28px', 700)}
	letter-spacing: 0.0523em;
	text-transform: uppercase;
	color: ${props => props.theme.palette.text.primary};
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
        /* color: ${props.theme.button.bgcolorForm}; */
    `};
`
