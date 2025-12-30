import { defineQuery } from 'next-sanity'

// Get all companies - Only published content
export const COMPANIES_QUERY = defineQuery(`
  *[
    _type == "company"
    && !(_id in path("drafts.**"))
    && defined(slug.current)
  ] | order(featured desc, name asc) {
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

// Get companies by service category - Only published content
export const COMPANIES_BY_SERVICE_QUERY = defineQuery(`
  *[
    _type == "company"
    && $service in services
    && !(_id in path("drafts.**"))
    && defined(slug.current)
  ] | order(featured desc, name asc) {
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

// Get featured companies - Only published content
export const FEATURED_COMPANIES_QUERY = defineQuery(`
  *[
    _type == "company"
    && featured == true
    && !(_id in path("drafts.**"))
    && defined(slug.current)
  ] | order(name asc) {
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

// Get companies by tier - Only published content
export const COMPANIES_BY_TIER_QUERY = defineQuery(`
  *[
    _type == "company"
    && tier == $tier
    && !(_id in path("drafts.**"))
    && defined(slug.current)
  ] | order(name asc) {
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

// Get all articles - Only published content
export const ARTICLES_QUERY = defineQuery(`
  *[
    _type == "article"
    && !(_id in path("drafts.**"))
    && defined(slug.current)
    && defined(publishedDate)
    && publishedDate <= now()
  ] | order(publishedDate desc) {
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

// Get articles by category - Only published content
export const ARTICLES_BY_CATEGORY_QUERY = defineQuery(`
  *[
    _type == "article"
    && category == $category
    && !(_id in path("drafts.**"))
    && defined(slug.current)
    && defined(publishedDate)
    && publishedDate <= now()
  ] | order(publishedDate desc) {
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
    }
  }
`)

// Get recent articles (limit) - Optimized to show only published, valid content
export const RECENT_ARTICLES_QUERY = defineQuery(`
  *[
    _type == "article"
    && !(_id in path("drafts.**"))
    && defined(slug.current)
    && defined(publishedDate)
    && publishedDate <= now()
  ] | order(publishedDate desc) [0...$limit] {
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
    }
  }
`)

// Get all article slugs for static generation
export const ARTICLE_SLUGS_QUERY = defineQuery(`
  *[_type == "article" && defined(slug.current)].slug.current
`)
