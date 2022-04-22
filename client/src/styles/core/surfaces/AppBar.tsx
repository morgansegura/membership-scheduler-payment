import styled from 'styled-components'
import { Theme } from 'styles/config/interfaces/Theme'
import { Spacing } from 'styles/config/interfaces/Spacing'
import { Colors } from 'styles/config/interfaces/Colors'

export type StyedAppBarProps = {
	color: Colors
	theme: Theme
	size: Spacing
	radius: number
}

export const StyledAppBar = styled.div`
	/* [Quick Styling] */
	display: flex;
	padding: ${(props: Theme) => props.theme.spacing[5]} ${props => props.theme.spacing[7]};
	border-radius: ${(props: Theme) => props.theme.shape.borderRadius[16]};
	background-color: ${(props: Theme) => props.theme.palette.primary.main};

	/* [Custom Styling] */
	&.AppBar-root {
	}
`
