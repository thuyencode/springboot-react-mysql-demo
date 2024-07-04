/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type ReactElement } from 'react'
import AlertError from './AlertError'
import useUserFormContext from './UserForm.hook'

function UserFormGeneralError(): ReactElement | null {
  const { generalError } = useUserFormContext()

  return <AlertError errorMessage={generalError} />
}

export default UserFormGeneralError
