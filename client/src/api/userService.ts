import { fetchWrapper } from './fetchWrapper'

const baseUrl = 'auth/user'
interface IUser {
  firstName?: string
  lastName?: string
  username?: string
  email?: string
  avatar?: string
  role?: string
}

export const userService = {
  me,
  update,
  upload,
}

function me() {
  return fetchWrapper.get(`${baseUrl}`)
}

function update(params: IUser) {
  return fetchWrapper.patch(`${baseUrl}/info`, params)
}

function upload(params: File) {
  return fetchWrapper.put(`${baseUrl}/upload`, params)
}
