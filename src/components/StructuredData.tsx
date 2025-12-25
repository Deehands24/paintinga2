interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  telephone?: string;
  address?: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    streetAddress?: string;
  };
  description?: string;
  priceRange?: string;
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    ratingCount?: number;
  };
}

interface ArticleSchema {
  '@context': string;
  '@type': string;
  headline: string;
  datePublished: string;
  dateModified: string;
  author: {
    '@type': string;
    name: string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
}

export function LocalBusinessStructuredData({
  name,
  telephone,
  address,
  city,
  state,
  description,
  bbbRating,
}: {
  name: string;
  telephone?: string;
  address?: string;
  city: string;
  state: string;
  description?: string;
  bbbRating?: string;
}) {
  const schema: LocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    ...(telephone && { telephone }),
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: state,
      addressCountry: 'US',
      ...(address && { streetAddress: address }),
    },
    ...(description && { description }),
    ...(bbbRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: bbbRating === 'A+' ? '5' : '4.5',
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleStructuredData({
  headline,
  datePublished,
  dateModified,
}: {
  headline: string;
  datePublished: string;
  dateModified?: string;
}) {
  const schema: ArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'PaintingA2',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PaintingA2',
      logo: {
        '@type': 'ImageObject',
        url: 'https://paintinga2.com/logo.png',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PaintingA2',
    url: 'https://paintinga2.com',
    logo: 'https://paintinga2.com/logo.png',
    description:
      'Ann Arbor\'s Premier Painting Directory - Find trusted, professional painting contractors in Ann Arbor, MI.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ann Arbor',
      addressRegion: 'MI',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'paintinga2@ges-development.com',
      contactType: 'Customer Service',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
