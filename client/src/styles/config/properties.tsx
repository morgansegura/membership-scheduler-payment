import { css } from 'styled-components'
import * as style from 'styles/config/utilities'

type PropertyTypes = {
	border?: string | number | object
	borderTop?: string | number | object
	borderRight?: string | number | object
	borderBottom?: string | number | object
	borderLeft?: string | number | object
	borderColor?: string | object
	borderRadius?: string | object
	boxShadow?: any
}

// [Border Options]
const border = (props: PropertyTypes) =>
	props.border ? style.mediaQueries(props, props.border, 'border', 'border') : ``

const borderTop = (props: PropertyTypes) =>
	props.borderTop ? style.mediaQueries(props, props.borderTop, 'border-top', 'solid') : ``

const borderRight = (props: PropertyTypes) =>
	props.borderRight ? style.mediaQueries(props, props.borderRight, 'border-right', 'border') : ``

const borderBottom = (props: PropertyTypes) =>
	props.borderBottom ? style.mediaQueries(props, props.borderBottom, 'border-bottom', 'border') : ``

const borderLeft = (props: PropertyTypes) =>
	props.borderLeft ? style.mediaQueries(props, props.borderLeft, 'border-left', 'border') : ``

const borderColor = (props: PropertyTypes) =>
	props.borderColor ? style.mediaQueries(props, props.borderColor, 'border-color', 'color') : ``

const borderRadius = (props: PropertyTypes) =>
	props.borderRadius ? style.mediaQueries(props, props.borderRadius, 'border-radius', 'radius') : ``

const boxShadow = (props: any) =>
	props.boxShadow ? style.mediaQueries(props, props.boxShadow, 'box-shadow', 'shadow') : ``

const displayPrint = (props: any) =>
	props.displayPrint && props.displayPrint === 'block'
		? css`
				@media only screen {
					display: block;
				}
		  `
		: props.displayPrint && props.displayPrint === 'none'
		? css`
				@media only screen {
					display: none;
				}
		  `
		: ``

const displayRaw = (props: any) =>
	props.displayRaw ? style.mediaQueries(props, props.displayRaw, 'display') : ``
// const alignContent = (props: any) =>
//   style.mediaQueries(props, props.alignContent, 'align-content')
// const alignItems = (props: any) => style.mediaQueries(props, props.alignItems, 'align-items')
// const alignSelf = (props: any) => style.mediaQueries(props, props.alignSelf, 'align-self')
// const flex = (props: any) => style.mediaQueries(props, props.flex, 'flex')
// const flexDirection = (props: any) =>
//   style.mediaQueries(props, props.flexDirection, 'flex-direction')
// const flexGrow = (props: any) => style.mediaQueries(props, props.flexGrow, 'flex-grow')
// const flexShrink = (props: any) => style.mediaQueries(props, props.flexShrink, 'flex-shrink')
// const flexWrap = (props: any) => style.mediaQueries(props, props.flexWrap, 'flex-wrap')
// const justifyContent = (props: any) =>
//   style.mediaQueries(props, props.justifyContent, 'justify-content')
// const order = (props: any) => style.mediaQueries(props, props.order, 'order')
// const gap = (props: any) => style.mediaQueries(props, props.gap, 'gap')
// const columnGap = (props: any) => style.mediaQueries(props, props.columnGap, 'column-gap')
// const rowGap = (props: any) => style.mediaQueries(props, props.rowGap, 'row-gap')
// const gridColumn = (props: any) => style.mediaQueries(props, props.gridColumn, 'grid-column')
// const gridRow = (props: any) => style.mediaQueries(props, props.gridRow, 'grid-row')
// const gridAutoFlow = (props: any) =>
//   style.mediaQueries(props, props.gridAutoFlow, 'grid-auto-flow')
// const gridAutoColumns = (props: any) =>
//   style.mediaQueries(props, props.gridAutoColumns, 'grid-auto-columns')
// const gridAutoRows = (props: any) =>
//   style.mediaQueries(props, props.gridAutoRows, 'grid-auto-rows')
// const gridTemplateColumns = (props: any) =>
//   style.mediaQueries(props, props.gridTemplateColumns, 'grid-template-columns')
// const gridTemplateRows = (props: any) =>
//   style.mediaQueries(props, props.gridTemplateRows, 'grid-template-rows')
// const gridTemplateAreas = (props: any) =>
//   style.mediaQueries(props, props.gridTemplateAreas, 'grid-template-areas')
// const gridArea = (props: any) => style.mediaQueries(props, props.gridArea, 'grid-area')
// const bgColor = (props: any) =>
//   style.mediaQueries(props, style.filterColorPallette(props, props.bgColor), 'background-color')
// const color = (props: any) =>
//   style.mediaQueries(props, style.filterColorPallette(props, props.color), 'color')
// const top = (props: any) => style.mediaQueries(props, props.top, 'top')
// const right = (props: any) => style.mediaQueries(props, props.right, 'right')
// const bottom = (props: any) => style.mediaQueries(props, props.bottom, 'bottom')
// const left = (props: any) => style.mediaQueries(props, props.left, 'left')
// const position = (props: any) => style.mediaQueries(props, props.position, 'position')
// const zIndex = (props: any) => style.mediaQueries(props, props.zIndex, 'z-index')
// const height = (props: any) => style.mediaQueries(props, props.height, 'height')
// const maxHeight = (props: any) => style.mediaQueries(props, props.maxHeight, 'max-height')
// const minHeight = (props: any) => style.mediaQueries(props, props.minHeight, 'min-height')
// const width = (props: any) => style.mediaQueries(props, props.width, 'width')
// const maxWidth = (props: any) => style.mediaQueries(props, props.maxWidth, 'max-height')
// const minWidth = (props: any) => style.mediaQueries(props, props.minWidth, 'min-width')
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const mt = (props: any) => props.mt ? style.mediaQueries(props, props.mt, 'margin-top') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `
// const m = (props: any) => props.m ? style.mediaQueries(props, props.m, 'margin') : `

export {
	border,
	borderTop,
	borderRight,
	borderBottom,
	borderLeft,
	borderColor,
	borderRadius,
	boxShadow,
	displayPrint,
	displayRaw,
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
