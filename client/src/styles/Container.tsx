import styled from 'styled-components'
import * as include from 'styles/config/utilities'

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;
	padding-top: ${props => props.theme.spacing[2]};
`
export const Main = styled.main`
	position: relative;
	flex: 1 0 auto;
	padding-top: ${props => props.theme.spacing[4]};
`
export const Container = styled.div`
	position: relative;
	${include.container['xxl']}
`
export const Content = styled.div`
	position: relative;
	${include.container['xl']}
`
