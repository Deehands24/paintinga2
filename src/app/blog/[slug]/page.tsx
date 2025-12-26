import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getArticlesByCategory, getArticles } from '@/lib/sanity-data';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { PortableText } from 'next-sanity';
import ArticleMedia from '@/components/ArticleMedia';
import ArticleStructuredData from '@/components/ArticleStructuredData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  // Get Open Graph image - use posterImage for videos, image for images
  let ogImage: string | undefined
  if (article.mainImage) {
    if (article.mainImage.mediaType === 'video' && article.mainImage.video?.posterImage) {
      ogImage = article.mainImage.video.posterImage.url
    } else if (article.mainImage.mediaType === 'image' && article.mainImage.image) {
      ogImage = article.mainImage.image.url
    }
  }

  return {
    title: article.seo?.metaTitle || `${article.title} | PaintingA2 Blog`,
    description: article.seo?.metaDescription || article.excerpt || article.strategicPurpose || '',
    keywords: article.seo?.keywords,
    openGraph: ogImage
      ? {
          images: [ogImage],
        }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getArticlesByCategory(article.category);
  const filteredRelated = relatedArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen gradient-subtle">
      {/* SEO: Structured Data for Rich Results */}
      <ArticleStructuredData
        article={article}
        url={`https://paintinga2.com/blog/${article.slug}`}
      />

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

          {/* Main Image or Video - Optimized with lazy loading */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <ArticleMedia
              mainImage={article.mainImage}
              title={article.title}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>

          {/* Article Content */}
          <div className="article-content prose prose-lg max-w-none">
            {article.body && <PortableText value={article.body} />}
          </div>
        </article>

        {/* CTA Section */}
        <div className="bg-umich-navy rounded-lg shadow-xl p-8 text-center mb-12 border-4 border-umich-maize">
          <h2 className="text-3xl font-bold text-umich-maize mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white mb-6">
            Browse our directory of trusted Ann Arbor painting professionals
          </p>
          <Link
            href="/listings"
            className="inline-block bg-umich-maize text-umich-navy font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg shadow-lg"
          >
            Find a Painter
          </Link>
        </div>

        {/* Related Articles */}
        {filteredRelated.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-umich-navy mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredRelated.map((relatedArticle) => (
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
