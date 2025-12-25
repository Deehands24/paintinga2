import Link from 'next/link';
import { categories } from '@/data/categories';
import PageHeader from '@/components/PageHeader';
import Logo from '@/components/Logo';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <PageHeader
        navLinks={[
          { href: '/categories', label: 'Categories', active: true },
          { href: '/blog', label: 'Blog' },
          { href: '/articles', label: 'Resources' },
          { href: '/for-painters', label: 'For Painters' }
        ]}
      />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Painting Services
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Browse our complete directory of painting services available in Ann Arbor.
            Find the perfect painting contractor for your specific project needs.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:border-umich-navy transform hover:-translate-y-2 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-900 text-base leading-relaxed">
                  {category.description}
                </p>
                <span className="inline-flex items-center mt-6 text-umich-navy font-semibold group-hover:text-umich-navy">
                  View Painters
                  <svg
                    className="w-5 h-5 ml-1 transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Are You a Painter?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join Ann Arbor&apos;s premier painting directory and grow your business
            with quality leads from local customers.
          </p>
          <Link
            href="/for-painters"
            className="inline-block bg-white text-umich-navy font-bold px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors text-lg"
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
            <p className="text-gray-400 mt-4">
              Ann Arbor&apos;s trusted directory for finding professional painting
              contractors.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Customers</h4>
            <ul className="space-y-2 text-gray-400">
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
            <ul className="space-y-2 text-gray-400">
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
