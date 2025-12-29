# Sanity Webhook Setup for On-Demand Revalidation

This guide will help you set up Sanity webhooks to automatically revalidate your Next.js pages when content is published in Sanity.

## What This Does

When you publish or update content in Sanity (blog posts, company listings), the webhook will automatically trigger Next.js to regenerate those specific pages. This means:

- ✅ **Instant updates** - Changes appear immediately (no waiting)
- ✅ **Better performance** - Pages are still statically generated and cached
- ✅ **Improved SEO** - Fast page loads with fresh content
- ✅ **No manual rebuilds** - No need to redeploy your entire site

## Prerequisites

1. Your Next.js app must be deployed to Vercel (or another hosting platform)
2. You need access to your Sanity project dashboard
3. You need the `SANITY_REVALIDATE_SECRET` configured in your environment variables

## Step 1: Generate a Secure Secret (Production Only)

For production, you need to generate a random secret. Run this command locally:

```bash
openssl rand -base64 32
```

Copy the output and save it - you'll need it in the next steps.

## Step 2: Add Secret to Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Name:** `SANITY_REVALIDATE_SECRET`
   - **Value:** The secret you generated in Step 1
   - **Environments:** Select Production (and Preview if you want)
4. Click **Save**
5. **Important:** Redeploy your site for the environment variable to take effect

## Step 3: Configure Sanity Webhook

1. Go to your Sanity project dashboard: https://www.sanity.io/manage
2. Select your project (ngn8qkf8)
3. Navigate to **API** → **Webhooks**
4. Click **Create webhook** or **Add webhook**
5. Configure the webhook:

   **Name:** `Next.js Revalidation - Production`

   **URL:** `https://paintinga2.com/api/revalidate?secret=YOUR_SECRET_HERE`

   Replace `YOUR_SECRET_HERE` with the secret you generated in Step 1.

   **Dataset:** `production`

   **Trigger on:** Select **Create**, **Update**, and **Delete**

   **Filter:** (optional, but recommended for better performance)
   ```groq
   _type == "article" || _type == "company"
   ```
   This ensures the webhook only fires for blog posts and company listings.

   **Projection:** (optional)
   ```groq
   {
     _type,
     "slug": slug.current
   }
   ```
   This sends only the necessary data to your webhook endpoint.

   **HTTP method:** `POST`

   **API version:** `2025-12-23` (or your current API version)

   **Include drafts:** `No` (unchecked)

6. Click **Save**

## Step 4: Test the Webhook

1. In your Sanity Studio, edit an existing blog post or create a new one
2. **Publish** the changes
3. Wait a few seconds
4. Visit your website and refresh the blog listing page - you should see the changes immediately!

## Monitoring & Debugging

### Check Webhook Logs in Sanity

1. Go to your Sanity webhook settings
2. Click on your webhook
3. Scroll down to **Deliveries** to see recent webhook requests and responses
4. A successful response should show `200 OK` with JSON like:
   ```json
   {
     "revalidated": true,
     "paths": ["/blog", "/blog/your-article-slug"],
     "now": 1234567890
   }
   ```

### Check Vercel Function Logs

1. Go to your Vercel project dashboard
2. Navigate to **Deployments** → Click your latest deployment
3. Click **Functions** tab
4. Find `/api/revalidate` and check the logs

### Common Issues

**401 Unauthorized Error**
- The secret in the webhook URL doesn't match `SANITY_REVALIDATE_SECRET`
- Make sure you redeployed after adding the environment variable

**500 Internal Server Error**
- Check Vercel function logs for detailed error messages
- Ensure `SANITY_REVALIDATE_SECRET` is set in Vercel

**Webhook fires but pages don't update**
- Check that you're publishing (not just saving drafts) in Sanity
- Try clearing your browser cache
- Check Network tab in browser dev tools for cache headers

## Development Setup (Optional)

For local development with webhooks:

1. Use a tool like [ngrok](https://ngrok.com/) to expose your localhost:
   ```bash
   ngrok http 3000
   ```

2. Create a separate webhook in Sanity with the ngrok URL:
   ```
   https://your-ngrok-url.ngrok.io/api/revalidate?secret=your-local-secret
   ```

3. In your `.env.local` file, the secret can be simple:
   ```
   SANITY_REVALIDATE_SECRET=local-dev-secret
   ```

## What Gets Revalidated?

The webhook automatically revalidates:

- **For Article/Blog Posts:**
  - `/blog` (blog listing page)
  - `/blog/[slug]` (specific article page)
  - `/articles` (articles page)
  - `/sitemap.xml` (sitemap)

- **For Company Listings:**
  - `/listings` (listings page)
  - `/listings/[slug]` (specific company page)
  - `/` (home page - for featured companies)
  - `/sitemap.xml` (sitemap)

## Security Notes

- Never commit your `SANITY_REVALIDATE_SECRET` to Git
- Use different secrets for production and development
- The webhook endpoint verifies the secret before revalidating
- Optional: Add `SANITY_WEBHOOK_SECRET` for webhook signature verification (advanced)

## Need Help?

If you run into issues:
1. Check the webhook delivery logs in Sanity
2. Check the function logs in Vercel
3. Ensure all environment variables are set correctly
4. Make sure you redeployed after adding environment variables
