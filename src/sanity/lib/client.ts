import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ngn8qkf8'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-12-23'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled to get fresh data immediately
  perspective: 'published', // Only fetch published documents
})
