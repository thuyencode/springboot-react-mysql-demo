import { createContext } from 'react'

export interface UserFormContextState {
  getNameFieldError: () => string | undefined
  getUsernameFieldError: () => string | undefined
  getEmailFieldError: () => string | undefined
  getGeneralError: () => string | undefined
}

export const UserFormContext = createContext<UserFormContextState | null>(null)
