import axios from 'axios'
import * as v from 'valibot'
import { addUser, putUser } from './api'
import { UserFormSchema } from './schema'
import { type User, type UserFormErrorMessages } from './types'

export function parseUserFormData(
  user: Omit<User, 'id'>
): UserFormErrorMessages | true {
  const errorMessages: UserFormErrorMessages = {
    name: '',
    username: '',
    email: '',
    message: ''
  }

  const result = v.safeParse(UserFormSchema, user)

  if (!result.success) {
    const issues = v.flatten<typeof UserFormSchema>(result.issues).nested

    if (issues !== undefined) {
      if (issues.name !== undefined) {
        errorMessages.name = issues.name[0]
      }

      if (issues.username !== undefined) {
        errorMessages.username = issues.username[0]
      }

      if (issues.email !== undefined) {
        errorMessages.email = issues.email[0]
      }

      console.log(errorMessages)

      return errorMessages
    }
  }

  return true
}

type SendUserFormDataProps = {
  user: Omit<User, 'id'>
  signal: AbortSignal
} & (
  | {
      method: 'POST'
      id?: undefined
    }
  | {
      method: 'PUT'
      id: string
    }
)

export async function sendUserFormData({
  user,
  signal,
  method,
  id
}: SendUserFormDataProps): Promise<UserFormErrorMessages | true> {
  const errorMessages: UserFormErrorMessages = {
    name: '',
    username: '',
    email: '',
    message: ''
  }

  try {
    switch (method) {
      case 'POST':
        await addUser({ signal, body: user })
        break

      case 'PUT':
        await putUser({ signal, id, body: user })
        break
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error)

      return { ...errorMessages, ...error.response?.data.errors }
    }
  }

  return true
}
