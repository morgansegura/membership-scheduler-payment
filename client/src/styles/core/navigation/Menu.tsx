import styled from 'styled-components'

export const Menu = styled.div``

export const StyledMenuItem = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
  gap: ${props => props.theme.spacing[4]}
	padding: 10px;
`

export const StyledMenuIcon = styled.div`
	display: flex;
`
