import axios from 'axios'
import * as v from 'valibot'
import { addUser } from './api'
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

export async function putUserFormData(
  user: Omit<User, 'id'>,
  signal: AbortSignal
): Promise<UserFormErrorMessages | true> {
  const errorMessages: UserFormErrorMessages = {
    name: '',
    username: '',
    email: '',
    message: ''
  }

  try {
    await addUser({ signal, body: user })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error)

      return { ...errorMessages, ...error.response?.data.errors }
    }
  }

  return true
}
