'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import BusinessCard from '@/components/BusinessCard';
import { businesses } from '@/data/businesses';
import type { Business } from '@/types/directory';
import Logo from '@/components/Logo';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';

  const [results, setResults] = useState<Business[]>([]);

  useEffect(() => {
    let filtered = [...businesses];

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
  }, [query, category]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Logo height={50} width={150} />
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/listings" className="text-gray-700 hover:text-blue-600">
                All Listings
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Search Results
          </h1>
          {(query || category) && (
            <div className="flex flex-wrap items-center gap-4">
              {query && (
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                  <span className="font-medium">Query:</span> {query}
                </div>
              )}
              {category && (
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full capitalize">
                  <span className="font-medium">Category:</span>{' '}
                  {category.replace('-', ' ')}
                </div>
              )}
              <Link
                href="/search"
                className="text-blue-600 hover:text-blue-700 font-medium"
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
                className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
