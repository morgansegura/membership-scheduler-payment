import styled from 'styled-components'

export const StyledAppBar = styled.div`
	display: flex;
	padding: ${props => props.theme.spacing[5]} ${props => props.theme.spacing[7]};
	border-radius: ${props => props.theme.shape.borderRadius[16]};
	background-color: ${props => props.theme.palette.primary.main};
`
