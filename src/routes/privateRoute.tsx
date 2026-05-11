import { Navigate } from 'react-router-dom'

export function PrivateRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = false

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return children
}