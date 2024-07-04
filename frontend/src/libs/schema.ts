import * as v from 'valibot'

const WHITESPACE_ERROR = 'Must not contains whitespace(s)'
const MIN_LENGTH_ERROR = 'The minium length must longer than 3 characters'
const MAX_LENGTH_ERROR = 'The maximum length must not exceeds 255 characters'
const EMAIL_ERROR = 'Must be a well-formed email address'

export const UserFormSchema = v.object({
  name: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(3, MIN_LENGTH_ERROR),
    v.maxLength(255, MAX_LENGTH_ERROR)
  ),
  username: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(3, MIN_LENGTH_ERROR),
    v.maxLength(255, MAX_LENGTH_ERROR),
    v.check((str) => !str.includes(' '), WHITESPACE_ERROR)
  ),
  email: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(3, MIN_LENGTH_ERROR),
    v.maxLength(255, MAX_LENGTH_ERROR),
    v.check((str) => !str.includes(' '), WHITESPACE_ERROR),
    v.email(EMAIL_ERROR)
  )
})
