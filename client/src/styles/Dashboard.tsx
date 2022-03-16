import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'

export const UList = styled.ul`
  margin-top: ${style.sp[3]};

  ul,
  ol {
    margin-top: unset;
    margin-left: ${style.sp[4]};
  }
  p {
    ${style.fontSizing('16px', '24px')}
  }
`

export const OList = styled.ul`
  ul,
  ol {
    margin-left: ${style.sp[4]};
  }
`

type CellProps = {
  colWidth?: string
}
export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  grid-column: ${(props: CellProps) => (props.colWidth ? props.colWidth : 1)};
`
export const UserImage = styled.div`
  display: flex;
  overflow: hidden;
  ${style.radius.circle};
  margin-right: ${style.sp[2]};

  img {
    display: flex;
  }
`

type PanelProps = {
  transparent?: boolean
  theme?: any
}

export const Panel = styled.div`
  background-color: ${(props: PanelProps) =>
    !props.transparent ? props.theme.colors.panel[0] : 'transparent'};
  ${style.radius.xl}
`

export const Grid = styled.div`
  ${style.grid()}
`
