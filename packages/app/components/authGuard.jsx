import React, { useEffect } from 'react'
import { useFirebase } from '../provider/firebase'
import { useRouter } from 'solito/router'
import LoadingScreen from './LoadingScreen'

const ProtectedRoute = ({ children }) => {
  const { user } = useFirebase()
  const router = useRouter()

  useEffect(() => {
    console.log(user)
    if (!user) {
      // Redirect to the login page
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return <LoadingScreen />
  }

  return children
}

export default ProtectedRoute
