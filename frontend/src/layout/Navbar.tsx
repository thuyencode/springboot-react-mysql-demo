import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(): ReactElement {
  return (
    <nav className='navbar px-20 shadow-xl' role='navigation'>
      <div className='navbar-start text-lg font-medium'>
        React + Spring Boot
      </div>
      <div className='navbar-end gap-5'>
        <NavLink
          className={({ isActive }: { isActive: boolean }) =>
            isActive
              ? 'link link-primary font-semibold no-underline'
              : 'link-hover link font-medium'
          }
          to={'/'}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? 'btn btn-disabled gap-1' : 'btn btn-outline gap-1'
          }
          to={'/add'}
        >
          <Icon className='text-lg' icon={'mdi:user-add'} />
          Add User
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
