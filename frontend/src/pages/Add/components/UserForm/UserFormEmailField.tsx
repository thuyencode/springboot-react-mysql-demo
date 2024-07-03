/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type UserFormErrorMessages } from '@/libs/types'
import { Icon } from '@iconify/react'
import { useRef, type ReactElement } from 'react'
import { useActionData } from 'react-router-dom'
import AlertError from './AlertError'

function UserFormEmailField(): ReactElement {
  const error = useRef<UserFormErrorMessages>()
  const actionData = useActionData() as { error: UserFormErrorMessages }

  if (actionData?.error !== undefined) {
    error.current = actionData.error
  }

  return (
    <div className='space-y-2'>
      <label className='font-light' htmlFor='email'>
        Provide your email
      </label>
      <div className='input input-bordered flex items-center gap-2'>
        <Icon className='text-lg' icon={'mdi:email'} />
        <input
          className='grow'
          type='email'
          id='email'
          name='email'
          placeholder='Email...'
          minLength={3}
          maxLength={255}
        />
      </div>
      {error.current?.emailError ? (
        <AlertError errorMessage={error.current.emailError} />
      ) : null}
    </div>
  )
}

export default UserFormEmailField