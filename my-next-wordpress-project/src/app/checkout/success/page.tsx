'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-600">
            Thank you for subscribing to PaintingA2
          </p>
        </div>

        {/* Success Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What happens next?
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Check Your Email
                </h3>
                <p className="text-gray-600">
                  You&apos;ll receive a confirmation email with your receipt and subscription details shortly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  We&apos;ll Contact You
                </h3>
                <p className="text-gray-600">
                  Our team will reach out within 24 hours to set up your business profile and get you started.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Build Your Profile
                </h3>
                <p className="text-gray-600">
                  Add your business details, photos, and information to create an amazing listing that attracts customers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Start Getting Leads
                </h3>
                <p className="text-gray-600">
                  Your listing will go live and you&apos;ll start appearing in search results for customers looking for painting services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">
            Questions or need help?
          </h3>
          <p className="text-gray-700 mb-4">
            Our support team is here to help you get the most out of your listing.
          </p>
          <a
            href="mailto:info@paintinga2.com"
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            info@paintinga2.com
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            Go to Homepage
          </Link>
          <Link
            href="/listings"
            className="inline-block bg-white text-blue-600 border-2 border-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-center"
          >
            Browse Listings
          </Link>
        </div>

        {sessionId && (
          <p className="text-center text-sm text-gray-500 mt-8">
            Order ID: {sessionId.substring(0, 20)}...
          </p>
        )}
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
