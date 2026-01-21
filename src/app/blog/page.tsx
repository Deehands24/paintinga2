import Link from 'next/link';
import { getArticles } from '@/lib/sanity-data';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Blog | PaintingA2 - Ann Arbor Painting Tips & Resources',
  description: 'Expert tips, guides, and resources for your Ann Arbor painting project. Learn from the professionals.',
};

// Revalidate this page every hour as a fallback (primary revalidation is on-demand via webhook)
export const revalidate = 3600;

export default async function BlogIndexPage() {
  const allArticles = await getArticles();
  // Filter for blog posts only (exclude resource articles)
  const articles = allArticles.filter(article =>
    !['Benefits', 'Hiring Tips', 'Commercial'].includes(article.category)
  );
  const categories = Array.from(new Set(articles.map(a => a.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <PageHeader
        navLinks={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blog', active: true },
          { href: '/listings', label: 'Listings' }
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/" className="hover:text-umich-navy">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Blog</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PaintingA2 Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, tips, and insights for your Ann Arbor painting project. From choosing the right contractor to understanding the latest trends.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <span className="inline-block bg-umich-navy text-white text-sm font-semibold px-4 py-2 rounded-full">
            All Articles
          </span>
          {categories.map((category) => (
            <span
              key={category}
              className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-300 cursor-pointer transition-colors"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-umich-navy transform hover:-translate-y-2 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-yellow-100 text-umich-navy text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <time dateTime={article.publishedDate}>
                      {new Date(article.publishedDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-umich-navy transition-colors">
                  {article.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt || article.strategicPurpose || ''}
                </p>

                <span className="inline-flex items-center text-umich-navy font-semibold text-sm group-hover:text-umich-navy">
                  Read More
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-umich-navy rounded-lg shadow-xl p-8 md:p-12 text-center border-4 border-umich-maize">
          <h2 className="text-3xl md:text-4xl font-bold text-umich-maize mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white mb-6">
            Connect with Ann Arbor&apos;s top-rated painting professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/listings"
              className="inline-block bg-umich-maize text-umich-navy font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg shadow-lg"
            >
              Browse Painters
            </Link>
            <Link
              href="/for-painters"
              className="inline-block bg-transparent text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-umich-navy transition-colors text-lg shadow-lg border-2 border-white"
            >
              List Your Business
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-umich-navy border-t-4 border-umich-maize text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-umich-maize mb-2">PaintingA2</h3>
            <p className="text-gray-300 mt-4">
              Ann Arbor&apos;s trusted directory for finding professional painting contractors.
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
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 PaintingA2.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
