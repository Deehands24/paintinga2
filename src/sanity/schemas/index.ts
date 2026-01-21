// Export all schemas for Sanity Studio
// Import these in your Sanity Studio's schema index file

import estimateLead from './estimateLead';
import devServicesInquiry from './devServicesInquiry';

export const schemaTypes = [
    estimateLead,
    devServicesInquiry,
    // Add your other existing schemas here
];
