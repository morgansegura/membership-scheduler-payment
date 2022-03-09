import { fetchWrapper } from './fetchWrapper'

const baseUrl = 'admin'

type SigninType = {
  email: string
  password: string
}
type RegisterType = {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
}

export const authService = {
  signout,
  signin,
  register,
}

function signout(params: any | null) {
  return fetchWrapper.post(`${baseUrl}/create`, params)
}

function register(params: RegisterType) {
  return fetchWrapper.post(`${baseUrl}/register`, params)
}

function signin(params: SigninType) {
  return fetchWrapper.post(`${baseUrl}/signin`, params)
}
