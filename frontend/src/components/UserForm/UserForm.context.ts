import { createContext } from 'react'

export interface UserFormContextState {
  nameFieldError: string | undefined
  usernameFieldError: string | undefined
  emailFieldError: string | undefined
  generalError: string | undefined
}

export const UserFormContext = createContext<UserFormContextState | null>(null)
