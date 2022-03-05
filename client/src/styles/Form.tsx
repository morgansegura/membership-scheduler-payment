import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'
import { rgba } from 'polished'

interface TextFieldProps {
    focus?: boolean
    blur?: boolean
}

export const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: ${style.contain.sm};
    margin: ${style.sp['6']} auto;
    gap: ${style.sp['5']};
    background-color: ${props => props.theme.form};
    padding: ${style.sp['10']} ${style.sp['6']} ${style.sp['8']} ${style.sp['6']};
    ${style.shadow.xl}
    ${style.radius.xl}


	button:nth-child(1) {
        flex: 1;
        justify-content: center;
        margin-top: ${style.sp['4.5']};
        margin-bottom: ${style.sp['4.5']};
    }
`
export const TextField = styled.div`
    position: relative;
    display: inline-flex;
    z-index: 1;
    align-items: center;
    ${style.radius.md};
    background-color: ${props => props.theme.input};
    border: 1px solid ${props => props.theme.inputBorder};

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
        color: ${props => props.theme.inputText};
        transition: transform 0.2s ease-out;

        &:after {
            background-color: transparent;
        }
    }

    input {
        overflow: hidden;
        z-index: 2;
        flex: 1;
        display: flex;
        padding: ${style.sp['3.5']} ${style.sp['5']};
        ${style.radius.md};
        transition: outline-color 0.3s ease-out;
    }

    ${(props: TextFieldProps) =>
        props.focus &&
        css`
            background-color: ${props => props.theme.inputFocus};
            border: 1px solid ${props => props.theme.inputBorderFocus};

            div {
                z-index: 3;
                transform: translateY(-25px);
                ${style.fontSizing('12px', '12px')};
                color: ${props => props.theme.inputTextFocus};

                &:after {
                    content: '';
                    position: absolute;
                    z-index: -1;
                    top: 60%;
                    left: 0;
                    right: 0;
                    background-color: ${props => props.theme.form};
                    transform: translateY(-50%);
                    height: 3px;
                    ${style.radius.base}
                }
            }
        `}

    ${(props: TextFieldProps) =>
        props.blur &&
        css`
            background-color: ${props => props.theme.input};

            div {
                ${style.fontSizing('14px', '14px')};
                z-index: 1;
                transform: translateY(0);
                color: ${props => props.theme.inputText};

                &:after {
                    background-color: ${props => props.theme.input};
                }
            }
        `}
`

export const FormTitle = styled.div`
    display: flex;
    justify-content: center;
    padding-top: ${style.sp['3']};
    padding-bottom: ${style.sp['3']};
    color: ${props => props.theme.formText};
`

export const ToggleForm = styled.div`
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
    }
`

export const ErrorList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    &.error {
        ${TextField} {
            background-color: ${props => props.theme.inputError};
            border-color: ${props => props.theme.inputBorderError};
        }

        div {
            color: ${props => props.theme.inputTextError};
        }
    }

    p {
        position: absolute;
        display: block;
        bottom: -2px;
        z-index: 4;
        padding: 0 3px;
        right: ${style.sp['4']};
        color: ${props => props.theme.inputTextError};
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
            background-color: ${props => props.theme.form};
            transform: translateY(-50%);
            height: 2px;
        }
    }
`
