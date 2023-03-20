import cn from 'clsx'
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'orange' | 'white'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-2xl font-semibold shadow px-5 py-2',
				{
					'text-secondary bg-primary': variant === 'orange',
					'text-primary bg-white': variant === 'white'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
