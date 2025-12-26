import { client } from '@/sanity/lib/client'
import {
  COMPANIES_QUERY,
  COMPANY_BY_SLUG_QUERY,
  COMPANIES_BY_SERVICE_QUERY,
  FEATURED_COMPANIES_QUERY,
  COMPANIES_BY_TIER_QUERY,
  ARTICLES_QUERY,
  ARTICLE_BY_SLUG_QUERY,
  ARTICLES_BY_CATEGORY_QUERY,
  RECENT_ARTICLES_QUERY,
} from '@/sanity/lib/queries'
import { Business } from '@/types/directory'

// Article type definition
export interface Article {
  id: string
  title: string
  slug: string
  category: string
  publishedDate: string
  strategicPurpose?: string
  excerpt?: string
  mainImage?: {
    mediaType: 'image' | 'video'
    image?: {
      url: string
      alt: string
      lqip?: string
      dimensions?: { width: number; height: number }
      hotspot?: any
      crop?: any
    }
    video?: {
      url: string
      alt: string
      mimeType?: string
      size?: number
      posterImage?: {
        url: string
        lqip?: string
        dimensions?: { width: number; height: number }
        hotspot?: any
        crop?: any
      }
    }
  }
  body?: any[] // Portable Text content
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

// Map Sanity company data to Business type
function mapSanityCompany(company: any): Business {
  return {
    id: company._id,
    name: company.name,
    slug: company.slug?.current || company.slug,
    phone: company.phone,
    address: company.address,
    city: company.city,
    state: company.state,
    zip: company.zip,
    bbbRating: company.bbbRating,
    description: company.description,
    services: company.services || [],
    tier: company.tier || 'basic',
    verified: company.verified || false,
    website: company.website,
    email: company.email,
    socialMedia: company.socialMedia,
    photos: company.photos?.map((photo: any) => photo.asset?.url).filter(Boolean) || [],
    featured: company.featured || false,
    yearsInBusiness: company.yearsInBusiness,
  }
}

export async function getBusinesses(): Promise<Business[]> {
  const companies = await client.fetch(COMPANIES_QUERY)
  return companies.map(mapSanityCompany)
}

export async function getBusinessBySlug(slug: string): Promise<Business | null> {
  const company = await client.fetch(COMPANY_BY_SLUG_QUERY, { slug })
  if (!company) return null
  return mapSanityCompany(company)
}

export async function getBusinessesByCategory(category: string): Promise<Business[]> {
  const companies = await client.fetch(COMPANIES_BY_SERVICE_QUERY, { service: category })
  return companies.map(mapSanityCompany)
}

export async function getFeaturedBusinesses(): Promise<Business[]> {
  const companies = await client.fetch(FEATURED_COMPANIES_QUERY)
  return companies.map(mapSanityCompany)
}

export async function getBusinessesByTier(tier: string): Promise<Business[]> {
  const companies = await client.fetch(COMPANIES_BY_TIER_QUERY, { tier })
  return companies.map(mapSanityCompany)
}

export async function searchBusinesses(query: string): Promise<Business[]> {
  // Get all businesses and filter client-side for now
  // You could create a more sophisticated GROQ query with text search if needed
  const allBusinesses = await getBusinesses()
  const lowerQuery = query.toLowerCase()

  return allBusinesses.filter(
    (business) =>
      business.name.toLowerCase().includes(lowerQuery) ||
      business.description.toLowerCase().includes(lowerQuery) ||
      business.services.some((service) => service.includes(lowerQuery))
  )
}

// ========== ARTICLE FUNCTIONS ==========

// Map Sanity article data to Article type
function mapSanityArticle(article: any): Article {
  // Handle mainImage based on mediaType
  let mainImage: Article['mainImage'] = undefined

  if (article.mainImage) {
    const mediaType = article.mainImage.mediaType || 'image'

    if (mediaType === 'image' && article.mainImage.image?.asset) {
      mainImage = {
        mediaType: 'image',
        image: {
          url: article.mainImage.image.asset.url,
          alt: article.mainImage.image.alt || article.title,
          lqip: article.mainImage.image.asset.metadata?.lqip,
          dimensions: article.mainImage.image.asset.metadata?.dimensions,
          hotspot: article.mainImage.image.hotspot,
          crop: article.mainImage.image.crop,
        },
      }
    } else if (mediaType === 'video' && article.mainImage.video?.asset) {
      mainImage = {
        mediaType: 'video',
        video: {
          url: article.mainImage.video.asset.url,
          alt: article.mainImage.video.alt || article.title,
          mimeType: article.mainImage.video.asset.mimeType,
          size: article.mainImage.video.asset.size,
          posterImage: article.mainImage.video.posterImage?.asset
            ? {
                url: article.mainImage.video.posterImage.asset.url,
                lqip: article.mainImage.video.posterImage.asset.metadata?.lqip,
                dimensions: article.mainImage.video.posterImage.asset.metadata?.dimensions,
                hotspot: article.mainImage.video.posterImage.hotspot,
                crop: article.mainImage.video.posterImage.crop,
              }
            : undefined,
        },
      }
    }
  }

  return {
    id: article._id,
    title: article.title,
    slug: article.slug?.current || article.slug,
    category: article.category,
    publishedDate: article.publishedDate,
    strategicPurpose: article.strategicPurpose,
    excerpt: article.excerpt,
    mainImage,
    body: article.body,
    seo: article.seo,
  }
}

export async function getArticles(): Promise<Article[]> {
  const articles = await client.fetch(ARTICLES_QUERY)
  return articles.map(mapSanityArticle)
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const article = await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug })
  if (!article) return null
  return mapSanityArticle(article)
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const articles = await client.fetch(ARTICLES_BY_CATEGORY_QUERY, { category })
  return articles.map(mapSanityArticle)
}

export async function getRecentArticles(limit: number = 5): Promise<Article[]> {
  const articles = await client.fetch(RECENT_ARTICLES_QUERY, { limit })
  return articles.map(mapSanityArticle)
}
