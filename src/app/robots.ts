import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/checkout/'],
      },
    ],
    sitemap: 'https://paintinga2.com/sitemap.xml',
    // LLMs.txt file available at https://paintinga2.com/llms.txt for AI discoverability
  };
}
