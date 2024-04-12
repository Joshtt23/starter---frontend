import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAnalytics, trackPageView } from '../../provider/firebaseAnalytics'
import ProtectedRoute from '../../components/authGuard'
import DashboardLayout from '../../layouts/DashboardLayout'
import DashboardHome from './DashboardHome'

const DashboardScreen = () => {
  const [activeTab, setActiveTab] = useState('home')
  const router = useRouter()
  useAnalytics()

  useEffect(() => {
    // Check if there's a tab query parameter and set it as the active tab
    const tab = router.query.tab
    if (tab && typeof tab === 'string') {
      setActiveTab(tab)
    }
  }, [router.query.tab]) // Re-run effect when tab query parameter changes

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
      case 'profile':
        console.log('Profile tab')
        return <DashboardHome />
      case 'subscription':
        console.log('Subscription tab')
        return <DashboardHome />
      case 'settings':
        console.log('Settings tab')
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
