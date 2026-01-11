import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex flex-col">
      <PageHeader
        navLinks={[
          { href: '/', label: 'Home' },
          { href: '/listings', label: 'Browse Painters' }
        ]}
      />

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <svg
              className="mx-auto h-32 w-32 text-umich-navy"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Error Message */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-block bg-umich-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-umich-navy transition-colors"
            >
              Go to Homepage
            </Link>
            <Link
              href="/listings"
              className="inline-block bg-white text-umich-navy border-2 border-umich-navy font-semibold px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors"
            >
              Browse Painters
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <Link
                href="/listings"
                className="text-umich-navy hover:text-umich-navy hover:underline"
              >
                → Browse All Painters
              </Link>
              <Link
                href="/categories"
                className="text-umich-navy hover:text-umich-navy hover:underline"
              >
                → Service Categories
              </Link>
              <Link
                href="/blog"
                className="text-umich-navy hover:text-umich-navy hover:underline"
              >
                → Blog & Articles
              </Link>
              <Link
                href="/for-painters"
                className="text-umich-navy hover:text-umich-navy hover:underline"
              >
                → For Painters
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">
            Need help? Email us at{' '}
            <a
              href="mailto:management@paintinga2.com"
              className="text-umich-navy hover:underline"
            >
              management@paintinga2.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
