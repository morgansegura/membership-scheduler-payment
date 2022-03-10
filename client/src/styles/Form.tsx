import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'
import { rgba } from 'polished'

interface TextFieldProps {
  focus?: boolean
  blur?: boolean
}

export const AuthForm = styled.form`
  position: relative;
  z-index: 1;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  max-width: ${style.contain.sm};
  margin: ${style.sp['10']} auto;
  padding-top: ${style.sp['10']};
  padding-bottom: ${style.sp['6']};
  padding-right: ${style.sp['16']};
  padding-left: ${style.sp['16']};
  gap: ${style.sp['5']};
  ${style.radius.xl};
  background-color: ${props => props.theme.form.bgcolor};
  border: ${props => props.theme.form.border};
  ${props => props.theme.form.radius};
  ${props => props.theme.form.boxshadow};

  button:nth-child(1) {
    flex: 1;
    justify-content: center;
    margin-top: ${style.sp['4.5']};
    margin-bottom: ${style.sp['4.5']};
    ${style.shadow.base};
  }
`
export const TextField = styled.div`
  position: relative;
  display: inline-flex;
  z-index: 1;
  align-items: center;
  ${style.radius.md};
  background-color: ${props => props.theme.input.bgcolor};
  border: ${props => props.theme.input.border};
  outline: 5px solid ${props => props.theme.input.outlineColor};
  transition: border 0.3s ease-out;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    ${style.fontSizing('14px', '14px')};
    margin-left: ${style.sp['4']};
    padding-left: ${style.sp['1']};
    padding-right: ${style.sp['1']};
    user-select: none;
    color: ${props => props.theme.input.label};
    transition: transform 0.2s ease-out;

    &:after {
      background-color: transparent;
    }
  }

  input {
    position: relative;
    overflow: hidden;
    z-index: 2;
    flex: 1;
    display: flex;
    padding: ${style.sp['4']} ${style.sp['6']};
    color: ${props => props.theme.form.label};
    ${style.radius.md};
    transition: outline-color 0.3s ease-out;
    background-color: transparent;
    border: none;
    outline: none;
  }

  ${(props: TextFieldProps) =>
    props.focus &&
    css`
      background-color: ${props => props.theme.input.bgcolorFocus};
      border: ${props => props.theme.input.borderFocus};

      input {
        color: ${props => props.theme.form.label};
      }

      div {
        z-index: 3;
        transform: translateY(-25px);
        ${style.fontSizing('12px', '12px')};
        color: ${props => props.theme.input.labelFocus};

        &:after {
          content: '';
          position: absolute;
          z-index: -1;
          top: 4px;
          left: 0;
          right: 0;
          background-color: ${props => props.theme.form.bgcolor};
          transform: translateY(-50%);
          height: 3px;
          ${style.radius.base}
        }
      }
    `}

  ${(props: TextFieldProps) =>
    props.blur &&
    css`
      background-color: ${props => props.theme.input.bgcolor};
      border: ${props => props.theme.input.border};

      input {
        color: ${props => props.theme.input.label};
      }

      div {
        ${style.fontSizing('14px', '14px')};
        z-index: -1;
        transform: translateY(0);
        color: ${props => props.theme.input.label};

        &:after {
          background-color: transparent;
        }
      }
    `}
`

export const FormTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${style.sp['3']};
  padding-bottom: ${style.sp['3']};
  color: ${props => props.theme.form.label};
`

export const ToggleForm = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${style.sp['3']};

  p {
    text-align: center;
    justify-self: center;
  }

  button {
    padding-top: ${style.sp['1']};
    padding-bottom: ${style.sp['1']};
    border: 1px solid ${rgba(style.colors.slate300, 0.5)};
    ${style.radius.base}/* ${style.shadow.md} */
  }
`

export const ErrorList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &.error {
    ${TextField} {
      background-color: ${props => props.theme.input.bgcolorError};
      border: ${props => props.theme.input.borderError};
    }

    input {
      color: ${props => props.theme.input.labelError};
    }

    div {
      color: ${props => props.theme.input.labelError};
    }
  }

  p {
    position: absolute;
    display: block;
    bottom: -2px;
    z-index: 4;
    padding: 0 3px;
    right: ${style.sp['4']};
    color: ${props => props.theme.input.labelError};
    ${style.fontSizing('12px', '12px')}

    &:first-letter {
      text-transform: uppercase;
    }

    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 70%;
      left: 0;
      right: 0;
      background-color: ${props => props.theme.form.bgcolor};
      transform: translateY(-50%);
      height: 2px;
    }
  }
`
