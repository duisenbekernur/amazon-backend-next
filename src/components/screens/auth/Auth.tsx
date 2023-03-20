import Button from '@/ui/Button/Button'
import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import Field from '@/ui/input/Field'
import { instance } from 'api/api.interceptor'
import axios from 'axios'
import { useActions } from 'hooks/useActions'
import { useAuth } from 'hooks/useAuth'
import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { IEmailPassword } from 'store/user/user.interface'

import { validEmail } from './validation-email'

const Auth: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login')

	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = async data => {
		type === 'login' ? login(data) : register(data)

		// reset()
	}

	return (
		<Meta title="Auth">
			<section className="flex h-screen">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="rounded-lg bg-white shadow-sm p-8 m-auto"
				>
					<Heading className="capitalize text-center mb-4">{type}</Heading>

					<Field
						{...formRegister('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please, enter a valid email'
							}
						})}
						placeholder="Email"
						className="mb-2"
						error={errors.email?.message}
					/>
					<Field
						{...formRegister('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should more 6 symbols'
							}
						})}
						type="password"
						placeholder="Password"
						error={errors.password?.message}
					/>
					<Button variant="white">Let's go!</Button>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
