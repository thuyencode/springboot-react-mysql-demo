import { useContext } from 'react'
import { UserFormContext, type UserFormContextState } from './UserForm.context'

export default function useUserFormContext(): UserFormContextState {
  const context = useContext(UserFormContext)

  if (context == null) {
    throw new Error('Must be used within UserForm.')
  }

  return context
}
