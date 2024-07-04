import { type User, type UserFormErrorMessages } from '@/libs/types'
import { parseUserFormData, sendUserFormData } from '@/libs/utils'
import { redirect } from 'react-router-dom'
import AddPage from './AddPage'

interface AddPageActionProps {
  request: Request
}

async function action({
  request
}: AddPageActionProps): Promise<{ errors: UserFormErrorMessages } | Response> {
  const data = await request.formData()

  const newUser: Omit<User, 'id'> = {
    name: data.get('name') as string,
    username: data.get('username') as string,
    email: data.get('email') as string
  }

  const validationStatus = parseUserFormData(newUser)

  if (validationStatus !== true) {
    return { errors: validationStatus }
  }

  const serverValidationStatus = await sendUserFormData({
    user: newUser,
    signal: request.signal,
    method: 'POST'
  })

  if (serverValidationStatus !== true) {
    return { errors: serverValidationStatus }
  }

  return redirect('/')
}

const addPageRoute = {
  action,
  element: <AddPage />
}

export default addPageRoute
