import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'
import { rgba, rem, readableColor } from 'polished'

export const StyledButton = styled(props => props.as)`
	position: relative;
	z-index: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	-webkit-tap-highlight-color: transparent;
	outline: 0px;
	border: 0px;
	margin: 0px;
	cursor: pointer;
	user-select: none;
	vertical-align: middle;
	appearance: none;
	text-decoration: none;
	font-weight: 600;
	line-height: 1.75;
	letter-spacing: 0.02857em;
	border-radius: ${rem(4)};
	text-transform: uppercase;
	min-width: ${rem(64)};
	padding: 0;
	box-shadow: ${props => props.theme.shadows[1]};
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	&:hover {
		box-shadow: ${props => props.theme.shadows[4]};
	}
	/* [Size] */
	${props =>
		props.size && props.size === 'small'
			? css`
					font-size: 0.8125rem;
					& .ButtonInner-root {
						padding: 4px 10px;
					}
			  `
			: props.size && props.size === 'medium'
			? css`
					font-size: 0.875rem;
					& .ButtonInner-root {
						padding: 6px 16px;
					}
			  `
			: props.size && props.size === 'large'
			? css`
					font-size: 0.9375rem;
					& .ButtonInner-root {
						padding: 8px 22px;
					}
			  `
			: css`
					font-size: 0.875rem;
					& .ButtonInner-root {
						padding: 6px 16px;
					}
			  `};

	/* [Color] */
	${props =>
		props.color && props.color === 'primary'
			? css`
					background-color: ${props => props.theme.palette.primary.main};
					color: ${props =>
						readableColor(props.theme.palette.primary.main, '#fff', 'rgba(0, 0, 0, 0.87)')};
					&:hover,
					&:active {
						background-color: ${props => props.theme.palette.primary.dark};
						color: ${props =>
							readableColor(props.theme.palette.primary.dark, '#fff', 'rgba(0, 0, 0, 0.87)')};
					}
			  `
			: props.color && props.color === 'secondary'
			? css`
					background-color: ${props => props.theme.palette.secondary.main};
					color: ${props =>
						readableColor(
							props.theme.palette.secondary.contrastText,
							'#fff',
							'rgba(0, 0, 0, 0.87)',
						)};
					&:hover,
					&:active {
						background-color: ${props => props.theme.palette.secondary.dark};
						color: ${props =>
							readableColor(props.theme.palette.secondary.dark, '#fff', 'rgba(0, 0, 0, 0.87)')};
					}
			  `
			: props.color && props.color === 'error'
			? css`
					background-color: ${props => props.theme.palette.error.main};
					color: ${props =>
						readableColor(props.theme.palette.error.main, '#fff', 'rgba(0, 0, 0, 0.87)')};
					&:hover,
					&:active {
						background-color: ${props => props.theme.palette.error.dark};
						color: ${props =>
							readableColor(props.theme.palette.error.dark, '#fff', 'rgba(0, 0, 0, 0.87)')};
					}
			  `
			: props.color && props.color === 'success'
			? css`
					background-color: ${props => props.theme.palette.success.main};
					color: ${props =>
						readableColor(props.theme.palette.success.main, '#fff', 'rgba(0, 0, 0, 0.87)')};
					&:hover,
					&:active {
						background-color: ${props => props.theme.palette.success.dark};
						color: ${props =>
							readableColor(props.theme.palette.success.dark, '#fff', 'rgba(0, 0, 0, 0.87)')};
					}
			  `
			: props.color && props.color === 'info'
			? css`
					background-color: ${props => props.theme.palette.info.main};
					color: ${props =>
						readableColor(props.theme.palette.info.main, '#fff', 'rgba(0, 0, 0, 0.87)')};
					&:hover,
					&:active {
						background-color: ${props => props.theme.palette.info.dark};
						color: ${props =>
							readableColor(props.theme.palette.info.dark, '#fff', 'rgba(0, 0, 0, 0.87)')};
					}
			  `
			: ``};
	/* [Size] */
	${props =>
		props.variant && props.variant === 'small'
			? css`
					font-size: 0.8125rem;
					& .ButtonInner-root {
						padding: 4px 10px;
					}
			  `
			: props.variant && props.variant === 'medium'
			? css`
					font-size: 0.875rem;
					& .ButtonInner-root {
						padding: 6px 16px;
					}
			  `
			: props.variant && props.variant === 'large'
			? css`
					font-size: 0.9375rem;
					& .ButtonInner-root {
						padding: 8px 22px;
					}
			  `
			: ``};

	&:disabled {
		box-shadow: none;
		pointer-events: none;
		cursor: default;
		color: ${props => props.theme.palette.action.disabled};
		background-color: ${props => props.theme.palette.action.disabledBackground};
	}
`

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: ${style.sp['1.5']};
`
