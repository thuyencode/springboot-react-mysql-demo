import { type UserFormErrorMessages } from '@/libs/types'
import { useRef, type PropsWithChildren, type ReactElement } from 'react'
import { Form, useActionData } from 'react-router-dom'
import UserFormActions from './UserFormActions'
import UserFormEmailField from './UserFormEmailField'
import UserFormGeneralError from './UserFormGeneralError'
import UserFormNameField from './UserFormNameField'
import UserFormTitle from './UserFormTitle'
import UserFormUsernameField from './UserFormUsernameField'
import { UserFormContext } from './context'

function UserForm({ children }: PropsWithChildren): ReactElement {
  const error = useRef<UserFormErrorMessages>()
  const actionData = useActionData() as { errors: UserFormErrorMessages }

  if (actionData?.errors !== undefined) {
    error.current = actionData.errors
  }

  function getNameFieldError(): string | undefined {
    if (error.current === undefined) {
      return undefined
    }

    if (error.current.name === '') {
      return undefined
    }

    return error.current.name
  }

  function getUsernameFieldError(): string | undefined {
    if (error.current === undefined) {
      return undefined
    }

    if (error.current.username === '') {
      return undefined
    }

    return error.current.username
  }

  function getEmailFieldError(): string | undefined {
    if (error.current === undefined) {
      return undefined
    }

    if (error.current.email === '') {
      return undefined
    }

    return error.current.email
  }

  function getGeneralError(): string | undefined {
    if (error.current === undefined) {
      return undefined
    }

    if (error.current.message === '') {
      return undefined
    }

    return error.current.message
  }

  return (
    <Form className='w-screen max-w-[500px] space-y-5' method='post'>
      <UserFormContext.Provider
        value={{
          getNameFieldError,
          getUsernameFieldError,
          getEmailFieldError,
          getGeneralError
        }}
      >
        {children}
      </UserFormContext.Provider>
    </Form>
  )
}

UserForm.Title = UserFormTitle
UserForm.NameField = UserFormNameField
UserForm.UsernameField = UserFormUsernameField
UserForm.EmailField = UserFormEmailField
UserForm.Actions = UserFormActions
UserForm.GeneralError = UserFormGeneralError

export default UserForm
