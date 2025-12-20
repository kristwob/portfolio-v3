import { createClient } from '@sanity/client'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// Global revalidation time: 0 in development for instant updates, 3600 (1 hour) in production
export const revalidateTime = process.env.NODE_ENV === 'production' ? 3600 : 0

// Client with CDN enabled for production (faster reads)
export const client = createClient({
  projectId,
  dataset,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for better performance
  apiVersion: "2024-01-01",
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})

// Preview client for draft content (use in Studio or for preview mode)
export const previewClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: "2024-01-01",
  perspective: 'previewDrafts',
  token: process.env.SANITY_API_TOKEN,
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})
