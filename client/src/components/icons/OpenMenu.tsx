import React from 'react'
import { MenuTile, Tile } from 'styles/Icons'

type Props = {}
const OpenMenu: React.FC<Props> = ({}) => {
  return (
    <MenuTile>
      <Tile />
      <Tile />
      <Tile />
    </MenuTile>
  )
}

export default OpenMenu
