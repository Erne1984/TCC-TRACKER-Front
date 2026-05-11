import { Link, Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}