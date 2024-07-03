import { createBrowserRouter } from 'react-router-dom'
import PageContainer from './layout/PageContainer'
import NotFoundRoutePage from './pages/404'
import addPageRoute from './pages/Add'
import homePageRoute from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageContainer />,
    children: [
      { index: true, ...homePageRoute },
      { path: '/add', ...addPageRoute },
      { path: '*', element: <NotFoundRoutePage /> }
    ]
  }
])

export default router
