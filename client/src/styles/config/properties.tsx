import { css } from 'styled-components'
import * as style from 'styles/config/utilities'

const border = (props: any) => style.mediaQueries(props, props.border, 'border', 'solid')

// const borderBottom = (props: any) =>
//   style.mapMediaQueries(props, props.borderBottom, 'border-bottom', 'solid')

// const borderLeft = (props: any) =>
//   style.mapMediaQueries(props, props.borderLeft, 'border-left', 'solid')

// const borderBottomColor = (props: any) =>
//   style.mapMediaQueries(
//     props,
//     style.filterColorPallette(props, props.borderBottomColor),
//     'border-bottom-color',
//   )
// const borderColor = (props: any) =>
//   style.mapMediaQueries(props, style.filterColorPallette(props, props.borderColor), 'border-color')

// const borderLeftColor = (props: any) =>
//   style.mapMediaQueries(
//     props,
//     style.filterColorPallette(props, props.borderLeftColor),
//     'border-left-color',
//   )
// const borderRadius = (props: any) =>
//   props.borderRadius &&
//   typeof props.borderRadius === 'string' &&
//   !style.filterObject(style.radius, props.borderRadius)
//     ? css`
//         border-radius: ${props.borderRadius};
//       `
//     : props.borderRadius && style.filterObject(style.radius, props.borderRadius)
//     ? css`
//         border-radius: ${style.filterObject(style.radius, props.borderRadius)};
//       `
//     : typeof props.borderRadius === 'number'
//     ? css`
//         border-radius: ${props.borderRadius}px;
//       `
//     : ``

// const borderRight = (props: any) =>
//   style.mapMediaQueries(props, props.borderRight, 'border-right', 'solid')

// const borderRightColor = (props: any) =>
//   style.mapMediaQueries(
//     props,
//     style.filterColorPallette(props, props.borderRightColor),
//     'border-right-color',
//   )

// const borderTop = (props: any) => style.mapMediaQueries(props, props.border, 'border-top', 'solid')

// const borderTopColor = (props: any) =>
//   style.mapMediaQueries(
//     props,
//     style.filterColorPallette(props, props.borderTopColor),
//     'border-top-color',
//   )
// const boxShadow = (props: any) =>
//   style.mapMediaQueries(props, props.theme.shadows[props.boxShadow], 'box-shadow')

// const displayPrint = (props: any) =>
//   props.displayPrint && props.displayPrint === 'block'
//     ? css`
//         @media only screen {
//           display: block;
//         }
//       `
//     : props.displayPrint && props.displayPrint === 'none'
//     ? css`
//         @media only screen {
//           display: none;
//         }
//       `
//     : ``

