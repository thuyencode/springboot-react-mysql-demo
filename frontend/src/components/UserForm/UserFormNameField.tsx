import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import AlertError from './AlertError'
import useUserFormContext from './UserForm.hook'

function UserFormNameField(): ReactElement {
  const { nameFieldValue, nameFieldError } = useUserFormContext()

  return (
    <div className='space-y-2'>
      <label className='font-light' htmlFor='name'>
        What&apos;s your name?
      </label>
      <div className='input input-bordered flex items-center gap-2'>
        <Icon className='text-lg' icon={'mdi:user'} />
        <input
          className='grow'
          type='text'
          id='name'
          name='name'
          placeholder='Name...'
          defaultValue={nameFieldValue}
          minLength={3}
          maxLength={255}
        />
      </div>

      <AlertError errorMessage={nameFieldError} />
    </div>
  )
}

export default UserFormNameField
