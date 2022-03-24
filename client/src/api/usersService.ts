import { fetchWrapper } from './fetchWrapper'

const baseUrl = 'users'

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

export const usersService = {
  addAvatar,
  getAll,
  getById,
  create,
  update,
  getAvatar,
  delete: _delete,
}

function getAll() {
  return fetchWrapper.get(`${baseUrl}`)
}

function addAvatar(params: any) {
  return fetchWrapper.post(`${baseUrl}/avatar`, params)
}

function removeAvatar(params: any) {
  return fetchWrapper.delete(`${baseUrl}/avatar`, params)
}

function getAvatar(params: any) {
  return fetchWrapper.get(`${baseUrl}/avatar/:id`, params)
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
