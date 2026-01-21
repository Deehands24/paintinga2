// Schema for Dev Services Inquiry form submissions
// Add this to your Sanity Studio project's schema folder

export default {
    name: 'devServicesInquiry',
    title: 'Dev Services Inquiries',
    type: 'document',
    fields: [
        {
            name: 'businessName',
            title: 'Business Name',
            type: 'string',
        },
        {
            name: 'contactName',
            title: 'Contact Name',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
        },
        {
            name: 'service',
            title: 'Service Code',
            type: 'string',
        },
        {
            name: 'serviceName',
            title: 'Service Name',
            type: 'string',
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
                    { title: 'In Progress', value: 'in_progress' },
                    { title: 'Closed', value: 'closed' },
                ],
            },
            initialValue: 'new',
        },
    ],
    preview: {
        select: {
            title: 'businessName',
            subtitle: 'serviceName',
            date: 'submittedAt',
        },
        prepare({ title, subtitle, date }: { title?: string; subtitle?: string; date?: string }) {
            return {
                title: title || 'Unknown Business',
                subtitle: `${subtitle || 'Unknown Service'} - ${date ? new Date(date).toLocaleDateString() : 'No date'}`,
            };
        },
    },
};
