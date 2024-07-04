import { deleteUser } from '@/libs/api'
import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function UserActions({ userId }: { userId: string }): ReactElement {
  const navigate = useNavigate()

  function onClick(): void {
    deleteUser({ id: userId })
      .then(() => {
        navigate('/', { replace: true })
      })
      .catch((_) => {
        navigate('/404')
      })
  }

  return (
    <>
      <Link to={`/edit/${userId}`}>
        <button className='btn btn-info btn-sm gap-1'>
          <Icon className='text-lg' icon={'mdi:edit'} />
          Edit
        </button>
      </Link>
      <button
        className='btn btn-outline btn-error btn-sm gap-1'
        onClick={onClick}
      >
        <Icon className='text-lg' icon={'mdi:delete'} />
        Delete
      </button>
    </>
  )
}

export default UserActions
