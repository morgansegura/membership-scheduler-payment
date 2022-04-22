import styled, { css } from 'styled-components'

export const Slide = styled.div`
	${props =>
		props.direction && props.direction === 'up'
			? css`
					background: blue;
			  `
			: css``}
`
