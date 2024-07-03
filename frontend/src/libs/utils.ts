import * as v from 'valibot'
import { UserFormSchema } from './schema'
import { type User, type UserFormErrorMessages } from './types'

export function parseUserFormData(
  user: Omit<User, 'id'>
): UserFormErrorMessages | true {
  const errorMessages: UserFormErrorMessages = {
    nameError: '',
    usernameError: '',
    emailError: ''
  }

  const result = v.safeParse(UserFormSchema, user)

  if (result.success === true) {
    console.log(result.output)
  } else {
    const issues = v.flatten<typeof UserFormSchema>(result.issues).nested

    if (issues !== undefined) {
      if (issues.name !== undefined) {
        errorMessages.nameError = issues.name[0]
      }

      if (issues.username !== undefined) {
        errorMessages.usernameError = issues.username[0]
      }

      if (issues.email !== undefined) {
        errorMessages.emailError = issues.email[0]
      }

      console.log(errorMessages)

      return errorMessages
    }
  }

  return true
}
