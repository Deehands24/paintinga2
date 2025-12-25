export type ListingTier = 'basic' | 'pro' | 'premier';

export type ServiceCategory =
  | 'residential'
  | 'commercial'
  | 'interior'
  | 'exterior'
  | 'cabinets'
  | 'deck-fence';

export interface Business {
  id: string;
  name: string;
  slug: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip?: string;
  bbbRating?: string;
  description: string;
  services: ServiceCategory[];
  tier: ListingTier;
  verified?: boolean;
  website?: string;
  email?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  photos?: string[];
  reviews?: Review[];
  featured?: boolean;
  yearsInBusiness?: number;
}

export interface Review {
  id: string;
  businessId: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified?: boolean;
}

export interface Category {
  id: ServiceCategory;
  name: string;
  slug: string;
  description: string;
  icon?: string;
}

export interface PricingTier {
  name: string;
  tier: ListingTier;
  price: {
    monthly: number;
    yearly: number;
  };
  features: {
    feature: string;
    included: boolean;
  }[];
}
