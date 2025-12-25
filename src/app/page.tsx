import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import BusinessCard from '@/components/BusinessCard';
import { EstimateCalculator } from '@/components/EstimateCalculator';
import { getFeaturedBusinesses, getRecentArticles } from '@/lib/sanity-data';
import Image from 'next/image';

export default async function Home() {
  const featuredBusinesses = await getFeaturedBusinesses();
  const recentArticles = await getRecentArticles(3);

  return (
    <div className="min-h-screen gradient-subtle">
      {/* Header */}
      <header className="bg-umich-navy shadow-md border-b-4 border-umich-maize">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-umich-maize">PaintingA2</h1>
              <p className="text-sm text-gray-300 mt-1">
                Ann Arbor&apos;s Premier Painting Directory
              </p>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/categories"
                className="text-white hover:text-umich-maize font-medium transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-umich-maize font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/articles"
                className="text-white hover:text-umich-maize font-medium transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/for-painters"
                className="bg-umich-maize text-umich-navy px-4 py-2 rounded-lg hover:bg-yellow-400 font-semibold transition-all shadow-md"
              >
                For Painters
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Van Graphics */}
      <section className="gradient-hero py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 hidden lg:block">
          <Image
            src="/paintinga2van.jpeg"
            alt="Professional painters unloading equipment"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-5xl font-bold text-umich-maize mb-6 drop-shadow-lg">
            Find Trusted Painters in Ann Arbor
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Connect with verified, professional painting contractors for your
            residential or commercial project. Quality workmanship, guaranteed
            results.
          </p>
        </div>
        <div className="relative z-10">
          <SearchBar />
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Painters
              </h2>
              <p className="text-gray-900 mt-2">
                Top-rated professionals serving the Ann Arbor community
              </p>
            </div>
            <Link
              href="/listings"
              className="text-umich-navy hover:text-umich-maize font-semibold"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-section">
        <div className="max-w-7xl mx-auto">
          <EstimateCalculator />
        </div>
      </section>

      {/* Affiliate CTA - Extra Revenue Stream */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-yellow-50 border-t-4 border-umich-maize">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-umich-navy mb-4">
            Want Multiple Quotes to Compare?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Get free estimates from multiple pre-screened painters in minutes. Compare prices, reviews, and availability.
          </p>
          <a
            href="https://www.homeadvisor.com/c.Painting.Ann+Arbor.MI.-12005.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-umich-navy text-umich-maize font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors text-lg shadow-lg"
          >
            Get 3 Free Quotes Now →
          </a>
          <p className="text-sm text-gray-600 mt-3">
            No obligation • Fast & free • Compare and save
          </p>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Recent Articles
            </h2>
            <Link
              href="/blog"
              className="text-umich-navy hover:text-umich-maize font-semibold"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 hover:border-umich-maize transform hover:-translate-y-2 group"
              >
                <div className="mb-3">
                  <span className="inline-block bg-yellow-100 text-umich-navy text-xs font-semibold px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-umich-navy">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt || article.strategicPurpose || ''}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(article.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="inline-flex items-center text-umich-navy font-semibold group-hover:text-umich-maize">
                    Read More
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-umich-navy relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1/4 opacity-15 hidden lg:block">
          <Image
            src="/paintinga2van (2).jpeg"
            alt="Painters at work"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-umich-maize mb-4">
            Are You a Painter?
          </h2>
          <p className="text-xl text-white mb-8">
            Join Ann Arbor&apos;s premier painting directory and grow your business
            with quality leads from local customers.
          </p>
          <Link
            href="/for-painters"
            className="inline-block bg-umich-maize text-umich-navy font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg shadow-lg"
          >
            Learn More About Listing Your Business
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-umich-navy border-t-4 border-umich-maize text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-umich-maize mb-2">PaintingA2</h3>
            <p className="text-gray-300 mt-4">
              Ann Arbor&apos;s trusted directory for finding professional painting
              contractors.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-umich-maize">For Customers</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/listings" className="hover:text-umich-maize transition-colors">
                  Find a Painter
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-umich-maize transition-colors">
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-umich-maize transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-umich-maize transition-colors">
                  Helpful Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-umich-maize">For Painters</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/for-painters" className="hover:text-umich-maize transition-colors">
                  List Your Business
                </Link>
              </li>
              <li>
                <Link href="/for-painters#pricing" className="hover:text-umich-maize transition-colors">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 PaintingA2.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
