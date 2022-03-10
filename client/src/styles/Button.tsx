import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'
import { darken, lighten, readableColor } from 'polished'

export const Button = styled(props => props.as)`
  position: relative;
  z-index: 1;
  word-break: break-word;
  max-width: 100%;
  cursor: pointer;
  align-items: center;
  letter-spacing: 0.03857em;
  /* letter-spacing: -0.006em; */
  text-transform: uppercase;
  border: 1px solid transparent;
  transition: border-color 0.3s ease-out, color 0.3s ease-out, background-color 0.3s ease-out;

  &:hover {
  }
  &:active {
  }

  /* [Radius] */
  ${props =>
    props.radius === 'base'
      ? css`
          ${style.radius.base}
        `
      : props.radius === 'sm'
      ? css`
          ${style.radius.sm}
        `
      : props.radius === 'md'
      ? css`
          ${style.radius.md}
        `
      : props.radius === 'lg'
      ? css`
          ${style.radius.lg}
        `
      : props.radius === 'xl'
      ? css`
          ${style.radius.xl}
        `
      : props.radisu === '2xl'
      ? css`
          ${style.radius['2xl']}
        `
      : props.radius === '3xl'
      ? css`
          ${style.radius['3xl']}
        `
      : props.radius === 'circle'
      ? css`
          ${style.radius.circle}
        `
      : css`
          ${style.radius['none']}
        `}

  ${props =>
    props.inline
      ? css`
          display: inline-flex;
        `
      : css`
          display: flex;
        `}

	/* [Size] */

	${props =>
    props.size === 'xs'
      ? css`
          ${style.fontSizing('14px', '20px', 500)};
          padding: ${style.sp['2.5']} ${style.sp['3']};
        `
      : props.size === 'sm'
      ? css`
          ${style.fontSizing('16px', '20px', 500)};
          padding: ${style.sp['2.5']} ${style.sp['3']};
        `
      : props.size === 'md'
      ? css`
          ${style.fontSizing('17px', '20px', 500)};
          padding: ${style.sp['2.5']} ${style.sp['3']};
        `
      : props.size === 'lg'
      ? css`
          ${style.fontSizing('22px', '20px', 500)};
          padding: ${style.sp['2.5']} ${style.sp['3']};
        `
      : props.size === 'xl'
      ? css`
          ${style.fontSizing('26px', '20px', 500)};
          padding: ${style.sp['2.5']} ${style.sp['3']};
        `
      : css`
          ${style.fontSizing('13px', '26px', 600)};
          padding: ${style.sp['2.5']} ${style.sp['3']};
        `}


	/* [Color] */
    ${props =>
    props.themed === 'form'
      ? css`
          background-color: ${props.theme.button.bgcolorForm};
          color: ${readableColor(
            props.theme.button.bgcolorForm,
            style.colors.slate900,
            style.colors.slate100,
          )};

          &:hover {
            background-color: ${darken(0.15, props.theme.button.bgcolorForm)};
            color: ${readableColor(
              darken(0.15, props.theme.button.bgcolorForm),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
          &:active {
            background-color: ${darken(0.25, props.theme.button.bgcolorForm)};
            color: ${readableColor(
              darken(0.25, props.theme.button.bgcolorForm),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
          &:disabled {
            background-color: ${darken(0.25, props.theme.button.bgcolorForm)};
            color: ${readableColor(
              darken(0.25, props.theme.button.bgcolorForm),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
        `
      : props.themed === 'primary'
      ? css`
          background-color: ${props.theme.button.bgcolorPrimary};
          color: ${readableColor(
            props.theme.button.bgcolorPrimary,
            style.colors.slate900,
            style.colors.slate100,
          )};

          &:hover {
            background-color: ${lighten(0.05, props.theme.button.bgcolorPrimary)};
            color: ${readableColor(
              lighten(0.15, props.theme.button.bgcolorPrimary),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
          &:active {
            background-color: ${darken(0.25, props.theme.button.bgcolorPrimary)};
            color: ${readableColor(
              darken(0.25, props.theme.button.bgcolorPrimary),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
          &:disabled {
            background-color: ${darken(0.25, props.theme.button.bgcolorPrimary)};
            color: ${readableColor(
              darken(0.25, props.theme.button.bgcolorPrimary),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
        `
      : props.themed === 'secondary'
      ? css`
          background-color: ${props.theme.button.bgcolorSecondary};
          color: ${readableColor(
            props.theme.button.bgcolorSecondary,
            style.colors.slate900,
            style.colors.slate100,
          )};

          &:hover {
            background-color: ${darken(0.15, props.theme.button.bgcolorSecondary)};
            color: ${readableColor(
              darken(0.15, props.theme.button.bgcolorSecondary),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
          &:active {
            background-color: ${darken(0.25, props.theme.button.bgcolorSecondary)};
            color: ${readableColor(
              darken(0.25, props.theme.button.bgcolorSecondary),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
          &:disabled {
            background-color: ${darken(0.25, props.theme.button.bgcolorSecondary)};
            color: ${readableColor(
              darken(0.25, props.theme.button.bgcolorSecondary),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
        `
      : css`
          background-color: ${props.theme.button.bgcolorDefault};
          color: ${readableColor(
            props.theme.button.bgcolorDefault,
            style.colors.slate900,
            style.colors.slate100,
          )};

          &:hover {
            background-color: ${darken(0.05, props.theme.button.bgcolorDefault)};
            color: ${readableColor(
              darken(0.05, props.theme.button.bgcolorDefault),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
          &:active {
            background-color: ${darken(0.25, props.theme.button.bgcolorDefault)};
            color: ${readableColor(
              darken(0.25, props.theme.button.bgcolorDefault),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
          &:disabled {
            background-color: ${darken(0.25, props.theme.button.bgcolorDefault)};
            color: ${readableColor(
              darken(0.25, props.theme.button.bgcolorDefault),
              style.colors.slate900,
              style.colors.slate100,
            )};
          }
        `}

	${({ loading }) =>
    loading === true &&
    css`
      pointer-events: none;
    `}

	${({ disabled }) =>
    disabled === true &&
    css`
      pointer-events: none;
      background-color: ${style.colors.slate100};
      border: 1px solid transparent;
      color: ${style.colors.slate900};
    `}

	${({ outline }) =>
    outline
      ? css`
          background-color: transparent;
        `
      : css``}

	${({ important }) =>
    important
      ? css`
          text-transform: uppercase;
          letter-spacing: 0.02857em;
        `
      : css``}
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${style.sp['1.5']};
`
