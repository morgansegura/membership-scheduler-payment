import styled from 'styled-components'
import * as style from 'styles/config/utilities'

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const CardContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${style.sp[4]};
  background-color: ${props => props.theme.colors.panel[5]};
  padding: ${style.sp[4]} ${style.sp[5]};
  ${style.radius.xl}
`

export const Cell = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`
