import { fetchWrapper } from './fetchWrapper'

const baseUrl = 'admin/user'
interface IUser {
    firstName: string
    lastName: string
    email: string
}

export const userService = {
    me,
    update,
}

function me() {
    return fetchWrapper.get(`${baseUrl}`)
}

function update(params: IUser) {
    return fetchWrapper.patch(`${baseUrl}/info`, params)
}
