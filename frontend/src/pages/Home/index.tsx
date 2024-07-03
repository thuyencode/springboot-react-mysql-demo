import { getUsers } from '@/libs/api'
import { type User } from '@/libs/types'
import HomePage from './components/HomePage'

/* eslint-disable @typescript-eslint/no-non-null-assertion */
interface ProductPageLoader {
  request: { signal: AbortSignal }
}

async function loader({
  request: { signal }
}: ProductPageLoader): Promise<User[]> {
  return getUsers({ signal })
}

const homePageRoute = {
  loader,
  element: <HomePage />
}

export default homePageRoute
