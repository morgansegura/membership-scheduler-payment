import axios from 'axios'

const client = (() => {
  return axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/api/',
  })
})()

export const fetchWrapper = {
  get,
  post,
  put,
  patch,
  delete: _delete,
}

function get(url: string, credentials: boolean = true) {
  const options = {
    url,
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }
  return request(options, { withCredentials: credentials })
}

function post(url: string, data: any | null, credentials: boolean = true) {
  const options = {
    url,
    method: 'post',
    data,
    headers: { 'Content-Type': 'application/json' },
  }
  return request(options, { withCredentials: credentials })
}

function put(url: string, data: any, credentials: boolean = true) {
  const options = {
    url,
    method: 'put',
    data,
    headers: { 'Content-Type': 'application/json' },
  }
  return request(options, { withCredentials: credentials })
}

function patch(url: string, data: any, credentials: boolean = true) {
  const options = {
    url,
    method: 'patch',
    data,
    headers: { 'Content-Type': 'application/json' },
  }
  return request(options, { withCredentials: credentials })
}

function _delete(url: string, credentials: boolean = true) {
  const options = {
    url,
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
  }
  return request(options, { withCredentials: credentials })
}

async function request(options: any, store?: any) {
  const onSuccess = function (response: { data: any }) {
    const { data } = response
    return data
  }

  const onError = function (error: { response: any }) {
    return Promise.reject(error.response)
  }

  return client(options).then(onSuccess).catch(onError)
}

// export default request
