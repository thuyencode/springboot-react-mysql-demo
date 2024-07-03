/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type UserFormErrorMessages } from '@/libs/types'
import { Icon } from '@iconify/react'
import { useRef, type ReactElement } from 'react'
import { useActionData } from 'react-router-dom'
import AlertError from './AlertError'

function UserFormUsernameField(): ReactElement {
  const error = useRef<UserFormErrorMessages>()
  const actionData = useActionData() as { error: UserFormErrorMessages }

  if (actionData?.error !== undefined) {
    error.current = actionData.error
  }

  return (
    <div className='space-y-2'>
      <label className='font-light' htmlFor='username'>
        Choose your username
      </label>
      <div className='input input-bordered flex items-center gap-2'>
        <Icon className='text-lg' icon={'mdi:alternate-email'} />
        <input
          className='grow'
          type='text'
          id='username'
          name='username'
          placeholder='Username...'
          minLength={3}
          maxLength={255}
        />
      </div>
      {error.current?.usernameError ? (
        <AlertError errorMessage={error.current.usernameError} />
      ) : null}
    </div>
  )
}

export default UserFormUsernameField
