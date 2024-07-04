import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'

function AlertError({
  errorMessage
}: {
  errorMessage?: string
}): ReactElement | null {
  if (errorMessage === undefined) {
    return null
  }

  return (
    <div className='alert alert-error gap-1 rounded-md py-1' role='alert'>
      <Icon className='text-xl' icon={'bxs:error'} />
      <span>{errorMessage}</span>
    </div>
  )
}

export default AlertError
