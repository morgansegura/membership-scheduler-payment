import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
// [Auth]
import { alertService, authService } from 'api'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { Button } from 'components/inputs'
import { TextInput } from 'components/inputs'
// [Styles]
import { AuthForm, FormTitle, ToggleForm } from 'styles/Form'
import { ButtonContainer } from 'styles/Button'
import { useRouter } from 'next/router'

interface IProps {}

export const LoginForm: React.FC<IProps> = (props: IProps) => {
    const router = useRouter()
    const { getStorage, setStorage } = useStorage()
    const [response, setResponse] = React.useState({})
    const [isError, setIsError] = React.useState(false)
    const [user, setUser] = React.useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

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
                    console.log(res)
                }
                alertService.success('Successfully logged in', { keepAfterRouteChange: true })
            })
            .catch(e => {
                alertService.error
            })
    }

    React.useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [user])

    return (
        <div>
            <FormTitle>
                <h3>Sign into your account</h3>
            </FormTitle>
            <AuthForm onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    type="email"
                    name="email"
                    label="Email"
                    register={register}
                    required
                    watch={watch}
                />
                <TextInput
                    type="password"
                    name="password"
                    label="Password"
                    register={register}
                    required
                    watch={watch}
                />
                <ButtonContainer>
                    <Button theme="primary" radius="md" type="submit">
                        Sign In
                    </Button>
                </ButtonContainer>
            </AuthForm>
            {isError && errors}

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
