import { type User } from '@/libs/types'
import { type ReactElement } from 'react'
import { useLoaderData } from 'react-router-dom'
import UserActions from './UserActions'

function UsersTableRows(): ReactElement {
  const users = useLoaderData() as User[]

  return (
    <>
      {users.map((user) => (
        <tr key={user.username}>
          <th>{user.id}</th>
          <td>{user.name}</td>
          <td>@{user.username}</td>
          <td>{user.email}</td>
          <td className='space-x-2'>
            <UserActions userId={user.id} />
          </td>
        </tr>
      ))}
    </>
  )
}

export default UsersTableRows
