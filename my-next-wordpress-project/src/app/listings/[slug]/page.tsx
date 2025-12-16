import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBusinessBySlug, businesses } from '@/data/businesses';
import { EstimateCalculator } from '@/components/EstimateCalculator';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return businesses.map((business) => ({
    slug: business.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) {
    return {
      title: 'Business Not Found',
    };
  }

  return {
    title: `${business.name} - Ann Arbor Painting | PaintingA2`,
    description: business.description.substring(0, 155),
  };
}

export default async function ListingPage({ params }: PageProps) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        navLinks={[
          { href: '/', label: 'Home' },
          { href: '/listings', label: 'All Listings' }
        ]}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-umich-navy">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/listings" className="hover:text-umich-navy">
                Listings
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{business.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Business Header */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {business.name}
                  </h1>
                  <div className="flex items-center gap-4 flex-wrap">
                    {business.featured && (
                      <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured
                      </span>
                    )}
                    {business.verified && (
                      <span className="inline-flex items-center bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified License & Insurance
                      </span>
                    )}
                    {business.bbbRating && (
                      <span className="inline-flex items-center bg-yellow-100 text-umich-navy text-sm font-semibold px-3 py-1 rounded-full">
                        BBB {business.bbbRating}
                      </span>
                    )}
                    {business.tier === 'premier' && (
                      <span className="inline-flex items-center bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                        Premier Member
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {business.yearsInBusiness && (
                <div className="mb-6">
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">
                      {business.yearsInBusiness}+ years
                    </span>{' '}
                    serving the Ann Arbor community
                  </p>
                </div>
              )}

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {business.description}
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Services Offered
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {business.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5 text-umich-navy flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-900 font-medium capitalize">
                      {service.replace('-', ' ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <a
                      href={`tel:${business.phone.replace(/[^0-9]/g, '')}`}
                      className="text-lg font-semibold text-umich-navy hover:text-umich-navy"
                    >
                      {business.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5"
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
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Address</p>
                    <p className="font-medium text-gray-900">
                      {business.address}
                      <br />
                      {business.city}, {business.state}{' '}
                      {business.zip && business.zip}
                    </p>
                  </div>
                </div>

                {business.website && (
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Website</p>
                      <a
                        href={business.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-umich-navy hover:text-umich-navy"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <a
                  href={`tel:${business.phone.replace(/[^0-9]/g, '')}`}
                  className="block w-full bg-umich-navy text-white text-center font-semibold py-3 px-4 rounded-lg hover:bg-umich-navy transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Generation Form - Only for Premier Members */}
        {business.tier === 'premier' && (
          <section className="mt-12">
            <EstimateCalculator businessName={business.name} />
          </section>
        )}
      </main>
    </div>
  );
}
