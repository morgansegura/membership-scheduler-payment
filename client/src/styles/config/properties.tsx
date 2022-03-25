import { create } from 'domain'
import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'

type BorderType = {
  border: number
}
const border = `
  ${(props: BorderType) =>
    props.border &&
    css`
      border: ${border}px solid;
    `};
`
type BorderBottomType = {
  borderBottom: number
}
const borderBottom = `
  ${(props: BorderBottomType) =>
    props.borderBottom &&
    css`
      border-bottom: ${borderBottom}px solid;
    `};
`
type BorderColorType = {
  borderColor: string
}
const borderColor = `
  ${(props: BorderColorType) =>
    props.borderColor &&
    css`
      border-color: ${borderColor};
    `};
`
type BorderLeftType = {
  borderLeft: string
}
const borderLeft = `
  ${(props: BorderLeftType) =>
    props.borderLeft &&
    css`
      border-left: ${borderLeft};
    `};
`

export { border, borderBottom, borderColor, borderLeft, borderRadius }
