import { type User } from '@/libs/types'
import { type ReactElement } from 'react'
import { useLoaderData } from 'react-router-dom'

function UsersTable(): ReactElement {
  const users = useLoaderData() as User[]

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>@{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable
