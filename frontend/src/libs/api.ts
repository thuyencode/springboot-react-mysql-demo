/* eslint-disable @typescript-eslint/no-invalid-void-type */
import Axios from 'axios'
import { type User } from './types'

export const baseApi = Axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export async function getUsers(options: {
  signal: AbortSignal
}): Promise<User[]> {
  return await baseApi
    .get('users', {
      signal: options.signal
    })
    .then((res) => res.data)
}

export async function addUser(options: {
  signal: AbortSignal
  body: Omit<User, 'id'>
}): Promise<void> {
  await baseApi
    .post(
      'user',
      { ...options.body },
      {
        signal: options.signal,
        headers: { 'Content-Type': 'application/json' }
      }
    )
    .then((res) => {
      console.log(res.data)
    })
}

export async function getUser(options: {
  signal: AbortSignal
  id: string
}): Promise<User> {
  return await baseApi
    .get(`user/${options.id}`, {
      signal: options.signal
    })
    .then((res) => res.data)
}

export async function putUser(options: {
  signal: AbortSignal
  id: string
  body: Omit<User, 'id'>
}): Promise<User> {
  return await baseApi
    .put(
      `user/${options.id}`,
      { ...options.body },
      {
        signal: options.signal,
        headers: { 'Content-Type': 'application/json' }
      }
    )
    .then((res) => res.data)
}
