import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogArticleBySlug, getAllBlogArticles } from '@/data/blog-articles';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllBlogArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | PaintingA2 Blog`,
    description: article.strategicPurpose,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllBlogArticles();
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PageHeader
        navLinks={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blog' },
          { href: '/listings', label: 'Listings' }
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/" className="hover:text-umich-navy">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-umich-navy">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{article.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <div className="mb-8">
            <span className="inline-block bg-yellow-100 text-umich-navy text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <div className="flex items-center text-gray-600 text-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={article.publishedDate}>
                {new Date(article.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>

          {/* Article Content */}
          <div className="article-content">
            {article.content}
          </div>
        </article>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-umich-navy to-umich-navy rounded-lg shadow-xl p-8 text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-6">
            Browse our directory of trusted Ann Arbor painting professionals
          </p>
          <Link
            href="/listings"
            className="inline-block bg-white text-umich-navy font-bold px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors text-lg shadow-lg"
          >
            Find a Painter
          </Link>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/blog/${relatedArticle.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 hover:border-umich-navy transform hover:-translate-y-2 group"
                >
                  <span className="inline-block bg-yellow-100 text-umich-navy text-xs font-semibold px-2 py-1 rounded-full mb-3">
                    {relatedArticle.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-umich-navy">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {new Date(relatedArticle.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
