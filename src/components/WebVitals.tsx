'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log Core Web Vitals to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
      })
    }

    // In production, send to Google Analytics
    // gtag is already declared in Analytics.tsx
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      })
    }
  })

  return null
}
