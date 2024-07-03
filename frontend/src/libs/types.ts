import type * as v from 'valibot'
import { type UserFormSchema } from './schema'

export type User = v.InferOutput<typeof UserFormSchema> & { id: number }
