import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'

function UserFormActions(): ReactElement {
  return (
    <div className='flex flex-row gap-2 px-10 pt-2'>
      <Link className='btn btn-outline btn-error w-1/2 gap-1' to={'/'}>
        Go Back
        <Icon className='text-lg' icon={'mdi:home'} />
      </Link>
      <button className='btn btn-info w-1/2 gap-1' type='submit'>
        Save
        <Icon className='text-lg' icon={'mdi:content-save'} />
      </button>
    </div>
  )
}

export default UserFormActions
