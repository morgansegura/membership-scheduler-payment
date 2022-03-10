import { rgba, darken } from 'polished'
import * as style from 'styles/config/utilities'

const dark = {
  body: {
    bgcolor: style.colors.slate800,
    text: style.colors.slate100,
  },
  header: {
    bgcolor: style.colors.slate700,
    text: style.colors.slate100,
  },
  form: {
    bgcolor: style.colors.slate900,
    label: style.colors.slate300,
    border: ``,
    maxWidth: style.contain.sm,
    margin: `${style.sp['6']} auto`,
    gap: `${style.sp['5']}`,
    radius: style.radius.xl,
    padding: `${style.sp['10']} ${style.sp['6']} ${style.sp['8']} ${style.sp['6']}`,
    boxshadow: `0 0 2px rgba(204, 208, 212,0.9),
    0 15px 25px rgba(0, 0, 0, 0.3),
    0 -2px 3px rgba(0, 0, 0, 0.1),
    0 -5px 10px rgba(255, 255, 255, 0.5),
    0 5px 10px rgba(0, 0, 0, 0.3),
    0 3px 4px rgba(255, 255, 255, 0.2),
    0 0 20px rgba(255, 255, 255, 0.45)`,
  },
  input: {
    bgcolor: style.colors.slate800,
    bgcolorFocus: style.colors.slate800,
    bgcolorError: style.colors.slate800,
    border: `1px solid ${rgba(style.colors.slate100, 0.1)}`,
    borderFocus: `1px solid ${style.colors.cyan300}`,
    borderError: `1px solid ${style.colors.rose500}`,
    label: style.colors.slate100,
    labelFocus: style.colors.cyan300,
    labelError: style.colors.rose300,
    outlineColor: style.colors.rose300,
  },
  button: {
    bgcolorForm: style.colors.violet500,
    bgcolorPrimary: style.colors.pink500,
    bgcolorSecondary: style.colors.blue500,
    bgcolorDefault: style.colors.slate300,
  },
}

const light = {
  body: {
    bgcolor: style.colors.slate200,
    label: style.colors.slate800,
  },
  header: {
    bgcolor: style.colors.slate800,
    text: style.colors.slate100,
  },
  form: {
    bgcolor: style.colors.white,
    label: style.colors.slate900,
    border: ``,
    boxshadow: `box-shadow: 0 0 2px ${rgba(style.colors.white, 0.9)},
    0 15px 25px ${rgba(style.colors.slate500, 0.3)},
    0 -2px 3px ${rgba(style.colors.slate300, 0.1)},
    0 -5px 10px ${rgba(style.colors.slate200, 0.5)},
    0 5px 10px ${rgba(style.colors.slate300, 0.3)},
    0 3px 4px ${rgba(style.colors.white, 0.9)},
    0 0 20px ${rgba(style.colors.white, 0.9)}`,
  },
  input: {
    bgcolor: style.colors.slate50,
    bgcolorFocus: style.colors.white,
    bgcolorError: rgba(style.colors.pink100, 0.5),
    border: `1px solid ${rgba(style.colors.slate600, 0.3)}`,
    borderFocus: `1px solid ${rgba(style.colors.slate600, 0.3)}`,
    borderError: `1px solid ${style.colors.pink400}`,
    label: style.colors.slate500,
    labelFocus: style.colors.slate500,
    labelError: style.colors.pink500,
    outlineColor: rgba(style.colors.violet200, 0.2),
  },
  button: {
    bgcolorForm: style.colors.violet600,
    bgcolorPrimary: style.colors.blue600,
    bgcolorSecondary: style.colors.pink500,
    bgcolorDefault: rgba(style.colors.slate200, 0.5),
  },
}

export const themeDark = { ...dark }
export const themeLight = { ...light }
