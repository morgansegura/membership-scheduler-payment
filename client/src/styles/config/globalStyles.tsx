import 'normalize.css'
import { css } from 'styled-components'
import * as style from 'styles/config/utilities'

const nprogress = css`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${props => props.theme.colors.primary};

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${props => props.theme.colors.primary},
      0 0 5px ${props => props.theme.colors.primary};
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: none;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: ${props => props.theme.colors.primary};
    border-left-color: ${props => props.theme.colors.primary};
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

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

  ${nprogress}
`
