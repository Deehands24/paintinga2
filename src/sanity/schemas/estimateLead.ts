// Schema for Estimate Lead form submissions
// Add this to your Sanity Studio project's schema folder

export default {
    name: 'estimateLead',
    title: 'Estimate Leads',
    type: 'document',
    fields: [
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
        },
        {
            name: 'contactPhone',
            title: 'Contact Phone',
            type: 'string',
        },
        {
            name: 'businessName',
            title: 'Business Name (Source)',
            type: 'string',
        },
        {
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Interior', value: 'interior' },
                    { title: 'Exterior', value: 'exterior' },
                ],
            },
        },
        {
            name: 'squareFootage',
            title: 'Square Footage',
            type: 'number',
        },
        {
            name: 'wallCondition',
            title: 'Wall Condition',
            type: 'string',
        },
        {
            name: 'numDoors',
            title: 'Number of Doors',
            type: 'number',
        },
        {
            name: 'numWindows',
            title: 'Number of Windows',
            type: 'number',
        },
        {
            name: 'paintQuality',
            title: 'Paint Quality',
            type: 'string',
        },
        {
            name: 'includeCabinets',
            title: 'Include Cabinets',
            type: 'boolean',
        },
        {
            name: 'numCabinetDoors',
            title: 'Number of Cabinet Doors',
            type: 'number',
        },
        {
            name: 'numCabinetDrawers',
            title: 'Number of Cabinet Drawers',
            type: 'number',
        },
        {
            name: 'estimateMin',
            title: 'Estimate Min ($)',
            type: 'number',
        },
        {
            name: 'estimateMax',
            title: 'Estimate Max ($)',
            type: 'number',
        },
        {
            name: 'sourceUrl',
            title: 'Source URL',
            type: 'url',
        },
        {
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'New', value: 'new' },
                    { title: 'Contacted', value: 'contacted' },
                    { title: 'Converted', value: 'converted' },
                    { title: 'Closed', value: 'closed' },
                ],
            },
            initialValue: 'new',
        },
    ],
    preview: {
        select: {
            email: 'contactEmail',
            phone: 'contactPhone',
            date: 'submittedAt',
        },
        prepare({ email, phone, date }) {
            return {
                title: email || phone || 'Unknown Contact',
                subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
            };
        },
    },
};
