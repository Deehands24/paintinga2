import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Painting Resources & Articles | PaintingA2',
  description:
    'Expert guides, tips, and advice for homeowners and business owners. Learn about hiring painters, ROI, and professional painting services in Ann Arbor.',
};

const articles = [
  {
    slug: 'spotlight',
    title: 'Spotlight on Ann Arbor\'s Best Painting Professionals',
    description: 'Discover top-rated painting contractors recognized for quality, customer service, and exceptional craftsmanship.',
    category: 'Featured',
    image: '🎨',
  },
  {
    slug: 'benefits',
    title: 'Why Use a Painting Directory?',
    description: 'Learn the smarter way to find Ann Arbor\'s best painters. Save time, compare services, and connect with trusted professionals.',
    category: 'Guide',
    image: '📋',
  },
  {
    slug: 'transform',
    title: 'Transform Your Space with Expert Painting Services',
    description: 'Discover how professional painting delivers 100-150% ROI and can boost your home\'s value significantly.',
    category: 'Home Improvement',
    image: '🏠',
  },
  {
    slug: 'hiring-tips',
    title: '5 Tips for Hiring Trusted Painters in Ann Arbor',
    description: 'Your essential checklist for vetting painters, verifying insurance, getting detailed estimates, and ensuring quality work.',
    category: 'Guide',
    image: '✓',
  },
  {
    slug: 'commercial',
    title: 'Commercial Painting Services: What to Expect',
    description: 'A business owner\'s guide to planning, timing, specialized coatings, and minimizing disruption for commercial projects.',
    category: 'Commercial',
    image: '🏢',
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">PaintingA2</h1>
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/listings" className="text-gray-700 hover:text-blue-600 font-medium">
                Browse Painters
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Resources & Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guides, tips, and insights to help you make informed decisions about your painting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-48 flex items-center justify-center">
                <span className="text-8xl">{article.image}</span>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-blue-600 mb-2">
                  {article.category}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {article.description}
                </p>
                <span className="inline-flex items-center text-blue-600 font-semibold">
                  Read More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">
            Find trusted, professional painters in Ann Arbor
          </p>
          <Link
            href="/listings"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Browse Painters
          </Link>
        </div>
      </main>
    </div>
  );
}
