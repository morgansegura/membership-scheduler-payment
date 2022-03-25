import styled from 'styled-components'
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

export const SuperLabel = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.0345em;
  ${style.fontSizing('12px', '20px', 700)};
  /* color: ${props => props.theme.colors.panel[40]}; */
`

export const Label = styled.div`
  letter-spacing: 0.0345em;
  ${style.fontSizing('20px', '20px', 900)};
`
