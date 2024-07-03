import { createBrowserRouter } from 'react-router-dom'
import RouteErrorBoundary from './boundaries/RouteErrorBoundary'
import PageContainer from './layout/PageContainer'
import homePageRoute from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageContainer />,
    errorElement: <RouteErrorBoundary />,
    children: [{ index: true, ...homePageRoute }]
  }
])

export default router
