import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'

interface InputProps {
    focus?: boolean
    blur?: boolean
    label?: string
    type?: string
    required?: boolean
    name?: string
    icon?: string
    position?: string
}

export const Label = styled.label`
    transition: all 0.3s ease-out;
`

export const Icon = styled.div`
    svg {
        display: flex;
        fill: ${style.colors.slate400};
    }
`

export const Input = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    border: 1px solid ${style.colors.slate300};
    background-color: ${style.colors.slate100};
    border-radius: ${style.sp['1']};
    padding: ${style.sp['3']} ${style.sp['3.5']};

    ${(props: InputProps) =>
        props.focus &&
        css`
            ${Label} {
                justify-content: flex-end;
            }
            ${Icon} {
                display: none;
            }
        `}
    ${(props: InputProps) =>
        props.blur &&
        css`
            ${Label} {
                justify-content: flex-start;
            }
            ${Icon} {
                display: flex;
            }
        `}

	input {
        position: relative;
        z-index: 3;
        flex: 1 0 auto;
        background-color: transparent;

        &:-internal-autofill-selected,
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            appearance: unset;
            -webkit-box-shadow: transparent;
            background-color: transparent !important;
            color: transparent !important;
        }
    }

    ${Label} {
        position: absolute;
        left: ${style.sp['3.5']};
        right: ${style.sp['3.5']};
        z-index: 2;
        user-select: none;
        display: flex;
        flex: 1 0 auto;
        align-items: center;
        ${style.fontSizing('16px', '24px')};
        color: ${style.colors.slate400};
    }

    ${Label} {
    }

    ${Icon} {
        margin-right: ${style.sp['2']};
    }
`
