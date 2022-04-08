import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'
import { useRouter } from 'next/router'
// [Auth]
import { alertService, authService } from 'api'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { Button, TextInput, paths } from 'components'
// [Styles]
import { AuthForm, ErrorList, FormTitle, ToggleForm } from 'styles/Form'
import { ButtonContainer } from 'styles/Button'

const schema = yup.object().shape({
	username: yup.string().min(4).max(20).required(),
	password: yup.string().min(8).max(32).required(),
})

interface IProps {}
export const SigninForm: React.FC<IProps> = (props: IProps) => {
	const router = useRouter()
	const { getStorage, setStorage } = useStorage()
	const [user, setUser] = React.useState(Boolean(getStorage('user')))
	const { base, auth } = paths

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	const onSubmit = () => {
		authService
			.signin({
				username: watch('username'),
				password: watch('password'),
			})
			.then(res => {
				const { username } = res
				if (username) {
					setUser(true)
					setStorage('user', username)
				}
				alertService.success(`👍🏽  &nbsp Welcome back ${username}!`, {
					keepAfterRouteChange: true,
				})
			})
			.catch(error => {
				alertService.error('🙀  &nbsp Something went wrong, please try again.', {
					keepAfterRouteChange: true,
				})
			})
	}

	React.useEffect(() => {
		if (user) {
			router.push(base.landing.path)
		}
	}, [user])

	return (
		<>
			<AuthForm onSubmit={handleSubmit(onSubmit)}>
				<FormTitle>
					<h3>Sign into your account</h3>
				</FormTitle>
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

				<ButtonContainer>
					{/* <Button themed="primary" size="md" radius="circle" type="submit">
            Sign In
          </Button> */}
				</ButtonContainer>
			</AuthForm>
			<ToggleForm>
				<p>Need an account?</p>
				<Link href={auth.register.path}>
					<a>{/* <Button themed="default">Signup Here</Button> */}</a>
				</Link>
			</ToggleForm>
		</>
	)
}

export default SigninForm
