import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import BusinessCard from '@/components/BusinessCard';
import { EstimateCalculator } from '@/components/EstimateCalculator';
import { getFeaturedBusinesses } from '@/data/businesses';
import { getAllBlogArticles } from '@/data/blog-articles';
import Logo from '@/components/Logo';

export default function Home() {
  const featuredBusinesses = getFeaturedBusinesses();
  const recentArticles = getAllBlogArticles().slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <Logo height={60} width={180} />
              <p className="text-sm text-gray-900 mt-1">
                Ann Arbor&apos;s Premier Painting Directory
              </p>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/categories"
                className="text-gray-900 hover:text-blue-600 font-medium"
              >
                Categories
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 hover:text-blue-600 font-medium"
              >
                Blog
              </Link>
              <Link
                href="/articles"
                className="text-gray-900 hover:text-blue-600 font-medium"
              >
                Resources
              </Link>
              <Link
                href="/for-painters"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                For Painters
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Find Trusted Painters in Ann Arbor
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Connect with verified, professional painting contractors for your
            residential or commercial project. Quality workmanship, guaranteed
            results.
          </p>
        </div>
        <SearchBar />
      </section>

      {/* Featured Listings */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
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
              className="text-blue-600 hover:text-blue-700 font-semibold"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <EstimateCalculator />
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
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-500 transform hover:-translate-y-2 group"
              >
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.strategicPurpose}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(article.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Are You a Painter?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join Ann Arbor&apos;s premier painting directory and grow your business
            with quality leads from local customers.
          </p>
          <Link
            href="/for-painters"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            Learn More About Listing Your Business
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo height={50} width={150} />
            <p className="text-gray-700 mt-4">
              Ann Arbor&apos;s trusted directory for finding professional painting
              contractors.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Customers</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/listings" className="hover:text-white">
                  Find a Painter
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white">
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-white">
                  Helpful Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Painters</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/for-painters" className="hover:text-white">
                  List Your Business
                </Link>
              </li>
              <li>
                <Link href="/for-painters#pricing" className="hover:text-white">
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
