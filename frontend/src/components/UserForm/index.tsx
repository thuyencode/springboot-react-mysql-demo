import { type UserFormErrorMessages } from '@/libs/types'
import { useRef, type PropsWithChildren, type ReactElement } from 'react'
import { Form, useActionData } from 'react-router-dom'
import { UserFormContext } from './UserForm.context'
import UserFormActions from './UserFormActions'
import UserFormEmailField from './UserFormEmailField'
import UserFormGeneralError from './UserFormGeneralError'
import UserFormNameField from './UserFormNameField'
import UserFormTitle from './UserFormTitle'
import UserFormUsernameField from './UserFormUsernameField'

function UserForm({ children }: PropsWithChildren): ReactElement {
  const error = useRef<UserFormErrorMessages>()
  const actionData = useActionData() as { errors: UserFormErrorMessages }

  if (actionData?.errors !== undefined) {
    error.current = actionData.errors
  }

  function getErrorMessage(
    key: keyof UserFormErrorMessages
  ): string | undefined {
    if (error.current === undefined) {
      return undefined
    }

    if (error.current[key] === '') {
      return undefined
    }

    return error.current[key]
  }

  return (
    <Form className='w-screen max-w-[500px] space-y-5' method='post'>
      <UserFormContext.Provider
        value={{
          nameFieldError: getErrorMessage('name'),
          usernameFieldError: getErrorMessage('username'),
          emailFieldError: getErrorMessage('email'),
          generalError: getErrorMessage('message')
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
