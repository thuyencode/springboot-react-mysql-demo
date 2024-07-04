import { createContext } from 'react'

export interface UserFormContextState {
  nameFieldError: string | undefined
  usernameFieldError: string | undefined
  emailFieldError: string | undefined
  generalError: string | undefined
  nameFieldValue: string | undefined
  usernameFieldValue: string | undefined
  emailFieldValue: string | undefined
}

export const UserFormContext = createContext<UserFormContextState | null>(null)
