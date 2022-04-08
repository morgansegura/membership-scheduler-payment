import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'
import { useRouter } from 'next/router'
// [Auth]
import { alertService, authService } from 'api'
// [Components]
import { Button, TextInput, paths } from 'components'
// [Styles]
import { AuthForm, ErrorList, FormTitle, ToggleForm } from 'styles/Form'
import { ButtonContainer } from 'styles/Button'

const schema = yup.object().shape({
	firstName: yup.string().required('Your first name is required'),
	lastName: yup.string().required('Your last name is required'),
	username: yup.string().max(20).required(),
	email: yup.string().email().required(),
	password: yup.string().min(8).max(32).required(),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Password confirmation is required'),
})

interface IProps {}
const RegisterForm: React.FC<IProps> = () => {
	const router = useRouter()
	const [registered, setRegistered] = React.useState(false)
	const { auth } = paths

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	const onSubmit = async () => {
		authService
			.register({
				firstName: watch('firstName'),
				lastName: watch('lastName'),
				username: watch('username'),
				email: watch('email'),
				password: watch('password'),
				passwordConfirm: watch('passwordConfirm'),
			})
			.then(() => {
				try {
					setRegistered(true)
					alertService.error(`👍🏽  &nbsp Successful!`, {
						keepAfterRouteChange: true,
					})
				} catch (error) {
					alertService.error(`🙀  &nbsp Something went wrong!`, {
						keepAfterRouteChange: true,
					})
				}
			})
	}

	React.useEffect(() => {
		if (registered) {
			router.push(auth.signin.path)
			alertService.error(`📩  &nbsp Please check your email to confirm registration.`, {
				keepAfterRouteChange: true,
			})
		}
	}, [registered])

	return (
		<div>
			<AuthForm onSubmit={handleSubmit(onSubmit)}>
				<FormTitle>
					<h3>Create an account</h3>
				</FormTitle>
				<ErrorList className={errors.firstName?.message ? `error` : ``}>
					<TextInput
						type="text"
						name="firstName"
						label="First Name"
						register={register}
						required
						autoComplete="new-password"
						watch={watch}
					/>
					{errors.firstName?.message && <p>{errors.firstName?.message}</p>}
				</ErrorList>
				<ErrorList className={errors.lastName?.message ? `error` : ``}>
					<TextInput
						type="text"
						name="lastName"
						label="Last Name"
						register={register}
						required
						autoComplete="new-password"
						watch={watch}
					/>
					{errors.lastName?.message && <p>{errors.lastName?.message}</p>}
				</ErrorList>
				<ErrorList className={errors.username?.message ? `error` : ``}>
					<TextInput
						type="username"
						name="username"
						label="Username"
						register={register}
						required
						autoComplete="new-password"
						watch={watch}
					/>
					{errors.username?.message && <p>{errors.username?.message}</p>}
				</ErrorList>
				<ErrorList className={errors.email?.message ? `error` : ``}>
					<TextInput
						type="email"
						name="email"
						label="Email"
						register={register}
						required
						autoComplete="new-password"
						watch={watch}
					/>
					{errors.email?.message && <p>{errors.email?.message}</p>}
				</ErrorList>
				<ErrorList className={errors.password?.message ? `error` : ``}>
					<TextInput
						type="password"
						name="password"
						label="Password"
						register={register}
						required
						autoComplete="new-password"
						watch={watch}
					/>
					{errors.password?.message && <p>{errors.password?.message}</p>}
				</ErrorList>
				<ErrorList className={errors.passwordConfirm?.message ? `error` : ``}>
					<TextInput
						type="password"
						name="passwordConfirm"
						label="Password Confirm"
						register={register}
						required
						autoComplete="new-password"
						watch={watch}
					/>
					{errors.passwordConfirm?.message && <p>{errors.passwordConfirm?.message}</p>}
				</ErrorList>
				<ButtonContainer>
					{/* <Button color="form" size="md" radius="circle" type="submit">
						Sign Up
					</Button> */}
				</ButtonContainer>
			</AuthForm>

			<ToggleForm>
				<p>Already a member?</p>
				<Link href={auth.signin.path}>
					<a>{/* <Button size="xs">Login Here</Button> */}</a>
				</Link>
			</ToggleForm>
		</div>
	)
}

export default RegisterForm
