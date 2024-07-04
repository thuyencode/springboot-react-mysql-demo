import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import AlertError from './AlertError'
import useUserFormContext from './UserForm.hook'

function UserFormUsernameField(): ReactElement {
  const { usernameFieldValue, usernameFieldError } = useUserFormContext()

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
          defaultValue={usernameFieldValue}
          minLength={3}
          maxLength={255}
        />
      </div>

      <AlertError errorMessage={usernameFieldError} />
    </div>
  )
}

export default UserFormUsernameField
