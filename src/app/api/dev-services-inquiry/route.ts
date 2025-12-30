import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, contactName, email, phone, service } = body;

    // Validate required fields
    if (!businessName || !contactName || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Service name mapping for readability
    const serviceNames: { [key: string]: string } = {
      'full-rebuild': 'Complete Website Rebuild + Marketing',
      'website-only': 'Website Development Only',
      'marketing-only': 'Digital Marketing Campaign Only',
      'seo-geo': 'SEO + GEO Optimization',
      'maintenance': 'Website Maintenance & Updates',
      'consultation': 'Free Consultation First',
    };

    // Create email content
    const emailContent = `
🚨 NEW DEVELOPMENT SERVICES INQUIRY 🚨

Business Name: ${businessName}
Contact Name: ${contactName}
Email: ${email}
Phone: ${phone}
Service Requested: ${serviceNames[service] || service}

---
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Detroit' })}

CONTACT THEM IMMEDIATELY!
    `.trim();

    // Log to console for now (you can see this in your terminal)
    console.log('\n' + '='.repeat(60));
    console.log(emailContent);
    console.log('='.repeat(60) + '\n');

    // TODO: Add email service integration here
    // Options:
    // 1. Resend (recommended, simple setup)
    // 2. SendGrid
    // 3. AWS SES
    // 4. Mailgun

    // For now, we'll use a webhook to send to your phone
    // You can set up a service like Zapier or Make.com to receive this webhook
    // and send you an SMS/email notification

    try {
      // If you have a webhook URL (from Zapier, Make.com, etc.), uncomment and use:
      // await fetch('YOUR_WEBHOOK_URL_HERE', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     businessName,
      //     contactName,
      //     email,
      //     phone,
      //     service: serviceNames[service],
      //     timestamp: new Date().toISOString(),
      //   }),
      // });

      // Save to Sanity as a lead document
      if (process.env.SANITY_API_TOKEN) {
        const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
        const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

        await fetch(
          `https://${sanityProjectId}.api.sanity.io/v2024-10-01/data/mutate/${sanityDataset}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
            },
            body: JSON.stringify({
              mutations: [
                {
                  create: {
                    _type: 'devServicesInquiry',
                    businessName,
                    contactName,
                    email,
                    phone,
                    service,
                    serviceName: serviceNames[service],
                    submittedAt: new Date().toISOString(),
                    status: 'new',
                  },
                },
              ],
            }),
          }
        );
      }
    } catch (webhookError) {
      console.error('Failed to send webhook/save to Sanity:', webhookError);
      // Don't fail the request if webhook fails - we still logged it
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received! We will contact you soon.',
    });
  } catch (error) {
    console.error('Error processing dev services inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
