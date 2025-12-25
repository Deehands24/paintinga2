'use client';

import Script from 'next/script';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Page tracking component that uses useSearchParams
function PageViewTracker({ measurementId }: { measurementId: string }) {
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

// Google Analytics component
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  if (!measurementId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
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
        <PageViewTracker measurementId={measurementId} />
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

// Track business card clicks (phone, website, etc.)
export function trackBusinessClick(businessName: string, clickType: 'phone' | 'website' | 'email') {
  trackEvent('business_click', {
    event_category: 'Engagement',
    event_label: `${businessName} - ${clickType}`,
    business_name: businessName,
    click_type: clickType,
  });
}

// Track search queries
export function trackSearch(query: string, category?: string) {
  trackEvent('search', {
    event_category: 'Search',
    search_term: query,
    ...(category && { category }),
  });
}

// Track category filtering
export function trackCategoryFilter(category: string) {
  trackEvent('category_filter', {
    event_category: 'Navigation',
    event_label: category,
    category,
  });
}

// Track affiliate link clicks
export function trackAffiliateClick(partner: string, location: string) {
  trackEvent('affiliate_click', {
    event_category: 'Revenue',
    event_label: `${partner} - ${location}`,
    partner,
    location,
  });
}

// Track blog article engagement
export function trackArticleRead(articleTitle: string, scrollDepth?: number) {
  trackEvent('article_read', {
    event_category: 'Content',
    event_label: articleTitle,
    article_title: articleTitle,
    ...(scrollDepth && { scroll_depth: scrollDepth }),
  });
}

// Track estimate calculator step completion
export function trackCalculatorStep(step: number, stepName: string) {
  trackEvent('calculator_step', {
    event_category: 'Lead Generation',
    event_label: `Step ${step}: ${stepName}`,
    step,
    step_name: stepName,
  });
}
