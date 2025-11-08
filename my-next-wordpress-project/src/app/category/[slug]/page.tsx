import Link from 'next/link';
import { notFound } from 'next/navigation';
import BusinessCard from '@/components/BusinessCard';
import { getCategoryBySlug, categories } from '@/data/categories';
import { getBusinessesByCategory } from '@/data/businesses';
import type { Metadata } from 'next';
import Logo from '@/components/Logo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} in Ann Arbor | PaintingA2`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryBusinesses = getBusinessesByCategory(category.id);

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
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/listings" className="hover:text-blue-600">Listings</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{category.name}</li>
          </ol>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {category.description}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">{categoryBusinesses.length}</span> painters offering {category.name.toLowerCase()} services
          </p>
        </div>

        {categoryBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <p className="text-xl text-gray-600 mb-6">
              No painters found in this category yet.
            </p>
            <Link
              href="/listings"
              className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse All Painters
            </Link>
          </div>
        )}

        {/* Categories Grid */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Other Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .filter((cat) => cat.id !== category.id)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-500 transform hover:-translate-y-2 group"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{cat.description}</p>
                  <span className="inline-flex items-center mt-4 text-blue-600 font-semibold group-hover:text-blue-700">
                    View Painters
                    <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
