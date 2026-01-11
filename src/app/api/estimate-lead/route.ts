import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      contactInfo,
      formData,
      estimate,
      businessName,
      sourceUrl
    } = body;

    // Validate required fields
    if (!contactInfo || (!contactInfo.email && !contactInfo.phone)) {
      return NextResponse.json(
        { error: 'Email or phone number required' },
        { status: 400 }
      );
    }

    if (!estimate || !formData) {
      return NextResponse.json(
        { error: 'Missing estimate or project data' },
        { status: 400 }
      );
    }

    // Create detailed log for console
    const leadLog = `
🎨 NEW PAINTING ESTIMATE LEAD 🎨

Contact Information:
  Email: ${contactInfo.email || 'Not provided'}
  Phone: ${contactInfo.phone || 'Not provided'}

Project Details:
  Square Footage: ${formData.squareFootage} sq ft
  Project Type: ${formData.projectType}
  Wall Condition: ${formData.wallCondition}
  Doors: ${formData.numDoors}
  Windows: ${formData.numWindows}
  Paint Quality: ${formData.paintQuality}
  Include Cabinets: ${formData.includeCabinets ? 'Yes' : 'No'}
  ${formData.includeCabinets ? `Cabinet Doors: ${formData.numCabinetDoors}` : ''}
  ${formData.includeCabinets ? `Cabinet Drawers: ${formData.numCabinetDrawers}` : ''}

Estimate:
  Range: $${estimate.min?.toLocaleString()} - $${estimate.max?.toLocaleString()}

Source:
  Business/Page: ${businessName || 'Homepage'}
  URL: ${sourceUrl}

Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Detroit' })}
    `.trim();

    console.log('\n' + '='.repeat(60));
    console.log(leadLog);
    console.log('='.repeat(60) + '\n');

    // Save to Sanity
    try {
      const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
      const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
      const sanityToken = process.env.SANITY_API_TOKEN;

      if (sanityProjectId && sanityToken) {
        await fetch(
          `https://${sanityProjectId}.api.sanity.io/v2024-10-01/data/mutate/${sanityDataset}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${sanityToken}`,
            },
            body: JSON.stringify({
              mutations: [
                {
                  create: {
                    _type: 'estimateLead',
                    contactEmail: contactInfo.email || null,
                    contactPhone: contactInfo.phone || null,
                    businessName: businessName || 'PaintingA2 Homepage',
                    projectType: formData.projectType,
                    squareFootage: formData.squareFootage,
                    wallCondition: formData.wallCondition,
                    numDoors: formData.numDoors,
                    numWindows: formData.numWindows,
                    paintQuality: formData.paintQuality,
                    includeCabinets: formData.includeCabinets,
                    numCabinetDoors: formData.numCabinetDoors || 0,
                    numCabinetDrawers: formData.numCabinetDrawers || 0,
                    estimateMin: estimate.min,
                    estimateMax: estimate.max,
                    sourceUrl: sourceUrl,
                    submittedAt: new Date().toISOString(),
                    status: 'new',
                  },
                },
              ],
            }),
          }
        );
        console.log('✅ Lead saved to Sanity successfully');
      } else {
        console.warn('⚠️ Sanity credentials not configured - lead not saved to CMS');
      }
    } catch (sanityError) {
      console.error('❌ Failed to save to Sanity:', sanityError);
      // Don't fail the request if Sanity save fails
    }

    // Optional: Send to webhook/email service
    // Uncomment and configure your preferred notification method:

    // try {
    //   await fetch('YOUR_WEBHOOK_URL_HERE', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       type: 'estimate_lead',
    //       contact: contactInfo,
    //       estimate: estimate,
    //       project: formData,
    //       timestamp: new Date().toISOString(),
    //     }),
    //   });
    // } catch (webhookError) {
    //   console.error('Failed to send webhook:', webhookError);
    // }

    return NextResponse.json({
      success: true,
      message: 'Estimate lead received successfully',
    });
  } catch (error) {
    console.error('Error processing estimate lead:', error);
    return NextResponse.json(
      { error: 'Failed to process estimate lead' },
      { status: 500 }
    );
  }
}
