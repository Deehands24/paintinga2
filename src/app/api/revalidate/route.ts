import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

// Sanity webhook payload type
type WebhookPayload = {
  _type: string
  slug?: {
    current: string
  }
}

export async function POST(req: NextRequest) {
  try {
    // Verify the webhook secret
    const secret = req.nextUrl.searchParams.get('secret')
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET

    if (!expectedSecret) {
      console.error('SANITY_REVALIDATE_SECRET not configured')
      return NextResponse.json(
        { error: 'Revalidation secret not configured' },
        { status: 500 }
      )
    }

    if (secret !== expectedSecret) {
      return NextResponse.json(
        { error: 'Invalid secret' },
        { status: 401 }
      )
    }

    // Parse the webhook body
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_WEBHOOK_SECRET
    )

    // Validate signature if webhook secret is configured
    if (process.env.SANITY_WEBHOOK_SECRET && !isValidSignature) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    if (!body?._type) {
      return NextResponse.json(
        { error: 'Invalid webhook payload' },
        { status: 400 }
      )
    }

    // Handle different content types
    const paths: string[] = []

    // Article/Blog post updates
    if (body._type === 'article') {
      // Revalidate blog listing page
      paths.push('/blog')

      // Revalidate specific article if slug exists
      if (body.slug?.current) {
        paths.push(`/blog/${body.slug.current}`)
      }

      // Also revalidate articles page
      paths.push('/articles')
    }

    // Company/Listing updates
    if (body._type === 'company') {
      // Revalidate listings page
      paths.push('/listings')

      // Revalidate specific company if slug exists
      if (body.slug?.current) {
        paths.push(`/listings/${body.slug.current}`)
      }

      // Revalidate home page (featured companies)
      paths.push('/')
    }

    // Revalidate all collected paths
    for (const path of paths) {
      await revalidatePath(path)
      console.log(`Revalidated: ${path}`)
    }

    // Also revalidate the sitemap
    await revalidatePath('/sitemap.xml')

    return NextResponse.json({
      revalidated: true,
      paths,
      now: Date.now(),
    })
  } catch (err: unknown) {
    const error = err as Error
    console.error('Error in revalidate webhook:', error)
    return NextResponse.json(
      { error: 'Error revalidating', message: error.message },
      { status: 500 }
    )
  }
}
