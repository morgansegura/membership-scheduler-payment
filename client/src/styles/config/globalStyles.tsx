import { css } from 'styled-components'
import * as style from 'styles/config/utilities'
import 'normalize.css'

export const GlobalStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: ${style.sp['4']};
    background-color: ${props => props.theme.body.bgcolor};
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.body.text};
  }

  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    font-family: ${style.font.family.sans};
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    padding: 0;
    margin: 0;
  }

  h1 {
    ${style.h1};
  }

  h2 {
    ${style.h2};
  }

  h3 {
    ${style.h3};
  }

  h4 {
    ${style.h4};
  }

  h5 {
    ${style.h5};
  }

  label {
    ${style.label};
  }

  img {
    width: 100%;
  }

  input,
  select {
    /* all: unset !important; */
    &:-internal-autofill-selected {
      /* appearance: none !important;
      background-color: transparent !important;
      background-image: none !important;
      color: transparent !important; */
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  a {
    text-decoration: none;
  }

  :root {
    --grid-gutter: ${style.sp['2']};

    ${style.media.md`
			--grid-gutter: ${style.sp['3']};
		`}

    ${style.media.xl`
			--grid-gutter: ${style.sp['4']};
		`}

		${style.media.xxl`
			--grid-gutter: ${style.sp['4']};
		`}

		${style.above(style.contain['offset'])`
			--grid-gutter: ${style.sp['4']};
		`}
  }
`
