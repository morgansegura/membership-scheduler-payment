import React from 'react'
import { StyledButton } from 'styles/Button'
import { RippleEffect } from 'components/core'

interface ButtonInterface {
	as?: any
	children?: React.ReactChild | React.ReactChild[]
	classes?: string[]
	color?: string
	onClick?: any
	size?: string
	radius?: string
	ripple?: boolean
	variant?: string
	[rest: string]: any
}

const Button: React.FC<ButtonInterface> = ({
	as = 'button',
	children,
	classes,
	color,
	onClick,
	radius,
	size,
	variant,
	ripple = true,
	...rest
}) => {
	return ripple ? (
		<StyledButton
			as={as}
			className={`Button-root ${classes}`}
			color={color}
			radius={radius}
			size={size}
			variant={variant}
			{...rest}
		>
			<RippleEffect color={color} onClick={onClick}>
				<div className="ButtonInner-root">{children}</div>
			</RippleEffect>
		</StyledButton>
	) : (
		<StyledButton
			as={as}
			className={`Button-root ${classes}`}
			color={color}
			radius={radius}
			size={size}
			variant={variant}
			{...resizeTo}
		>
			<div className="ButtonInner-root">{children}</div>
		</StyledButton>
	)
}

export default Button
