import UserForm from '@/components/UserForm'
import { type ReactElement } from 'react'

function EditPage(): ReactElement {
  return (
    <div className='hero-content flex-col gap-10' role='banner'>
      <UserForm>
        <UserForm.Title title="Edit user's info" />
        <UserForm.GeneralError />
        <UserForm.NameField />
        <UserForm.UsernameField />
        <UserForm.EmailField />
        <UserForm.Actions />
      </UserForm>
    </div>
  )
}

export default EditPage
