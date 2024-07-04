import { type ReactElement } from 'react'
import UsersTableRows from './UsersTableRows'

function UsersTable(): ReactElement {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <UsersTableRows />
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable
