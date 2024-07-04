/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type ReactElement } from 'react'
import AlertError from './AlertError'
import useUserFormContext from './hook/useUserFormContext'

function UserFormGeneralError(): ReactElement | null {
  const { getGeneralError } = useUserFormContext()

  return <AlertError errorMessage={getGeneralError()} />
}

export default UserFormGeneralError
