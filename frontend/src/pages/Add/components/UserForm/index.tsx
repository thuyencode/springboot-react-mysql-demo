import { type PropsWithChildren, type ReactElement } from 'react'
import { Form } from 'react-router-dom'
import UserFormActions from './UserFormActions'
import UserFormEmailField from './UserFormEmailField'
import UserFormGeneralError from './UserFormGeneralError'
import UserFormNameField from './UserFormNameField'
import UserFormTitle from './UserFormTitle'
import UserFormUsernameField from './UserFormUsernameField'

function UserForm({ children }: PropsWithChildren): ReactElement {
  return (
    <Form className='w-screen max-w-[500px] space-y-5' method='post'>
      {children}
    </Form>
  )
}

UserForm.Title = UserFormTitle
UserForm.NameField = UserFormNameField
UserForm.UsernameField = UserFormUsernameField
UserForm.EmailField = UserFormEmailField
UserForm.Actions = UserFormActions
UserForm.GeneralError = UserFormGeneralError

export default UserForm
