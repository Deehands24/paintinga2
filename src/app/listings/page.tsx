import Link from 'next/link';
import BusinessCard from '@/components/BusinessCard';
import { getBusinesses } from '@/lib/sanity-data';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'All Painting Contractors in Ann Arbor | PaintingA2',
  description:
    'Browse all verified painting contractors in Ann Arbor. Compare services, read reviews, and find the perfect painter for your project.',
};

export default async function ListingsPage() {
  const businesses = await getBusinesses();
  const featuredBusinesses = businesses.filter((b) => b.featured);
  const otherBusinesses = businesses.filter((b) => !b.featured);

  return (
    <div className="min-h-screen gradient-subtle">
      <PageHeader
        navLinks={[
          { href: '/', label: 'Home' },
          { href: '/articles', label: 'Resources' },
          { href: '/blog', label: 'Blog' }
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-umich-navy mb-4">
            Ann Arbor Painting Contractors
          </h1>
          <p className="text-xl text-gray-700">
            Browse {businesses.length} verified professional painters in Ann Arbor, Michigan
          </p>
        </div>

        {featuredBusinesses.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-8 h-8 text-umich-maize" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h2 className="text-3xl font-bold text-umich-navy">
                Featured Painters
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredBusinesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-3xl font-bold text-umich-navy mb-8">
            All Painters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </section>

        <div className="mt-16 bg-gradient-to-r from-umich-navy to-umich-navy rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Are You a Painter?</h2>
          <p className="text-xl mb-8">
            Get more leads and grow your business with PaintingA2
          </p>
          <Link
            href="/for-painters"
            className="inline-block bg-white text-umich-navy font-bold px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors"
          >
            List Your Business
          </Link>
        </div>
      </main>
    </div>
  );
}
