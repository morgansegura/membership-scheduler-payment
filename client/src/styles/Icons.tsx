import styled from 'styled-components'
import * as style from 'styles/config/utilities'

export const MenuTile = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-12px, -50%);
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 20px;
`
export const Tile = styled.div`
  background-color: ${props => props.theme.button.bgcolorForm};
  height: 4px;
  ${style.radius.sm};
`
