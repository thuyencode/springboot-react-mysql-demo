import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'

function AlertError({ errorMessage }: { errorMessage: string }): ReactElement {
  return (
    <div className='alert alert-error gap-1 rounded-md py-1' role='alert'>
      <Icon className='text-xl' icon={'bxs:error'} />
      <span>{errorMessage}</span>
    </div>
  )
}

export default AlertError
