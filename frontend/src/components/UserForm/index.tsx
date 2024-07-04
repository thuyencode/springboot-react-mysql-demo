import { type User, type UserFormErrorMessages } from '@/libs/types'
import { useRef, type PropsWithChildren, type ReactElement } from 'react'
import { Form, useActionData, useLoaderData } from 'react-router-dom'
import { UserFormContext } from './UserForm.context'
import UserFormActions from './UserFormActions'
import UserFormEmailField from './UserFormEmailField'
import UserFormGeneralError from './UserFormGeneralError'
import UserFormNameField from './UserFormNameField'
import UserFormTitle from './UserFormTitle'
import UserFormUsernameField from './UserFormUsernameField'

function UserForm({ children }: PropsWithChildren): ReactElement {
  const error = useRef<UserFormErrorMessages>()
  const user = useRef<User>()
  const actionData = useActionData() as { errors: UserFormErrorMessages }
  const loaderData = useLoaderData() as User | undefined

  if (actionData?.errors !== undefined) {
    error.current = actionData.errors
  }

  if (loaderData !== undefined) {
    user.current = loaderData
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

  function getUserValue(key: keyof User): string | number | undefined {
    if (user.current === undefined) {
      return undefined
    }

    return user.current[key]
  }

  return (
    <Form className='w-screen max-w-[500px] space-y-5' method='post'>
      <UserFormContext.Provider
        value={{
          nameFieldError: getErrorMessage('name'),
          usernameFieldError: getErrorMessage('username'),
          emailFieldError: getErrorMessage('email'),
          generalError: getErrorMessage('message'),
          nameFieldValue: getUserValue('name') as string | undefined,
          usernameFieldValue: getUserValue('username') as string | undefined,
          emailFieldValue: getUserValue('email') as string | undefined
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
