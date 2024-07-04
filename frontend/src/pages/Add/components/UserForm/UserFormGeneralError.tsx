/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type UserFormErrorMessages } from '@/libs/types'
import { useRef, type ReactElement } from 'react'
import { useActionData } from 'react-router-dom'
import AlertError from './AlertError'

function UserFormGeneralError(): ReactElement | null {
  const error = useRef<UserFormErrorMessages>()
  const actionData = useActionData() as { errors: UserFormErrorMessages }

  if (actionData?.errors !== undefined) {
    error.current = actionData.errors
  }

  if (error.current?.message) {
    return <AlertError errorMessage={error.current.message} />
  }

  return null
}

export default UserFormGeneralError
