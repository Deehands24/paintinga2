import type { Article } from '@/lib/sanity-data'

interface ArticleStructuredDataProps {
  article: Article
  url: string
}

export default function ArticleStructuredData({ article, url }: ArticleStructuredDataProps) {
  // Base article schema
  const articleSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt || article.strategicPurpose || '',
    datePublished: article.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'PaintingA2',
      url: 'https://paintinga2.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PaintingA2',
      logo: {
        '@type': 'ImageObject',
        url: 'https://paintinga2.com/icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  // Add image or video to schema
  if (article.mainImage) {
    if (article.mainImage.mediaType === 'video' && article.mainImage.video) {
      const video = article.mainImage.video
      const posterUrl = video.posterImage?.url
      const videoDimensions = video.posterImage?.dimensions || { width: 1200, height: 630 }

      // Add VideoObject schema for rich video results
      articleSchema.video = {
        '@type': 'VideoObject',
        name: article.title,
        description: article.excerpt || article.strategicPurpose || '',
        thumbnailUrl: posterUrl,
        contentUrl: video.url,
        uploadDate: article.publishedDate,
        width: videoDimensions.width,
        height: videoDimensions.height,
      }

      // Also add thumbnail as main image for social sharing
      if (posterUrl) {
        articleSchema.image = {
          '@type': 'ImageObject',
          url: posterUrl,
          width: videoDimensions.width,
          height: videoDimensions.height,
        }
      }
    } else if (article.mainImage.mediaType === 'image' && article.mainImage.image) {
      const image = article.mainImage.image
      articleSchema.image = {
        '@type': 'ImageObject',
        url: image.url,
        width: image.dimensions?.width || 1200,
        height: image.dimensions?.height || 630,
      }
    }
  }

  // Add keywords if available
  if (article.seo?.keywords && article.seo.keywords.length > 0) {
    articleSchema.keywords = article.seo.keywords.join(', ')
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}
