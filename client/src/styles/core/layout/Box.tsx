import styled from 'styled-components'
import * as style from 'styles/config/utilities'
import * as property from 'styles/config/properties'

export const Box = styled(props => props.as)`
	${property.border};
	${property.borderTop};
	${property.borderRight};
	${property.borderBottom};
	${property.borderLeft};
	${property.borderColor};
	${property.borderRadius};
	${property.boxShadow};
	${property.displayPrint};
	${property.displayRaw};
	/*
  ${property.alignContent};
  ${property.alignItems};
  ${property.alignSelf};
  ${property.flex};
  ${property.flexDirection};
  ${property.flexGrow};
  ${property.flexShrink};
  ${property.flexWrap};
  ${property.justifyContent};
  ${property.order};
  ${property.gap};
  ${property.columnGap};
  ${property.rowGap};
  ${property.gridColumn};
  ${property.gridRow};
  ${property.gridAutoFlow};
  ${property.gridAutoRows};
  ${property.gridTemplateColumns};
  ${property.gridTemplateRows};
  ${property.gridTemplateAreas};
  ${property.gridArea};
  ${property.bgColor};
  ${property.color}; */
	/* */
	/*
  ${property.bottom};
  ${property.left};
  ${property.position};
  ${property.right};
  ${property.top};
  ${property.zIndex};
  ${property.height};
  ${property.maxHeight};
  ${property.minHeight};
  ${property.maxWidth};
  ${property.minWidth};
  ${property.width};
  ${property.boxSizing};
  ${property.m};
  ${property.mb};
  ${property.ml};
  ${property.mr};
  ${property.mt};
  ${property.mx};
  ${property.my};
  ${property.marginInline};
  ${property.marginInlineStart};
  ${property.marginInlineEnd};
  ${property.marginBlock};
  ${property.marginBlockStart};
  ${property.marginBlockEnd};
  ${property.p};
  ${property.pb};
  ${property.pl};
  ${property.pr};
  ${property.pt};
  ${property.px};
  ${property.py};
  ${property.paddingInline};
  ${property.paddingInlineStart};
  ${property.paddingInlineEnd};
  ${property.paddingBlock};
  ${property.paddingBlockStart};
  ${property.paddingBlockEnd};
  ${property.typography};
  ${property.fontFamily};
  ${property.fontSize};
  ${property.fontStyle};
  ${property.fontWeight};
  ${property.letterSpacing};
  ${property.lineHeight};
  ${property.textAlign};

  */
`
