import { fetchWrapper } from './fetchWrapper'

const baseUrl = 'auth'

type SigninType = {
  username: string
  password: string
}
type RegisterType = {
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  passwordConfirm: string
}

export const authService = {
  authUser,
  signout,
  signin,
  register,
}

function authUser() {
  return fetchWrapper.get(`${baseUrl}`)
}

function signout() {
  return fetchWrapper.post(`${baseUrl}/signout`, {})
}

function register(params: RegisterType) {
  return fetchWrapper.post(`${baseUrl}/register`, params)
}

function signin(params: SigninType) {
  return fetchWrapper.post(`${baseUrl}/signin`, params)
}
