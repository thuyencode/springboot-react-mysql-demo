/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getUser } from '@/libs/api'
import { type User, type UserFormErrorMessages } from '@/libs/types'
import { parseUserFormData, sendUserFormData } from '@/libs/utils'
import { redirect, type Params } from 'react-router-dom'
import EditPage from './EditPage'

interface EditPageLoaderActionProps {
  request: Request
  params: Params<string>
}

async function loader({
  params,
  request: { signal }
}: EditPageLoaderActionProps): Promise<User | Response> {
  return await getUser({ id: params.id!, signal }).catch((_) => {
    return redirect('/404')
  })
}

async function action({
  params,
  request
}: EditPageLoaderActionProps): Promise<
  { errors: UserFormErrorMessages } | Response
> {
  const data = await request.formData()

  const editedUser: Omit<User, 'id'> = {
    name: data.get('name') as string,
    username: data.get('username') as string,
    email: data.get('email') as string
  }

  const validationStatus = parseUserFormData(editedUser)

  if (validationStatus !== true) {
    return { errors: validationStatus }
  }

  const serverValidationStatus = await sendUserFormData({
    user: editedUser,
    signal: request.signal,
    method: 'PUT',
    id: params.id!
  })

  if (serverValidationStatus !== true) {
    return { errors: serverValidationStatus }
  }

  return redirect('/')
}

const editPageRoute = {
  loader,
  action,
  element: <EditPage />
}

export default editPageRoute