// const displayRaw = (props: any) => style.mapMediaQueries(props, props.displayRaw, 'display')
// const alignContent = (props: any) =>
//   style.mapMediaQueries(props, props.alignContent, 'align-content')
// const alignItems = (props: any) => style.mapMediaQueries(props, props.alignItems, 'align-items')
// const alignSelf = (props: any) => style.mapMediaQueries(props, props.alignSelf, 'align-self')
// const flex = (props: any) => style.mapMediaQueries(props, props.flex, 'flex')
// const flexDirection = (props: any) =>
//   style.mapMediaQueries(props, props.flexDirection, 'flex-direction')
// const flexGrow = (props: any) => style.mapMediaQueries(props, props.flexGrow, 'flex-grow')
// const flexShrink = (props: any) => style.mapMediaQueries(props, props.flexShrink, 'flex-shrink')
// const flexWrap = (props: any) => style.mapMediaQueries(props, props.flexWrap, 'flex-wrap')
// const justifyContent = (props: any) =>
//   style.mapMediaQueries(props, props.justifyContent, 'justify-content')
// const order = (props: any) => style.mapMediaQueries(props, props.order, 'order')
// const gap = (props: any) => style.mapMediaQueries(props, props.gap, 'gap')
// const columnGap = (props: any) => style.mapMediaQueries(props, props.columnGap, 'column-gap')
// const rowGap = (props: any) => style.mapMediaQueries(props, props.rowGap, 'row-gap')
// const gridColumn = (props: any) => style.mapMediaQueries(props, props.gridColumn, 'grid-column')
// const gridRow = (props: any) => style.mapMediaQueries(props, props.gridRow, 'grid-row')
// const gridAutoFlow = (props: any) =>
//   style.mapMediaQueries(props, props.gridAutoFlow, 'grid-auto-flow')
// const gridAutoColumns = (props: any) =>
//   style.mapMediaQueries(props, props.gridAutoColumns, 'grid-auto-columns')
// const gridAutoRows = (props: any) =>
//   style.mapMediaQueries(props, props.gridAutoRows, 'grid-auto-rows')
// const gridTemplateColumns = (props: any) =>
//   style.mapMediaQueries(props, props.gridTemplateColumns, 'grid-template-columns')
// const gridTemplateRows = (props: any) =>
//   style.mapMediaQueries(props, props.gridTemplateRows, 'grid-template-rows')
// const gridTemplateAreas = (props: any) =>
//   style.mapMediaQueries(props, props.gridTemplateAreas, 'grid-template-areas')
// const gridArea = (props: any) => style.mapMediaQueries(props, props.gridArea, 'grid-area')
// const bgColor = (props: any) =>
//   style.mapMediaQueries(props, style.filterColorPallette(props, props.bgColor), 'background-color')
// const color = (props: any) =>
//   style.mapMediaQueries(props, style.filterColorPallette(props, props.color), 'color')
// const top = (props: any) => style.mapMediaQueries(props, props.top, 'top')
// const right = (props: any) => style.mapMediaQueries(props, props.right, 'right')
// const bottom = (props: any) => style.mapMediaQueries(props, props.bottom, 'bottom')
// const left = (props: any) => style.mapMediaQueries(props, props.left, 'left')
// const position = (props: any) => style.mapMediaQueries(props, props.position, 'position')
// const zIndex = (props: any) => style.mapMediaQueries(props, props.zIndex, 'z-index')
// const height = (props: any) => style.mapMediaQueries(props, props.height, 'height')
// const maxHeight = (props: any) => style.mapMediaQueries(props, props.maxHeight, 'max-height')
// const minHeight = (props: any) => style.mapMediaQueries(props, props.minHeight, 'min-height')
// const width = (props: any) => style.mapMediaQueries(props, props.width, 'width')
// const maxWidth = (props: any) => style.mapMediaQueries(props, props.maxWidth, 'max-height')
// const minWidth = (props: any) => style.mapMediaQueries(props, props.minWidth, 'min-width')
// const boxSizing = (props: any) => style.mapMediaQueries(props, props.boxSizing, 'box-sizing')

export {
  border,
  // borderBottom,
  // borderBottomColor,
  // borderColor,
  // borderLeft,
  // borderLeftColor,
  // borderRadius,
  // borderRight,
  // borderRightColor,
  // borderTop,
  // borderTopColor,
  // boxShadow,
  // displayPrint,
  // displayRaw,
  // alignContent,
  // alignItems,
  // alignSelf,
  // flex,
  // flexDirection,
  // flexGrow,
  // flexShrink,
  // flexWrap,
  // justifyContent,
  // order,
  // gap,
  // columnGap,
  // rowGap,
  // gridColumn,
  // gridRow,
  // gridAutoFlow,
  // gridAutoColumns,
  // gridAutoRows,
  // gridTemplateColumns,
  // gridTemplateRows,
  // gridTemplateAreas,
  // gridArea,
  // bgColor,
  // color,
  // bottom,
  // left,
  // position,
  // right,
  // top,
  // zIndex,
  // height,
  // maxHeight,
  // minHeight,
  // maxWidth,
  // minWidth,
  // width,
  // boxSizing,
  // m,
  // mb,
  // ml,
  // mr,
  // mt,
  // mx,
  // my,
  // marginInline,
  // marginInlineStart,
  // marginInlineEnd,
  // marginBlock,
  // marginBlockStart,
  // marginBlockEnd,
  // p,
  // pb,
  // pl,
  // pr,
  // pt,
  // px,
  // py,
  // paddingInline,
  // paddingInlineStart,
  // paddingInlineEnd,
  // paddingBlock,
  // paddingBlockStart,
  // paddingBlockEnd,
  // typography,
  // fontFamily,
  // fontSize,
  // fontStyle,
  // fontWeight,
  // letterSpacing,
  // lineHeight,
  // textAlign,
}

export const properties = {}
