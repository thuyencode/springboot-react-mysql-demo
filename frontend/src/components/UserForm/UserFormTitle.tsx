import { type ReactElement } from 'react'

function UserFormTitle({ title }: { title: string }): ReactElement {
  return <h2 className='pb-5 text-center'>{title}</h2>
}

export default UserFormTitle
