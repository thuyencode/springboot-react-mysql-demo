import { type ReactElement } from 'react'
import UserForm from './components/UserForm'

function AddPage(): ReactElement {
  return (
    <div className='hero-content flex-col gap-10' role='banner'>
      <UserForm>
        <UserForm.Title title='Add a new user' />
        <UserForm.NameField />
        <UserForm.UsernameField />
        <UserForm.EmailField />
        <UserForm.Actions />
      </UserForm>
    </div>
  )
}

export default AddPage
