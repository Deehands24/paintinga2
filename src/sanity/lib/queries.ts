import { defineQuery } from 'next-sanity'

// Get all companies
export const COMPANIES_QUERY = defineQuery(`
  *[_type == "company"] | order(featured desc, name asc) {
    _id,
    name,
    slug,
    phone,
    address,
    city,
    state,
    zip,
    bbbRating,
    description,
    services,
    tier,
    verified,
    featured,
    website,
    email,
    socialMedia,
    photos[] {
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions { width, height }
        }
      },
      alt,
      caption
    },
    yearsInBusiness
  }
`)

// Get company by slug
export const COMPANY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "company" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    phone,
    address,
    city,
    state,
    zip,
    bbbRating,
    description,
    services,
    tier,
    verified,
    featured,
    website,
    email,
    socialMedia,
    photos[] {
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions { width, height }
        }
      },
      alt,
      caption
    },
    yearsInBusiness
  }
`)

// Get companies by service category
export const COMPANIES_BY_SERVICE_QUERY = defineQuery(`
  *[_type == "company" && $service in services] | order(featured desc, name asc) {
    _id,
    name,
    slug,
    phone,
    address,
    city,
    state,
    description,
    services,
    tier,
    verified,
    featured,
    yearsInBusiness
  }
`)

// Get featured companies
export const FEATURED_COMPANIES_QUERY = defineQuery(`
  *[_type == "company" && featured == true] | order(name asc) {
    _id,
    name,
    slug,
    phone,
    city,
    state,
    description,
    services,
    tier,
    verified,
    yearsInBusiness
  }
`)

// Get companies by tier
export const COMPANIES_BY_TIER_QUERY = defineQuery(`
  *[_type == "company" && tier == $tier] | order(name asc) {
    _id,
    name,
    slug,
    phone,
    city,
    state,
    description,
    services,
    tier,
    verified,
    featured,
    yearsInBusiness
  }
`)

// Get all slugs for static generation
export const COMPANY_SLUGS_QUERY = defineQuery(`
  *[_type == "company" && defined(slug.current)].slug.current
`)

// ========== ARTICLE QUERIES ==========

// Get all articles
export const ARTICLES_QUERY = defineQuery(`
  *[_type == "article"] | order(publishedDate desc) {
    _id,
    title,
    slug,
    category,
    publishedDate,
    strategicPurpose,
    excerpt,
    mainImage {
      mediaType,
      image {
        asset->{
          _id,
          url,
          metadata {
            lqip,
            dimensions { width, height }
          }
        },
        alt,
        hotspot,
        crop
      },
      video {
        asset->{
          _id,
          url,
          size,
          mimeType
        },
        alt,
        posterImage {
          asset->{
            _id,
            url,
            metadata {
              lqip,
              dimensions { width, height }
            }
          },
          hotspot,
          crop
        }
      }
    },
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      },
      _type == "inlineImage" => {
        ...,
        asset->
      }
    },
    seo
  }
`)

// Get article by slug
export const ARTICLE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    publishedDate,
    strategicPurpose,
    excerpt,
    mainImage {
      mediaType,
      image {
        asset->{
          _id,
          url,
          metadata {
            lqip,
            dimensions { width, height }
          }
        },
        alt,
        hotspot,
        crop
      },
      video {
        asset->{
          _id,
          url,
          size,
          mimeType
        },
        alt,
        posterImage {
          asset->{
            _id,
            url,
            metadata {
              lqip,
              dimensions { width, height }
            }
          },
          hotspot,
          crop
        }
      }
    },
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      },
      _type == "inlineImage" => {
        ...,
        asset->
      }
    },
    seo
  }
`)

// Get articles by category
export const ARTICLES_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "article" && category == $category] | order(publishedDate desc) {
    _id,
    title,
    slug,
    category,
    publishedDate,
    excerpt,
    mainImage {
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions { width, height }
        }
      },
      alt
    }
  }
`)

// Get recent articles (limit)
export const RECENT_ARTICLES_QUERY = defineQuery(`
  *[_type == "article"] | order(publishedDate desc) [0...$limit] {
    _id,
    title,
    slug,
    category,
    publishedDate,
    excerpt,
    mainImage {
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions { width, height }
        }
      },
      alt
    }
  }
`)

// Get all article slugs for static generation
export const ARTICLE_SLUGS_QUERY = defineQuery(`
  *[_type == "article" && defined(slug.current)].slug.current
`)
