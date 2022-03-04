import React from 'react'
import { Button as ButtonType } from 'styles/Button'

type Props = {
    children?: React.ReactChild | React.ReactChild[]
    as?: any
    size?: string
    theme?: string
    outline?: boolean
    onClick?: any
    radius?: string
    type?: string
}

const Button: React.FC<Props> = ({
    children,
    as = 'button',
    size,
    theme,
    type,
    radius,
    outline,
    onClick,
}) => {
    return (
        <ButtonType
            as={as}
            size={size}
            theme={theme}
            outline={outline}
            radius={radius}
            type={type}
            onClick={onClick}
        >
            {children}
        </ButtonType>
    )
}

export default Button
