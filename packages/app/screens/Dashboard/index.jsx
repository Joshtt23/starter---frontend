import React, { useState, useCallback } from 'react'
import {
  useAnalytics,
  trackTabChange,
  trackPageView,
} from '../../provider/firebaseAnalytics'
import ProtectedRoute from '../../components/authGuard'
import DashboardLayout from '../../layouts/DashboardLayout'
import DashboardHome from './DashboardHome'

const DashboardScreen = () => {
  const [activeTab, setActiveTab] = useState('home')
  useAnalytics()

  const handleSetActiveTab = (tabName) => {
    const virtualPagePath = `/dashboard/${tabName}`
    const pageTitle = `${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`
    trackPageView(virtualPagePath, pageTitle)
    setActiveTab(tabName)
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <DashboardHome />
      default:
        return <DashboardHome />
    }
  }

  return (
    <ProtectedRoute>
      <DashboardLayout setActiveTab={handleSetActiveTab}>
        {renderTab()}
      </DashboardLayout>
    </ProtectedRoute>
  )
}

export default DashboardScreen
