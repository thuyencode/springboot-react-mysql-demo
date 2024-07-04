import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'

function UserActions({ userId }: { userId: number }): ReactElement {
  return (
    <>
      <Link to={`/user/${userId}`}>
        <button className='btn btn-primary btn-sm gap-1'>
          <Icon className='text-lg' icon={'mdi:eye'} />
          View
        </button>
      </Link>
      <Link to={`/edit/${userId}`}>
        <button className='btn btn-info btn-sm gap-1'>
          <Icon className='text-lg' icon={'mdi:edit'} />
          Edit
        </button>
      </Link>
      <Link to={`/delete/${userId}`}>
        <button className='btn btn-outline btn-error btn-sm gap-1'>
          <Icon className='text-lg' icon={'mdi:delete'} />
          Delete
        </button>
      </Link>
    </>
  )
}

export default UserActions
