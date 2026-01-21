import Link from 'next/link';
import { Business } from '@/types/directory';

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <Link href={`/listings/${business.slug}`} className="block group">
      <div className="gradient-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full border border-gray-100 hover:border-umich-maize transform hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-50 to-transparent rounded-bl-full opacity-50"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-umich-navy mb-1 transition-colors">
                {business.name}
              </h3>
              {business.featured && (
                <span className="inline-block bg-umich-maize text-umich-navy text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  ⭐ Featured
                </span>
              )}
            </div>
            {business.bbbRating && (
              <div className="ml-4">
                <div className="bg-umich-navy text-umich-maize text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                  BBB {business.bbbRating}
                </div>
              </div>
            )}
          </div>
        </div>

        {business.verified && (
          <div className="flex items-center gap-2 mb-3">
            <svg
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-green-600 font-medium">
              Verified License & Insurance
            </span>
          </div>
        )}

        <div className="text-sm text-gray-900 mb-3">
          <p className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {business.city}, {business.state}
          </p>
          <p className="flex items-center gap-2 mt-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href={`tel:${business.phone}`} className="hover:text-umich-navy hover:underline transition-colors">
              {business.phone}
            </a>
          </p>
        </div>

        <p className="text-gray-900 text-sm mb-4 line-clamp-3">
          {business.description}
        </p>

        <div className="flex flex-wrap gap-2 relative z-10">
          {business.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="inline-block bg-umich-navy text-white text-xs px-3 py-1.5 rounded-lg capitalize font-medium"
            >
              {service.replace('-', ' ')}
            </span>
          ))}
          {business.services.length > 3 && (
            <span className="inline-block bg-umich-maize text-umich-navy text-xs px-3 py-1.5 rounded-lg font-medium">
              +{business.services.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
