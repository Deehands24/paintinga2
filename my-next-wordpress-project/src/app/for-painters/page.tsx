import Link from 'next/link';
import { pricingTiers } from '@/data/pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Painters - List Your Business | PaintingA2',
  description:
    'Grow your painting business with PaintingA2. Get more leads, enhance your online presence, and connect with customers in Ann Arbor, MI.',
};

export default function ForPaintersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">PaintingA2</h1>
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link
                href="/listings"
                className="text-gray-700 hover:text-blue-600"
              >
                Browse Painters
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Grow Your Painting Business in Ann Arbor
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Join PaintingA2 and connect with homeowners and businesses actively
            searching for professional painting services.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            View Pricing Plans
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why List Your Business on PaintingA2?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enhanced Online Presence
              </h3>
              <p className="text-gray-700">
                Build a comprehensive profile with photos, service descriptions,
                and customer reviews to showcase your expertise and attract more
                clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Improved Local Visibility
              </h3>
              <p className="text-gray-700">
                Appear in local searches when Ann Arbor residents and businesses
                are actively looking for painting services. Be discovered when it
                matters most.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Build Trust & Credibility
              </h3>
              <p className="text-gray-700">
                Display verification badges, BBB ratings, and customer reviews.
                Stand out as a trusted professional in the Ann Arbor community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Boost Your SEO
              </h3>
              <p className="text-gray-700">
                A listing on PaintingA2 is a high-quality citation that helps
                improve your search engine rankings and drives more traffic to
                your business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quality Leads
              </h3>
              <p className="text-gray-700">
                Connect with motivated customers who are ready to hire. Our
                directory attracts serious buyers, not just browsers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Brand Awareness
              </h3>
              <p className="text-gray-700">
                Get featured in our spotlight articles and homepage. Increase
                your brand recognition throughout the Ann Arbor market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Select the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.tier}
                className={`rounded-2xl shadow-xl ${
                  tier.tier === 'premier'
                    ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white ring-4 ring-blue-600 ring-offset-4'
                    : 'bg-white'
                } ${tier.tier === 'premier' ? 'transform scale-105' : ''}`}
              >
                <div className="p-8">
                  {tier.tier === 'premier' && (
                    <div className="inline-block bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h3
                    className={`text-3xl font-bold mb-2 ${
                      tier.tier === 'premier' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="mb-6">
                    {tier.price.monthly === 0 ? (
                      <div
                        className={`text-5xl font-bold ${
                          tier.tier === 'premier' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        FREE
                      </div>
                    ) : (
                      <>
                        <div
                          className={`text-5xl font-bold ${
                            tier.tier === 'premier'
                              ? 'text-white'
                              : 'text-gray-900'
                          }`}
                        >
                          ${tier.price.monthly}
                          <span
                            className={`text-xl font-normal ${
                              tier.tier === 'premier'
                                ? 'text-blue-100'
                                : 'text-gray-600'
                            }`}
                          >
                            /month
                          </span>
                        </div>
                        <p
                          className={`mt-1 ${
                            tier.tier === 'premier'
                              ? 'text-blue-100'
                              : 'text-gray-600'
                          }`}
                        >
                          or ${tier.price.yearly}/year (Save $
                          {tier.price.monthly * 12 - tier.price.yearly})
                        </p>
                      </>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <svg
                            className={`w-6 h-6 flex-shrink-0 ${
                              tier.tier === 'premier'
                                ? 'text-yellow-400'
                                : 'text-green-500'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            className={`w-6 h-6 flex-shrink-0 ${
                              tier.tier === 'premier'
                                ? 'text-blue-300'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        <span
                          className={`text-sm ${
                            tier.tier === 'premier'
                              ? feature.included
                                ? 'text-white'
                                : 'text-blue-200'
                              : feature.included
                              ? 'text-gray-700'
                              : 'text-gray-400'
                          }`}
                        >
                          {feature.feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-lg font-bold transition-colors ${
                      tier.tier === 'premier'
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : tier.tier === 'pro'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    }`}
                  >
                    {tier.tier === 'basic'
                      ? 'Claim Your Listing'
                      : tier.tier === 'pro'
                      ? 'Get Started'
                      : 'Go Premier'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the painters who are already growing their business with
            PaintingA2. Get started today with our risk-free 30-day trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Plans
            </a>
            <a
              href="mailto:info@paintinga2.com"
              className="inline-block bg-white text-gray-900 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 PaintingA2.com. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            {' | '}
            <Link href="/listings" className="hover:text-blue-600">
              Browse Painters
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
