import { fetchWrapper } from 'api'

const baseUrl = 'admin/users'

type SignupType = {
  email: string
  password: string
}
type RegisterType = {
  name: string
  email: string
  password: string
  phoneNumber: string
}
interface IUpdateUser {
  firstName: string
  lastName: string
  email: string
}

export const userService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
}

function getAll() {
  return fetchWrapper.get(`${baseUrl}s`)
}

function getById(id: number) {
  return fetchWrapper.get(`${baseUrl}/${id}`)
}

function create(params: any) {
  return fetchWrapper.put(`${baseUrl}/create`, params)
}

function update(params: any) {
  return fetchWrapper.patch(`${baseUrl}/info`, params)
}

function _delete() {
  return fetchWrapper.delete(`${baseUrl}`)
}
