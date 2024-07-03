import { type ReactElement } from 'react'
import UsersTable from './components/UsersTable'

function HomePage(): ReactElement {
  return (
    <div className='hero-content flex-col' role='banner'>
      <h2>This is the home page</h2>

      <UsersTable />
    </div>
  )
}

export default HomePage
