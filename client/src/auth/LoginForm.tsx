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
import { Button, TextInput } from 'components/inputs'
// [Styles]
import { AuthForm, ErrorList, FormTitle, ToggleForm } from 'styles/Form'
import { ButtonContainer } from 'styles/Button'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
})

interface IProps {}
export const LoginForm: React.FC<IProps> = (props: IProps) => {
  const router = useRouter()
  const { getStorage, setStorage } = useStorage()
  const [user, setUser] = React.useState(Boolean(getStorage('user')))

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

  const onSubmit = () => {
    authService
      .signin({
        email: watch('email'),
        password: watch('password'),
      })
      .then(res => {
        const { jwt, user } = res
        if (jwt) {
          setUser(true)
          setStorage('user', 'Happy little trees')
        }
        alertService.success(`👍🏽  &nbsp Welcome back, ${user.firstName}!`, {
          keepAfterRouteChange: true,
        })
      })
      .catch(e => {
        alertService.error('🙀  &nbsp Something went wrong!', {
          keepAfterRouteChange: true,
        })
      })
  }

  React.useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])

  return (
    <>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>
          <h3>Sign into your account</h3>
        </FormTitle>
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

        <ButtonContainer>
          <Button themed="primary" size="md" radius="circle" type="submit">
            Sign In
          </Button>
        </ButtonContainer>
      </AuthForm>
      <ToggleForm>
        <p>Need an account?</p>
        <Link href="/register">
          <a>
            <Button themed="default">Signup Here</Button>
          </a>
        </Link>
      </ToggleForm>
    </>
  )
}

export default LoginForm
