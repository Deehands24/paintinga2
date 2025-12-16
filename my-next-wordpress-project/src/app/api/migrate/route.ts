import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import { businesses } from '@/data/businesses';

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

const DB_LISTINGS = process.env.NOTION_DATABASE_ID_Listings;

export async function GET() {
    console.log('NOTION_TOKEN:', process.env.NOTION_TOKEN ? 'Set (length ' + process.env.NOTION_TOKEN.length + ')' : 'Not Set');
    console.log('DB_LISTINGS:', DB_LISTINGS);
    console.log('Notion Client keys:', Object.keys(notion));
    if (notion.databases) {
        console.log('Notion databases keys:', Object.keys(notion.databases));
    } else {
        console.log('Notion databases is undefined');
    }

    if (!DB_LISTINGS) {
        return NextResponse.json({ error: 'DB_LISTINGS not set' }, { status: 500 });
    }

    const results = [];
    const errors = [];

    for (const business of businesses) {
        try {
            // Check if exists
            const existing: any = await notion.request({
                path: `databases/${DB_LISTINGS}/query`,
                method: 'post',
                body: {
                    filter: {
                        property: 'Slug',
                        rich_text: {
                            equals: business.slug,
                        },
                    },
                },
            });

            if (existing.results.length > 0) {
                results.push({ name: business.name, status: 'skipped (exists)' });
                continue;
            }

            await notion.pages.create({
                parent: { database_id: DB_LISTINGS },
                properties: {
                    Name: { title: [{ text: { content: business.name } }] },
                    Slug: { rich_text: [{ text: { content: business.slug } }] },
                    Tier: { select: { name: business.tier || 'basic' } },
                    Featured: { checkbox: business.featured || false },
                    Verified: { checkbox: business.verified || false },
                    Phone: { phone_number: business.phone },
                    Address: { rich_text: [{ text: { content: business.address } }] },
                    City: { rich_text: [{ text: { content: business.city } }] },
                    State: { rich_text: [{ text: { content: business.state } }] },
                    Description: { rich_text: [{ text: { content: business.description.substring(0, 2000) } }] }, // Notion limit
                    Services: {
                        multi_select: business.services.map((s) => ({ name: s })),
                    },
                    YearsInBusiness: { number: business.yearsInBusiness || null },
                    Website: { url: business.website || null },
                    Email: { email: business.email || null },
                },
            });
            results.push({ name: business.name, status: 'created' });
        } catch (error: any) {
            console.error(`Failed to migrate ${business.name}:`, error);
            errors.push({ name: business.name, error: error.message });
        }
    }

    return NextResponse.json({ results, errors });
}
