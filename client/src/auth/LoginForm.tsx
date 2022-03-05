import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'
// [Auth]
import { alertService, authService } from 'api'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { Button } from 'components/inputs'
import { TextInput } from 'components/inputs'
// [Styles]
import { AuthForm, ErrorList, FormTitle, ToggleForm } from 'styles/Form'
import { ButtonContainer } from 'styles/Button'
import { useRouter } from 'next/router'

interface IProps {}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
})

export const LoginForm: React.FC<IProps> = (props: IProps) => {
    const router = useRouter()
    const { getStorage, setStorage } = useStorage()
    const [user, setUser] = React.useState(false)

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
                const { jwt } = res
                if (jwt) {
                    setStorage('jwt', jwt)
                    setUser(true)
                }
                alertService.success('👍🏽  &nbsp Successfully logged in!', {
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
        alertService.error('🙀  &nbsp Something went wrong!', {
            keepAfterRouteChange: true,
        })
    }, [user])

    return (
        <div>
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
                        watch={watch}
                    />
                    {errors.password?.message && <p>{errors.password?.message}</p>}
                </ErrorList>

                <ButtonContainer>
                    <Button theme="form" size="lg" radius="circle" type="submit">
                        Sign In
                    </Button>
                </ButtonContainer>
            </AuthForm>

            <ToggleForm>
                <p>Need an account?</p>
                <Link href="/register">
                    <a>
                        <Button theme="form" radius="base" size="xs">
                            Signup Here
                        </Button>
                    </a>
                </Link>
            </ToggleForm>
        </div>
    )
}

export default LoginForm
