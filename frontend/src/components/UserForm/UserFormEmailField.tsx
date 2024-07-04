import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import AlertError from './AlertError'
import useUserFormContext from './UserForm.hook'

function UserFormEmailField(): ReactElement {
  const { emailFieldValue, emailFieldError } = useUserFormContext()

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
          defaultValue={emailFieldValue}
          minLength={3}
          maxLength={255}
        />
      </div>

      <AlertError errorMessage={emailFieldError} />
    </div>
  )
}

export default UserFormEmailField
