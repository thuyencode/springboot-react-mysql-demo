import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import AlertError from './AlertError'
import useUserFormContext from './hook/useUserFormContext'

function UserFormUsernameField(): ReactElement {
  const { getUsernameFieldError } = useUserFormContext()

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

      <AlertError errorMessage={getUsernameFieldError()} />
    </div>
  )
}

export default UserFormUsernameField
