import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'

type MenuTileProps = {
  open?: boolean
}

export const Tile = styled.div`
  /* background-color: ${props => props.theme.colors.panel[40]};
  border: 1px solid ${props => props.theme.header.bgcolor}; */
  height: 4px;
  width: 20px;
  ${style.radius.sm};

  &:nth-child(1) {
    transform: translateY(0) rotate(0);
  }
  &:nth-child(2) {
    transform: rotate(0deg);
  }
  &:nth-child(3) {
    transform: translateY(0) rotate(0);
  }
  transition: transform 0.1s ease-out;
`
export const MenuTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0;
  height: 25px;
  width: 25px;

  ${(props: MenuTileProps) =>
    props.open === true
      ? css`
          ${Tile} {
            width: 20px;
            height: 3px;
            &:nth-child(1) {
              transform: translateY(4px) rotate(0);
            }
            &:nth-child(2) {
              transform: translateY(0) rotate(0);
              opacity: 0;
            }
            &:nth-child(3) {
              transform: translateY(-6px) rotate(0);
            }
            border-color: transparent;
          }
        `
      : ``}
`
