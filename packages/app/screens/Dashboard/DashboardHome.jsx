import React from 'react'
import { logoutUser } from '../../provider/firebaseAuthServices'

const DashboardHome = () => {
  const logout = async () => {
    await logoutUser()
  }

  return (
    <div>
      Dashboard Home
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default DashboardHome
