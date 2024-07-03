import { createBrowserRouter } from 'react-router-dom'
import RouteErrorBoundary from './RouteErrorBoundary'
import PageContainer from './layout/PageContainer'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageContainer />,
    errorElement: <RouteErrorBoundary />,
    children: [{ index: true, element: <HomePage /> }]
  }
])

export default router
