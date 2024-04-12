import { useEffect } from 'react'
import { logEvent } from 'firebase/analytics'
import { analytics } from './firebaseConfig' // Ensure this is the correct path
import { useRouter } from 'solito/router'

export const trackPageView = (url, title = document.title) => {
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_path: url,
      page_title: title,
      page_location: window.location.href,
    })
  }
}

export const trackEvent = (eventName, params) => {
  if (analytics) {
    logEvent(analytics, eventName, params)
  }
}

export const useAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    if (!router.events) {
      console.log('Router events not supported')
      return
    }

    const handleRouteChange = (url) => {
      trackPageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])
}
