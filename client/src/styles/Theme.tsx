import { rgba, darken } from 'polished'
import * as style from 'styles/config/utilities'

export const themeDark = {
    form: style.colors.slate900,
    formText: style.colors.slate300,
    input: style.colors.slate800,
    inputFocus: style.colors.cyan900,
    inputError: style.colors.slate900,
    inputBorder: rgba(style.colors.white, 0.2),
    inputBorderFocus: style.colors.cyan300,
    inputBorderError: style.colors.rose500,
    inputText: style.colors.slate100,
    inputTextFocus: style.colors.cyan300,
    inputTextError: style.colors.rose300,
}

export const themeLight = {
    form: style.colors.white,
    formText: style.colors.slate800,
    input: rgba(style.colors.slate100, 0.5),
    inputFocus: rgba(style.colors.cyan100, 0.2),
    inputError: rgba(style.colors.pink100, 0.2),
    inputBorder: rgba(style.colors.black, 0.2),
    inputBorderFocus: rgba(style.colors.black, 0.2),
    inputBorderError: style.colors.pink200,
    inputText: style.colors.slate500,
    inputTextFocus: style.colors.slate500,
    inputTextError: style.colors.pink500,
}
