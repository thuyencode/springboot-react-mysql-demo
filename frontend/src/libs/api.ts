import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'
import { type User } from './types'

export const baseApi = setupCache(
  Axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })
)

export async function getUsers(options: {
  signal: AbortSignal
}): Promise<User[]> {
  return await baseApi
    .get('users', {
      signal: options.signal
    })
    .then((res) => res.data)
}
