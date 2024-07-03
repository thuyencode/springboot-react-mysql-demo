import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'

function NotFoundRoutePage(): ReactElement {
  return (
    <div className='hero-content flex-col'>
      <h1 className='text-error'>404 - Not Found</h1>
      <h2 className='text-info'>
        <Link to={'/'}>
          <button className='btn btn-info text-lg'>
            <Icon className='text-xl' icon={'mdi:arrow-left-bold'} />
            Go back to home page
          </button>
        </Link>
      </h2>
    </div>
  )
}

export default NotFoundRoutePage
