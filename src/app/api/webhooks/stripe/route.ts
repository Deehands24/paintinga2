import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Lazy initialization to prevent build failures when env vars are missing
function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is not configured');
  }
  return new Stripe(secretKey, {
    apiVersion: '2025-10-29.clover',
  });
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }
    const body = await req.text();
    const headersList = await headers();
    const signature = headersList.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'No signature found' },
        { status: 400 }
      );
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      console.error(`Webhook signature verification failed: ${errorMessage}`);
      return NextResponse.json(
        { error: `Webhook Error: ${errorMessage}` },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        // Get metadata
        const tier = session.metadata?.tier; // 'pro' or 'premier'
        const companyId = session.metadata?.companyId;
        const claimantEmail = session.metadata?.claimantEmail;

        if (tier) {
          try {
            const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
            const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
            const sanityToken = process.env.SANITY_API_TOKEN;

            if (!sanityToken) {
              console.error('SANITY_API_TOKEN is missing. Cannot update user tier.');
              break;
            }

            // If we have a company ID (claiming existing listing), update that specific company
            if (companyId) {
              const mutateUrl = `https://${sanityProjectId}.api.sanity.io/v2024-10-01/data/mutate/${sanityDataset}`;
              const response = await fetch(mutateUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${sanityToken}`,
                },
                body: JSON.stringify({
                  mutations: [
                    {
                      patch: {
                        id: companyId,
                        set: {
                          tier: tier,
                          verified: true,
                          email: claimantEmail || session.customer_details?.email || undefined
                        }
                      }
                    }
                  ]
                })
              });

              if (response.ok) {
                // Success
              } else {
                const errorText = await response.text();
                console.error(`Failed to update company: ${errorText}`);
              }
            } else {
              console.warn('No company ID provided in metadata. Manual follow-up needed.');
            }
          } catch (sanityError) {
            console.error('Failed to update Sanity:', sanityError);
          }
        }
        break;
      }

      case 'customer.subscription.created': {
        // const subscription = event.data.object as Stripe.Subscription;
        // Handle new subscription
        break;
      }

      case 'customer.subscription.updated': {
        // const subscription = event.data.object as Stripe.Subscription;
        // Handle subscription update
        break;
      }

      case 'customer.subscription.deleted': {
        // const subscription = event.data.object as Stripe.Subscription;
        // Handle subscription cancellation
        break;
      }

      case 'invoice.payment_succeeded': {
        // const invoice = event.data.object as Stripe.Invoice;
        // Handle successful payment
        break;
      }

      case 'invoice.payment_failed': {
        // const invoice = event.data.object as Stripe.Invoice;
        // Handle failed payment
        break;
      }

      default:
        // Unhandled event type
        break;
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Webhook handler error:', errorMessage);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
