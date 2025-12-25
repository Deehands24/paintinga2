import Link from 'next/link';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { getArticles } from '@/lib/sanity-data';

export const metadata: Metadata = {
  title: 'Painting Resources & Articles | PaintingA2',
  description:
    'Expert guides, tips, and advice for homeowners and business owners. Learn about hiring painters, ROI, and professional painting services in Ann Arbor.',
};

export default async function ArticlesPage() {
  // Filter for resource/educational articles only
  const allArticles = await getArticles();
  const articles = allArticles.filter(article =>
    ['Benefits', 'Hiring Tips', 'Commercial'].includes(article.category)
  );
  return (
    <div className="min-h-screen gradient-subtle">
      <PageHeader
        navLinks={[
          { href: '/', label: 'Home' },
          { href: '/listings', label: 'Browse Painters' },
          { href: '/blog', label: 'Blog' }
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-umich-navy mb-4">
            Resources & Articles
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Expert guides, tips, and insights to help you make informed decisions about your painting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              {article.mainImage ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.mainImage.url}
                    alt={article.mainImage.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-umich-navy to-umich-maize h-48 flex items-center justify-center">
                  <span className="text-8xl">📄</span>
                </div>
              )}
              <div className="p-6">
                <div className="text-sm font-semibold text-umich-navy mb-2">
                  {article.category}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-umich-navy transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {article.excerpt || article.strategicPurpose || ''}
                </p>
                <span className="inline-flex items-center text-umich-navy font-semibold">
                  Read More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-umich-navy rounded-2xl p-12 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold text-umich-maize mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">
            Find trusted, professional painters in Ann Arbor
          </p>
          <Link
            href="/listings"
            className="inline-block bg-umich-maize text-umich-navy font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
          >
            Browse Painters
          </Link>
        </div>
      </main>
    </div>
  );
}
