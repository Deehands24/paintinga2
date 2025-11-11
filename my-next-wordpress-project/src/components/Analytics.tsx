'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Internal component that uses useSearchParams
function GoogleAnalyticsInner({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!measurementId) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

    // Send pageview to Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, measurementId]);

  return null;
}

// Wrapper component with Suspense
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  if (!measurementId) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsInner measurementId={measurementId} />
      </Suspense>
    </>
  );
}

// Track custom events (calculator submissions, clicks, etc.)
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// Track lead capture events
export function trackLead(businessName?: string, estimateRange?: { min: number; max: number } | null) {
  trackEvent('lead_capture', {
    event_category: 'Lead Generation',
    event_label: businessName || 'Homepage Calculator',
    value: estimateRange?.min || 0,
    estimate_min: estimateRange?.min,
    estimate_max: estimateRange?.max,
  });
}

// Track payment link clicks
export function trackPaymentClick(tier: string) {
  trackEvent('payment_click', {
    event_category: 'Conversion',
    event_label: `Stripe Payment - ${tier}`,
    value: tier === 'Premier' ? 79 : 29,
  });
}
