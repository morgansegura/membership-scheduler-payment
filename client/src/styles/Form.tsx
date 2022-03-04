import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'

interface MessageDisplayProps {
    theme?: string
}

interface TextFieldProps {
    focus?: boolean
    blur?: boolean
}

export const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: ${style.contain.sm};
    margin: ${style.sp['6']} auto;
    gap: ${style.sp['3']};
    background-color: ${style.colors.white};
    padding: ${style.sp['6']} ${style.sp['6']} ${style.sp['8']} ${style.sp['6']};
    ${style.shadow.xl}
    ${style.radius.md}


	button:nth-child(1) {
        flex: 1;
        justify-content: center;
        padding-top: ${style.sp['2.5']};
        padding-bottom: ${style.sp['2.5']};
    }
`
export const TextField = styled.div`
    position: relative;
    display: inline-flex;
    z-index: 1;
    align-items: center;
    /* overflow: hidden; */
    background-color: ${style.colors.white};
    ${style.radius['sm']};

    div {
        position: absolute;
        z-index: 1;
        ${style.fontSizing('16px', '16px')}
        margin-left: ${style.sp['2.5']};
        margin-right: ${style.sp['2.5']};
        padding-left: ${style.sp['1']};
        padding-right: ${style.sp['1']};
        user-select: none;
        color: ${style.colors.slate400};
        transition: transform 0.2s ease-out;
    }

    input {
        z-index: 2;
        flex: 1;
        display: flex;
        border-color: transparent;
        padding: ${style.sp['3.5']};
        background-color: transparent;
        border: 1px solid ${style.colors.neutral200};
        transition: outline-color 0.3s ease-out;
    }

    ${(props: TextFieldProps) =>
        props.focus &&
        css`
            div {
                z-index: 3;
                transform: translateY(-250%);
                ${style.fontSizing('12px', '12px')};

                &:after {
                    content: '';
                    position: absolute;
                    z-index: -1;
                    top: 0;
                    left: 0;
                    right: 0;
                    background-color: ${style.colors.white};
                    height: 13px;
                    ${style.radius.base}
                }
            }
            input {
                outline-color: ${style.colors.violet300};
            }
        `}

    ${(props: TextFieldProps) =>
        props.blur &&
        css`
            div {
                z-index: 1;
                transform: unset;
            }
            input {
                outline-color: transparent;
            }
        `}
`

export const FormTitle = styled.div`
    display: flex;
    justify-content: center;
    padding-top: ${style.sp['9']};
    padding-bottom: ${style.sp['3']};
    color: ${style.colors.slate600};
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
    p {
        color: ${style.colors.red600};

        &:not(:nth-child(1)) {
            padding-top: ${style.sp['3']};
        }
    }
`

export const SuccessList = styled.div`
    p {
        color: ${style.colors.green600};

        &:not(:nth-child(1)) {
            padding-top: ${style.sp['3']};
        }
    }
`

export const MessageDisplay = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    margin-top: ${style.sp[9]};
    margin-bottom: ${style.sp[9]};

    ${(props: MessageDisplayProps) =>
        props.theme === 'warning'
            ? css`
                  background-color: ${style.colors.orange100};
              `
            : props.theme === 'danger'
            ? css`
                  color: ${style.colors.red600};
                  border: 1px solid ${style.colors.red100};
              `
            : ''}

    h3 {
        display: flex;
        align-items: center;
    }

    svg {
        display: flex;
        align-items: center;
        ${style.radius['lg']}
        padding: ${style.sp[1]};
        display: flex;
        width: 40px;
        height: 40px;
        margin-right: ${style.sp[4]};
    }

    button {
        flex: 1 0 auto;
        margin-top: ${style.sp['6']};
    }
`
export const FormAnnotation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${style.sp['4']};
    margin-bottom: ${style.sp['4']};

    button {
        margin-left: ${style.sp['4']};
    }
`
