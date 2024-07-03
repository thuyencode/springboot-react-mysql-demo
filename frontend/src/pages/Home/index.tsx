import { getUsers } from '@/libs/api'
import { type User } from '@/libs/types'
import HomePage from './HomePage'

interface ProductPageLoaderProps {
  request: Request
}

async function loader({
  request: { signal }
}: ProductPageLoaderProps): Promise<User[]> {
  return await getUsers({ signal })
}

const homePageRoute = {
  loader,
  element: <HomePage />
}

export default homePageRoute
