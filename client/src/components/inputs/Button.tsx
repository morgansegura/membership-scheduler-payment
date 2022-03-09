import React from 'react'
import { Button as ButtonType } from 'styles/Button'

type Props = {
    children?: React.ReactChild | React.ReactChild[]
    as?: any
    size?: string
    themed?: string
    outline?: boolean
    onClick?: any
    radius?: string
    type?: string
    [rest: string]: any
}

const Button: React.FC<Props> = ({
    children,
    as = 'button',
    size,
    themed,
    type,
    radius,
    outline,
    onClick,
    ...rest
}) => {
    return (
        <ButtonType
            as={as}
            size={size}
            themed={themed}
            outline={outline}
            radius={radius}
            type={type}
            onClick={onClick}
            {...rest}
        >
            {children}
        </ButtonType>
    )
}

export default Button
