'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Here you could verify the session with your backend
    // For now, we'll just show the success message
    if (sessionId) {
      setTimeout(() => setLoading(false), 1000);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Confirming your subscription...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600"
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

        {/* Title */}
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Welcome to PaintingA2! 🎉
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          Your subscription is now active. We're excited to help you grow your
          painting business!
        </p>

        {/* Next Steps */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 text-left">
          <h2 className="font-semibold text-gray-900 mb-4">Next Steps:</h2>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">
                1
              </span>
              <span>
                Check your email for your welcome message and login details
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">
                2
              </span>
              <span>
                Reply with your company logo, photos, and business info
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3">
                3
              </span>
              <span>We'll have your profile live within 24 hours</span>
            </li>
          </ol>
        </div>

        {/* Support Info */}
        <div className="mt-6 text-sm text-gray-500">
          <p>
            Questions? Email us at{' '}
            <a
              href="mailto:admin@ges-development.com"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              admin@ges-development.com
            </a>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 space-y-3">
          <Link
            href="/"
            className="block w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go to Homepage
          </Link>
          <a
            href="mailto:admin@ges-development.com?subject=My%20PaintingA2%20Profile"
            className="block w-full py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors"
          >
            Send Profile Info
          </a>
        </div>

        {/* Session ID (for debugging) */}
        {sessionId && (
          <p className="mt-6 text-xs text-gray-400">
            Session ID: {sessionId.slice(0, 20)}...
          </p>
        )}
      </div>
    </div>
  );
}

