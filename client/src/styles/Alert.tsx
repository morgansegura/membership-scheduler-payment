import styled from 'styled-components'
import * as style from 'styles/config/utilities'
import { rgba } from 'polished'

export const AlertContainer = styled.div`
    position: relative;
    z-index: 4;
`

export const AlertContent = styled.div`
    position: fixed;
    top: ${style.sp['10']};
    right: ${style.sp['4']};
`

export const AlertItem = styled.div`
    position: relative;
    display: flex;
    min-width: 100px;
    align-items: center;
    justify-content: space-between;
    padding: ${style.sp['3']} ${style.sp['4']};

    ${style.fontSizing('16px', '20px')}

    &.fade {
    }
    &.alert {
        ${style.radius.md}
        ${style.shadow.md}
        border: 1px solid transparent;

        &.alert-default {
            background-color: ${style.colors.blue100};
        }
        &.alert-success {
            background-color: ${style.colors.emerald100};
            border-color: ${style.colors.emerald200};
        }
        &.alert-danger {
            background-color: ${style.colors.red200};
            border-color: ${style.colors.red300};
        }
        &.alert-info {
            background-color: ${style.colors.yellow200};
            border-color: ${style.colors.yellow300};
        }
        &.alert-warning {
            background-color: ${style.colors.orange200};
            border-color: ${style.colors.orange300};
        }
        span {
            padding-right: 30px;
            text-shadow: 0 1px 0 ${style.colors.white};
            color: ${style.colors.slate800};
        }
        a {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            right: 0;

            width: 30px;
            height: 30px;
            border: 1px solid;
        }

        svg {
            text-shadow: 0 1px 0 ${style.colors.white};
            font-size: 12px;
            color: ${rgba(style.colors.slate800, 0.8)};
        }
    }
`
