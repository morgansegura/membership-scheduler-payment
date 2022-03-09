import styled, { css } from 'styled-components'
import * as include from 'styles/config/utilities'
import { readableColor, rgba } from 'polished'

interface MenuProps {
	isVisible: boolean
}
interface AvatarProps {
	focus: boolean
}
interface ThemeProps {
	theme: string
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
	top: ${include.sp[10]};
	right: ${include.sp[8]};
	display: flex;
	flex-direction: column;
	${include.shadow.lg}
	${include.radius.lg}
	background-color: ${include.colors.white};
	transform-origin: 0 100%;
	min-width: 200px;
	padding-top: ${include.sp['1.5']};
	padding-bottom: ${include.sp['1.5']};
	border-top: 2px solid ${include.colors.slate50};
	color: ${include.colors.slate800};
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
	padding-top: ${include.sp[1]};
	padding-right: ${include.sp[3]};
	padding-bottom: ${include.sp[1]};
	padding-left: ${include.sp[3]};
	color: ${include.colors.slate800};
	${include.fontSizing('14px', '28px')}
	font-weight: 400;
	cursor: pointer;
	border-top: 1px solid transparent;
	border-bottom: 1px solid transparent;
	transition: background-color 0.3s ease-out;

	&:not(:first-of-type) {
		border-top: 1px solid ${include.colors.slate50};
	}

	&:hover {
		background-color: ${include.colors.slate200};
	}

	&:active {
	}
`

export const Avatar = styled.div`
	user-select: none;
	${include.radius.circle};
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${include.colors.violet700};
	color: ${readableColor(include.colors.violet700)};
	${include.fontSizing('20px', '40px')}
	font-weight: 900;
	overflow: hidden;
	transition: outline 0.3s ease-out;

	${(props: AvatarProps) =>
		props.focus
			? css`
					outline: 2px solid ${rgba(include.colors.violet900, 0.4)};
			  `
			: css`
					outline: 2px solid transparent;
			  `}
`

export const Tab = styled.div`
	display: flex;
	align-items: center;
	padding: ${include.sp[1.5]} ${include.sp[4]};
	${include.fontSizing('13px', '26px')}
	text-transform: uppercase;
	font-weight: 500;
	/* background-color: ${include.colors.slate100}; */
	border-bottom: 1px solid ${include.colors.slate100};
`

export const Badge = styled.strong`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 10px;
	height: 10px;
	padding: ${include.sp[1.5]};
	${include.fontSizing('12px', '24px')}
	font-weight: 900;
	${include.radius.circle}

	${(props: ThemeProps) =>
		props.theme === 'success'
			? css`
					color: ${include.colors.red50};
					background-color: ${include.colors.red800};
			  `
			: props.theme === 'warning'
			? css`
					color: ${include.colors.red50};
					background-color: ${include.colors.red800};
			  `
			: props.theme === 'danger'
			? css`
					color: ${include.colors.red50};
					background-color: ${include.colors.red800};
			  `
			: css`
					color: ${include.colors.slate900};
					background-color: ${include.colors.slate200};
			  `}
`
