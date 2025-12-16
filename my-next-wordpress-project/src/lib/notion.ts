import { Client } from '@notionhq/client';
import { Business, ListingTier, ServiceCategory } from '@/types/directory';
import { BlogArticle } from '@/data/blog-articles'; // We might need to adjust types for Articles

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

const DB_LISTINGS = process.env.NOTION_DATABASE_ID_Listings!;
const DB_ARTICLES = process.env.NOTION_DATABASE_ID_Articles!;

export async function getBusinesses(): Promise<Business[]> {
    if (!DB_LISTINGS) return [];

    const response = await notion.databases.query({
        database_id: DB_LISTINGS,
        sorts: [
            {
                property: 'Name',
                direction: 'ascending',
            },
        ],
    });

    return response.results.map((page: any) => {
        const props = page.properties;
        return {
            id: page.id,
            name: props.Name.title[0]?.plain_text || '',
            slug: props.Slug.rich_text[0]?.plain_text || '',
            phone: props.Phone.phone_number || '',
            address: props.Address.rich_text[0]?.plain_text || '',
            city: props.City.rich_text[0]?.plain_text || '',
            state: props.State.rich_text[0]?.plain_text || '',
            description: props.Description.rich_text[0]?.plain_text || '',
            services: props.Services.multi_select.map((s: any) => s.name as ServiceCategory),
            tier: (props.Tier.select?.name as ListingTier) || 'basic',
            verified: props.Verified.checkbox,
            featured: props.Featured.checkbox,
            website: props.Website.url || undefined,
            email: props.Email.email || undefined,
            yearsInBusiness: props.YearsInBusiness.number || undefined,
            // photos: We will handle images later or use external URLs
        };
    });
}

export async function getBusinessBySlug(slug: string): Promise<Business | null> {
    if (!DB_LISTINGS) return null;

    const response = await notion.databases.query({
        database_id: DB_LISTINGS,
        filter: {
            property: 'Slug',
            rich_text: {
                equals: slug,
            },
        },
    });

    if (response.results.length === 0) return null;

    const page: any = response.results[0];
    const props = page.properties;

    return {
        id: page.id,
        name: props.Name.title[0]?.plain_text || '',
        slug: props.Slug.rich_text[0]?.plain_text || '',
        phone: props.Phone.phone_number || '',
        address: props.Address.rich_text[0]?.plain_text || '',
        city: props.City.rich_text[0]?.plain_text || '',
        state: props.State.rich_text[0]?.plain_text || '',
        description: props.Description.rich_text[0]?.plain_text || '',
        services: props.Services.multi_select.map((s: any) => s.name as ServiceCategory),
        tier: (props.Tier.select?.name as ListingTier) || 'basic',
        verified: props.Verified.checkbox,
        featured: props.Featured.checkbox,
        website: props.Website.url || undefined,
        email: props.Email.email || undefined,
        yearsInBusiness: props.YearsInBusiness.number || undefined,
    };
}

// Articles Fetching
export async function getArticles() {
    if (!DB_ARTICLES) return [];

    const response = await notion.databases.query({
        database_id: DB_ARTICLES,
        filter: {
            property: 'Status',
            select: {
                equals: 'Published',
            },
        },
        sorts: [
            {
                property: 'PublishedDate',
                direction: 'descending',
            },
        ],
    });

    return response.results.map((page: any) => {
        const props = page.properties;
        return {
            id: page.id,
            title: props.Title.title[0]?.plain_text || '',
            slug: props.Slug.rich_text[0]?.plain_text || '',
            category: props.Category.select?.name || '',
            publishedDate: props.PublishedDate.date?.start || '',
            strategicPurpose: props.StrategicPurpose.rich_text[0]?.plain_text || '',
            // Content is complex, we will need a block renderer. 
            // For now returning metadata.
        };
    });
}
