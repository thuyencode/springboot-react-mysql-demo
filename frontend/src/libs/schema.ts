import * as v from 'valibot'

const REGEX_WHITESPACE_ERROR = 'Must not contains whitespace(s)'

export const UserFormSchema = v.object({
  name: v.pipe(v.string(), v.trim(), v.minLength(3), v.maxLength(255)),
  username: v.pipe(
    v.string(),
    v.trim(),
    v.regex(/[^\s-]/, REGEX_WHITESPACE_ERROR),
    v.minLength(3),
    v.maxLength(255)
  ),
  email: v.pipe(
    v.string(),
    v.trim(),
    v.regex(/[^\s-]/, REGEX_WHITESPACE_ERROR),
    v.email(),
    v.minLength(3),
    v.maxLength(255)
  )
})
