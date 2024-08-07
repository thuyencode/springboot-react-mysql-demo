import { Navigate, createBrowserRouter } from 'react-router-dom'
import PageContainer from './layout/PageContainer'
import NotFoundRoutePage from './pages/404'
import addPageRoute from './pages/Add'
import editPageRoute from './pages/Edit'
import homePageRoute from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageContainer />,
    children: [
      { index: true, ...homePageRoute },
      { path: '/add', ...addPageRoute },
      { path: '/edit/:id', ...editPageRoute },
      { path: '/404', element: <NotFoundRoutePage /> },
      { path: '*', element: <Navigate to={'/404'} /> }
    ]
  }
])

export default router
