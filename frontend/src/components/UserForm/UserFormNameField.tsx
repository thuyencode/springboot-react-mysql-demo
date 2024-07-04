import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import AlertError from './AlertError'
import useUserFormContext from './hook/useUserFormContext'

function UserFormNameField(): ReactElement {
  const { getNameFieldError } = useUserFormContext()

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
          minLength={3}
          maxLength={255}
        />
      </div>

      <AlertError errorMessage={getNameFieldError()} />
    </div>
  )
}

export default UserFormNameField
