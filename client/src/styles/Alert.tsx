import styled from 'styled-components'
import * as style from 'styles/config/utilities'

export const AlertContainer = styled.div`
  /* position: relative;
  z-index: 4; */
`

export const AlertContent = styled.div`
  /* position: fixed;
    width: 100%;
    gap: ${style.sp['1.5']};
    bottom: ${style.sp['10']};
    left: auto;
    right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
`

export const Icon = styled.div``

export const AlertItem = styled.div`
  /* position: relative;
    display: flex;
    max-width: ${style.contain.sm};
    align-items: center;
    justify-content: space-between;
    padding: ${style.sp['2.5']} ${style.sp['2.5']} ${style.sp['2.5']} ${style.sp['5']};

    &.alert {
        ${style.radius.circle}
        ${style.shadow.sm}
        border: 1px solid transparent;
        transition: opacity 0.3 ease-out;
        background-color: ${style.colors.slate900};

        span,
        svg {
            color: ${style.colors.slate100};
            text-shadow: 0 1px 0 ${style.colors.black};
        }

        &.alert-default {
        }
        &.alert-success {
        }
        &.alert-danger {
        }
        &.alert-info {
        }
        &.alert-warning {
        }
        &.onEnter {
            animation: 0.15s ease-in ${fadeSlideInBottom};
        }

        &.onExit {
            animation: 0.15s ease-out ${fadeSlideOutBottom};
        }
        span {
            flex: 1 0 auto;
            display: flex;
            justify-content: center;
            padding-right: ${style.sp['5']};
            ${style.fontSizing('16px', '20px', 600)};
            letter-spacing: 0.04em;
        }
        a {
            opacity: 0.5;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 30px;
            height: 30px;
            border: 1px solid;
            transition: opacity 0.3s ease-out;

            &:hover {
                opacity: 1;
            }

            &:active {
                opacity: 0.5;
            }
        }

        svg {
            font-size: 26px;

            path {
                stroke: ${style.colors.slate100};
            }
        }
    } */
`
