import React from 'react'
import { Box as BoxStyle } from 'styles/core/layout/Box'

type BoxProps = {
  children?: React.ReactChild | React.ReactChild[]
  as?: any
  [properties: string]: any
}

const Box: React.FC<BoxProps> = ({ children, as = 'div', ...properties }) => {
  return (
    <BoxStyle as={as} {...properties}>
      {children}
    </BoxStyle>
  )
}

export default Box
