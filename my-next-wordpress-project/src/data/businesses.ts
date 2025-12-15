import { Business } from '@/types/directory';

export const businesses: Business[] = [
  {
    id: 'tribble-painting',
    name: 'Tribble Painting Company',
    slug: 'tribble-painting',
    phone: '(734) 555-0100',
    address: 'Ann Arbor',
    city: 'Ann Arbor',
    state: 'MI',
    description:
      'With over 30 years of experience serving the Ann Arbor area, Tribble Painting has built a formidable reputation for excellence. Consistently earning 5-star reviews, clients frequently praise the team\'s professionalism, communication, and meticulous attention to detail. Tribble Painting offers a comprehensive suite of services, including interior, exterior, commercial, and specialized kitchen cabinet painting. The crew is known for punctuality, thorough prep work, and clean job sites.',
    services: ['interior', 'exterior', 'commercial', 'cabinets'],
    tier: 'premier',
    verified: true,
    featured: true,
    yearsInBusiness: 30,
  },
  {
    id: 'mussio-painting',
    name: 'Mussio Painting',
    slug: 'mussio-painting',
    phone: '(734) 995-2646',
    address: 'Ann Arbor',
    city: 'Ann Arbor',
    state: 'MI',
    bbbRating: 'A+',
    description:
      'Mussio Painting is celebrated for its strong attention to detail and ability to deliver a flawless finish. With a crew that has worked together for over sixteen years, they bring a level of cohesion and expertise that clients notice. Customer reviews consistently emphasize the team\'s professionalism, courtesy, and the impeccable quality of their work, often exceeding expectations. Mussio Painting is particularly noted for its skill in handling necessary carpentry repairs alongside painting.',
    services: ['interior', 'exterior', 'residential'],
    tier: 'premier',
    verified: true,
    featured: true,
    yearsInBusiness: 16,
  },
  {
    id: 'wolverine-custom-painting',
    name: 'Wolverine Custom Painting',
    slug: 'wolverine-custom-painting',
    phone: '(734) 555-0102',
    address: 'Ann Arbor',
    city: 'Ann Arbor',
    state: 'MI',
    description:
      'For projects that extend beyond a simple coat of paint, Wolverine Custom Painting is a frequently recommended choice. Their portfolio includes not just painting but also complete renovations, cabinet installation, and even electrical work, making them a versatile contractor for more complex home improvement projects. With over two decades of experience, they are known for their high-quality craftsmanship and integrity.',
    services: ['residential', 'commercial', 'interior', 'exterior', 'cabinets'],
    tier: 'pro',
    verified: true,
    yearsInBusiness: 20,
  },
  {
    id: 'five-star-painting',
    name: 'Five Star Painting',
    slug: 'five-star-painting',
    phone: '(734) 555-0103',
    address: 'Ann Arbor',
    city: 'Ann Arbor',
    state: 'MI',
    bbbRating: 'A+',
    description:
      'Five Star Painting provides professional interior and exterior painting services with a commitment to quality backed by a 2-year warranty. Their experienced team delivers exceptional results for both residential and commercial projects throughout the Ann Arbor area.',
    services: ['interior', 'exterior', 'residential', 'commercial'],
    tier: 'pro',
    verified: true,
  },
  {
    id: 'michigans-best-painting',
    name: "Michigan's Best Painting",
    slug: 'michigans-best-painting',
    phone: '(734) 780-9436',
    address: '320 N Main St',
    city: 'Ann Arbor',
    state: 'MI',
    bbbRating: 'A+',
    description:
      "Michigan's Best Painting is a trusted painting contractor serving Ann Arbor and surrounding areas. With a commitment to quality craftsmanship and customer satisfaction, they provide comprehensive painting services for residential and commercial properties.",
    services: ['residential', 'commercial', 'interior', 'exterior'],
    tier: 'pro',
    verified: true,
  },
  {
    id: 'als-painting',
    name: "Al's Painting, Inc.",
    slug: 'als-painting',
    phone: '(734) 973-9651',
    address: '3160 Pittsview Dr',
    city: 'Ann Arbor',
    state: 'MI',
    bbbRating: 'A+',
    description:
      "Al's Painting, Inc. is a professional painting contractor with years of experience serving the Ann Arbor community. Known for reliability and quality workmanship, they specialize in both interior and exterior painting projects for homes and businesses.",
    services: ['residential', 'commercial', 'interior', 'exterior'],
    tier: 'basic',
    verified: true,
  },
  {
    id: 'pinnacle-house-painters',
    name: 'Pinnacle House Painters',
    slug: 'pinnacle-house-painters',
    phone: '(734) 222-9966',
    address: '1075 Country Club Rd',
    city: 'Ann Arbor',
    state: 'MI',
    bbbRating: 'A+',
    description:
      'Pinnacle House Painters offers professional residential painting services with a focus on quality and customer satisfaction. Their experienced team provides expert interior and exterior painting solutions for homeowners throughout Ann Arbor.',
    services: ['residential', 'interior', 'exterior'],
    tier: 'basic',
    verified: true,
  },
  {
    id: 'eco-house-painting',
    name: 'Eco House Painting',
    slug: 'eco-house-painting',
    phone: '(734) 260-0475',
    address: 'Ann Arbor',
    city: 'Ann Arbor',
    state: 'MI',
    bbbRating: 'A+',
    description:
      'Eco House Painting specializes in environmentally friendly painting solutions using low-VOC and zero-VOC paints. They provide professional painting services while prioritizing the health of your family and the environment.',
    services: ['residential', 'interior', 'exterior'],
    tier: 'pro',
    verified: true,
  },
  {
    id: 'langs-painting',
    name: "Lang's Painting Inc.",
    slug: 'langs-painting',
    phone: '(734) 662-2098',
    address: '1806 Saxon St',
    city: 'Ann Arbor',
    state: 'MI',
    description:
      'A fixture in Ann Arbor since 1990, Lang\'s Painting has over three decades of experience beautifying homes and offices. They offer a wide range of services, including interior and exterior painting, wallpaper installation, and color consultation. Customer testimonials frequently mention the company\'s fast response times, helpful advice on color selection, and fair pricing. Repeat customers value their professionalism and eco-friendly paint options.',
    services: ['residential', 'commercial', 'interior', 'exterior'],
    tier: 'premier',
    verified: true,
    featured: true,
    yearsInBusiness: 34,
  },
  {
    id: 'aaron-babycz-painting',
    name: 'Aaron Babycz Painting',
    slug: 'aaron-babycz-painting',
    phone: '(734) 475-0676',
    address: 'Ann Arbor',
    city: 'Ann Arbor',
    state: 'MI',
    description:
      'Specializing in both residential and commercial projects, Aaron Babycz Painting is known for delivering perfection in painting across Washtenaw County. Their services are comprehensive, covering everything from color consulting and drywall repairs to power washing and wallpaper removal. Client testimonials highlight the team\'s conscientiousness, thoroughness, and ability to complete projects in a timely manner. They are praised for leaving job sites exceptionally clean.',
    services: ['residential', 'commercial', 'interior', 'exterior'],
    tier: 'pro',
    verified: true,
  },
  {
    id: 'paint-it-right',
    name: 'Paint It Right',
    slug: 'paint-it-right',
    phone: '(734) 972-7759',
    address: 'Ann Arbor',
    city: 'Ann Arbor',
    state: 'MI',
    bbbRating: 'A',
    description:
      'Paint It Right is a professional painting contractor serving the Ann Arbor area with quality workmanship and competitive pricing. They provide comprehensive painting services for residential and commercial properties.',
    services: ['residential', 'commercial', 'interior', 'exterior'],
    tier: 'basic',
  },
  {
    id: 'getpro-painting',
    name: 'GetPro Painting',
    slug: 'getpro-painting',
    phone: '(734) 230-2699',
    address: 'Ann Arbor',
    city: 'Ann Arbor',
    state: 'MI',
    description:
      'GetPro Painting offers professional painting services for residential, commercial, and industrial properties. They specialize in a wide range of services including epoxy flooring, making them a versatile choice for diverse project needs.',
    services: ['residential', 'commercial', 'interior', 'exterior'],
    tier: 'basic',
  },
  {
    id: 'collum-painting',
    name: 'Collum Painting III, LLC',
    slug: 'collum-painting',
    phone: '(914) 419-3956',
    address: 'Ann Arbor',
    city: 'Ann Arbor',
    state: 'MI',
    description:
      'Collum Painting III, LLC is a trusted painting contractor providing quality services to the Ann Arbor community. They are known for professional service and attention to detail.',
    services: ['residential', 'commercial', 'interior', 'exterior'],
    tier: 'basic',
    verified: true,
  },
  {
    id: 'tjs-painting-drywall',
    name: 'TJS Painting & Drywall',
    slug: 'tjs-painting-drywall',
    phone: '(734) 769-1131',
    address: '1374 Rosewood St',
    city: 'Ann Arbor',
    state: 'MI',
    description:
      'TJS Painting & Drywall provides comprehensive painting and drywall services for residential and commercial properties. Their expertise in both painting and drywall repair makes them a one-stop solution for complete interior finishing projects.',
    services: ['residential', 'commercial', 'interior'],
    tier: 'basic',
  },
  {
    id: 'neighborhood-painters',
    name: 'Neighborhood Painters',
    slug: 'neighborhood-painters',
    phone: '(734) 276-7464',
    address: '402 Kellogg St',
    city: 'Ann Arbor',
    state: 'MI',
    description:
      'Neighborhood Painters is a local painting contractor dedicated to serving the Ann Arbor community with quality painting services. They provide professional interior and exterior painting for residential properties.',
    services: ['residential', 'interior', 'exterior'],
    tier: 'basic',
  },
];

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((business) => business.slug === slug);
}

export function getBusinessesByCategory(category: string): Business[] {
  return businesses.filter((business) =>
    business.services.some((service) => service === category)
  );
}

export function getFeaturedBusinesses(): Business[] {
  return businesses.filter((business) => business.featured === true);
}

export function getBusinessesByTier(tier: string): Business[] {
  return businesses.filter((business) => business.tier === tier);
}

export function searchBusinesses(query: string): Business[] {
  const lowerQuery = query.toLowerCase();
  return businesses.filter(
    (business) =>
      business.name.toLowerCase().includes(lowerQuery) ||
      business.description.toLowerCase().includes(lowerQuery) ||
      business.services.some((service) => service.includes(lowerQuery))
  );
}
