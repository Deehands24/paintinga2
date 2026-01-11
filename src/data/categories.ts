import { Category } from '@/types/directory';

export const categories: Category[] = [
  {
    id: 'residential',
    name: 'Residential Painting',
    slug: 'residential',
    description: 'Professional painting services for homes, apartments, and residential properties in Ann Arbor.',
  },
  {
    id: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial',
    description: 'Expert commercial painting for businesses, offices, retail spaces, and commercial properties.',
  },
  {
    id: 'interior',
    name: 'Interior Painting',
    slug: 'interior',
    description: 'Transform your indoor spaces with professional interior painting services.',
  },
  {
    id: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior',
    description: 'Protect and beautify your property with expert exterior painting and finishing.',
  },
  {
    id: 'cabinets',
    name: 'Cabinet Refinishing',
    slug: 'cabinets',
    description: 'Specialized cabinet painting and refinishing to update your kitchen or bathroom.',
  },
  {
    id: 'deck-fence',
    name: 'Deck & Fence Staining',
    slug: 'deck-fence',
    description: 'Professional staining and finishing services for decks, fences, and outdoor wood structures.',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}
