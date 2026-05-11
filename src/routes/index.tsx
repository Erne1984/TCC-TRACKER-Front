import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '../layout/MainLayout'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PrivateRoute } from './privateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <PrivateRoute><HomePage /></PrivateRoute>,
      },

      {
        path: 'login',
        element: <LoginPage />,
      },

      {
  path: '*',
  element: <NotFoundPage />,
}
    ],
  },
])