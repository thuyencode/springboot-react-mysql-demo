import { type User, type UserFormErrorMessages } from '@/libs/types'
import { parseUserFormData } from '@/libs/utils'
import { redirect } from 'react-router-dom'
import AddPage from './AddPage'

interface AddPageActionProps {
  request: Request
}

async function addUserAction({
  request
}: AddPageActionProps): Promise<{ error: UserFormErrorMessages } | Response> {
  const data = await request.formData()

  const newUser: Omit<User, 'id'> = {
    name: data.get('name') as string,
    username: data.get('username') as string,
    email: data.get('email') as string
  }

  const validationStatus = parseUserFormData(newUser)

  if (validationStatus !== true) {
    return { error: validationStatus }
  }

  return redirect('/')
}

const addPageRoute = {
  action: addUserAction,
  element: <AddPage />
}

export default addPageRoute
