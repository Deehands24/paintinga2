'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import BusinessCard from '@/components/BusinessCard';
import { client } from '@/sanity/lib/client';
import { COMPANIES_QUERY } from '@/sanity/lib/queries';
import type { Business } from '@/types/directory';
import PageHeader from '@/components/PageHeader';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';

  const [results, setResults] = useState<Business[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAndFilter() {
      setIsLoading(true);
      const companies = await client.fetch(COMPANIES_QUERY);

      // Map to Business type
      let filtered: Business[] = companies.map((company: any) => ({
        id: company._id,
        name: company.name,
        slug: company.slug?.current || company.slug,
        phone: company.phone,
        address: company.address,
        city: company.city,
        state: company.state,
        zip: company.zip,
        bbbRating: company.bbbRating,
        description: company.description,
        services: company.services || [],
        tier: company.tier || 'basic',
        verified: company.verified || false,
        website: company.website,
        email: company.email,
        socialMedia: company.socialMedia,
        photos: company.photos?.map((photo: any) => photo.asset?.url).filter(Boolean) || [],
        featured: company.featured || false,
        yearsInBusiness: company.yearsInBusiness,
      }));

    // Filter by category
    if (category) {
      filtered = filtered.filter((business) =>
        business.services.some((service) => service === category)
      );
    }

    // Filter by search query
    if (query) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(
        (business) =>
          business.name.toLowerCase().includes(lowerQuery) ||
          business.description.toLowerCase().includes(lowerQuery) ||
          business.services.some((service) =>
            service.toLowerCase().includes(lowerQuery)
          )
      );
    }

      setResults(filtered);
      setIsLoading(false);
    }

    fetchAndFilter();
  }, [query, category]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-subtle">
      <PageHeader
        navLinks={[
          { href: '/', label: 'Home' },
          { href: '/listings', label: 'All Listings' }
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-umich-navy mb-4">
            Search Results
          </h1>
          {(query || category) && (
            <div className="flex flex-wrap items-center gap-4">
              {query && (
                <div className="bg-yellow-100 text-umich-navy px-4 py-2 rounded-full">
                  <span className="font-medium">Query:</span> {query}
                </div>
              )}
              {category && (
                <div className="bg-yellow-100 text-umich-navy px-4 py-2 rounded-full capitalize">
                  <span className="font-medium">Category:</span>{' '}
                  {category.replace('-', ' ')}
                </div>
              )}
              <Link
                href="/search"
                className="text-umich-navy hover:text-umich-navy font-medium"
              >
                Clear filters
              </Link>
            </div>
          )}
        </div>

        {results.length > 0 ? (
          <>
            <p className="text-lg text-gray-700 mb-8">
              Found <span className="font-semibold">{results.length}</span>{' '}
              {results.length === 1 ? 'painter' : 'painters'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <svg
              className="mx-auto h-24 w-24 text-gray-400 mb-6"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No Results Found
            </h2>
            <p className="text-gray-600 mb-8">
              We couldn&apos;t find any painters matching your search. Try
              adjusting your filters or browse all painters.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/listings"
                className="bg-umich-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-umich-navy transition-colors"
              >
                Browse All Painters
              </Link>
              <Link
                href="/"
                className="bg-gray-200 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
      <div className="text-xl text-gray-600">Loading...</div>
    </div>}>
      <SearchResults />
    </Suspense>
  );
}
