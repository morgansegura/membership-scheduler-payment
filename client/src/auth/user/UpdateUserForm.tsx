import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
// [Auth]
import { alertService, authService, usersService } from 'api'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { Button } from 'components/inputs'
import { TextInput } from 'components/inputs'
// [Styles]
import { AuthForm, ToggleForm } from 'styles/Form'
import { ButtonContainer } from 'styles/Button'
import { useRouter } from 'next/router'

interface IProps {
  data: any
}

export const UpdateUserForm: React.FC<IProps> = ({ data }) => {
  const router = useRouter()
  const { getStorage, setStorage } = useStorage()
  const [response, setResponse] = React.useState({})
  const [isError, setIsError] = React.useState(false)
  const [user, setUser] = React.useState(false)
  const [userInfo, setUserInfo] = React.useState({})

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const updateUser = (data: any) => {
    return usersService.update({
      firstName: watch('firstName'),
      lastName: watch('lastName'),
      email: watch('email'),
    })
    // .then(() => {
    //     alertService.success('User updated', { keepAfterRouteChange: true })
    // })
    // .catch(alertService.error)
  }

  const onSubmit = () => {}

  React.useEffect(() => {
    if (data) {
      authService.authUser().then((user: any) => {
        const fields = ['firstName', 'lastName', 'email']
        fields.forEach(field => setValue(field, user[field]))
        console.log(user)
      })
    }
  }, [data])

  return (
    <div>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          name="firstName"
          label="First Name"
          register={register}
          required
          watch={watch}
        />
        <TextInput
          type="text"
          name="lastName"
          label="Last Name"
          register={register}
          required
          watch={watch}
        />
        <TextInput
          type="email"
          name="email"
          label="Email"
          register={register}
          required
          watch={watch}
        />
        <ButtonContainer>
          <Button themed="form" radius="circle" type="submit">
            Update
          </Button>
        </ButtonContainer>
      </AuthForm>

      <ToggleForm>
        <p>Need an account?</p>
        <Link href="/register">
          <a>
            <Button radius="base">Signup Here</Button>
          </a>
        </Link>
      </ToggleForm>
    </div>
  )
}

export default UpdateUserForm
