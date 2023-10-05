// import { useAuth } from '@hooks/auth/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {
  const isLoggedIn = true
  // const { isAuthenticated, user } = useAuth();

  if(!isLoggedIn) 
   return <Navigate to="/dashboard" />
  
  return <Outlet />
}
