import cn from 'clsx'
import { forwardRef } from 'react'

import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, type = 'text', className, style, Icon, ...rest },
		ref
	) => {
		return (
			<div className={cn('mb-3', className)} style={style}>
				<label>
					<span className="mb-1 block">
						{Icon && <Icon />}
						{placeholder}
					</span>
					<input
						ref={ref}
						type={type}
						{...rest}
						className={cn(
							'px-4 py-2 w-full outline-none border border-gray border-solid focus:border-primary transition-all placeholder:text-gray rounded-lg',
							{
								'border-red': !!error
							}
						)}
						placeholder={placeholder}
					/>
				</label>
				{error && <div className="text-red text-sm">{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
