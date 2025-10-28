# Stripe Integration Guide

This guide explains how to set up and use the Stripe integration for PaintingA2.

## 🚀 Quick Setup

### 1. Install Dependencies

Dependencies are already installed:
- `stripe` - Server-side Stripe SDK
- `@stripe/stripe-js` - Client-side Stripe SDK

### 2. Set Up Environment Variables

Create a `.env.local` file in the project root (copy from `.env.local.example`):

```bash
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Product Price IDs
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_your_pro_price_id
NEXT_PUBLIC_STRIPE_PREMIER_PRICE_ID=price_your_premier_price_id
```

### 3. Get Your Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Click **Developers** → **API keys**
3. Copy your **Publishable key** and **Secret key**
4. Use **Test mode** keys for development

### 4. Create Products in Stripe

#### Pro Plan ($29/month):
1. Go to **Products** in Stripe Dashboard
2. Click **+ Add product**
3. Fill in:
   - Name: `PaintingA2 Pro Membership`
   - Description: `Professional directory listing with verified badge`
   - Price: `$29.00 USD`
   - Billing: `Monthly`
4. Click **Save product**
5. Copy the **Price ID** (starts with `price_`)
6. Add to `.env.local` as `NEXT_PUBLIC_STRIPE_PRO_PRICE_ID`

#### Premier Plan ($79/month):
Repeat the same process with:
- Name: `PaintingA2 Premier Membership`
- Price: `$79.00 USD`
- Copy Price ID to `NEXT_PUBLIC_STRIPE_PREMIER_PRICE_ID`

### 5. Set Up Webhook

1. Go to **Developers** → **Webhooks** in Stripe Dashboard
2. Click **+ Add endpoint**
3. Endpoint URL: `https://your-domain.com/api/webhooks/stripe`
4. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the **Signing secret** (starts with `whsec_`)
6. Add to `.env.local` as `STRIPE_WEBHOOK_SECRET`

## 📁 Files Created

### API Routes

#### `/src/app/api/checkout/route.ts`
Creates Stripe checkout sessions for subscriptions.

**Usage:**
```typescript
const response = await fetch('/api/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    priceId: 'price_xxx',
    email: 'customer@example.com',
    metadata: { plan: 'Pro' }
  })
});
```

#### `/src/app/api/webhooks/stripe/route.ts`
Handles Stripe webhook events for subscription lifecycle management.

**Events handled:**
- ✅ Checkout session completed
- ✅ Subscription created/updated/deleted
- ✅ Payment succeeded/failed

### Pages

#### `/src/app/pricing/page.tsx`
Displays pricing plans and handles subscription checkout flow.

**Features:**
- Shows Pro ($29) and Premier ($79) plans
- Interactive "Get Started" buttons
- FAQ section
- Redirects to Stripe checkout

#### `/src/app/success/page.tsx`
Post-checkout success page with next steps.

**Features:**
- Success confirmation
- Onboarding instructions
- Contact information

### Library

#### `/src/lib/stripe.ts`
Stripe configuration and initialization.

**Exports:**
- `stripe` - Server-side Stripe instance
- `getStripe()` - Client-side Stripe loader

## 🎨 How to Use

### For Customers (Painters)

1. Visit `/pricing` page
2. Choose a plan (Pro or Premier)
3. Click "Get Started"
4. Enter payment details on Stripe Checkout
5. Redirected to `/success` page after payment

### For Admins

#### View Subscriptions
```typescript
import { stripe } from '@/lib/stripe';

const subscriptions = await stripe.subscriptions.list({
  limit: 100,
  status: 'active'
});
```

#### Cancel Subscription
```typescript
await stripe.subscriptions.cancel('sub_xxx');
```

#### Create Customer Portal Session
```typescript
const session = await stripe.billingPortal.sessions.create({
  customer: 'cus_xxx',
  return_url: 'https://your-domain.com/dashboard',
});
// Redirect to session.url
```

## 🔔 Webhook Events

The webhook handler logs all events and provides TODO comments for database integration:

```typescript
// In /api/webhooks/stripe/route.ts
case 'customer.subscription.created': {
  const subscription = event.data.object;
  // TODO: Create subscription record in your database
  break;
}
```

### Integration Steps:
1. Set up a database (PostgreSQL, MySQL, etc.)
2. Create a `subscriptions` table
3. Update webhook handler to save subscription data
4. Track customer emails, subscription status, and payment history

## 🧪 Testing

### Test Mode
Use Stripe test mode for development:
- Test card: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

### Local Webhook Testing

1. Install Stripe CLI:
```bash
brew install stripe/stripe-cli/stripe
```

2. Login to Stripe:
```bash
stripe login
```

3. Forward webhooks to local server:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

4. Copy the webhook signing secret from the CLI output
5. Update `.env.local` with the new `STRIPE_WEBHOOK_SECRET`

## 💰 Revenue Dashboard

Track your Monthly Recurring Revenue (MRR) in Stripe Dashboard:
- **Home** → Total revenue overview
- **Payments** → All transactions
- **Customers** → Subscriber list
- **Subscriptions** → Active/cancelled subscriptions

### Stripe Fees:
- 2.9% + $0.30 per transaction
- Pro ($29) → You keep $28.16
- Premier ($79) → You keep $76.61

## 🔐 Security Best Practices

✅ **Do:**
- Use environment variables for all keys
- Verify webhook signatures
- Use HTTPS in production
- Keep Stripe SDK updated

❌ **Don't:**
- Commit `.env.local` to git (it's in `.gitignore`)
- Share secret keys publicly
- Use test keys in production
- Skip webhook signature verification

## 📝 Next Steps

1. ✅ Set up Stripe account
2. ✅ Configure environment variables
3. ✅ Create products in Stripe
4. ✅ Set up webhook endpoint
5. ⏳ Test checkout flow
6. ⏳ Integrate with database
7. ⏳ Enable Customer Portal
8. ⏳ Set up email notifications
9. ⏳ Complete Stripe account verification

## 🆘 Troubleshooting

### "No such price" error
- Verify Price IDs in `.env.local`
- Check that products are created in Stripe Dashboard
- Ensure you're using the correct mode (test/live)

### Webhook not receiving events
- Check webhook URL is publicly accessible
- Verify webhook secret is correct
- Check Stripe webhook logs in Dashboard
- Test with Stripe CLI locally

### Checkout redirect not working
- Check success/cancel URLs are correct
- Verify `NEXT_PUBLIC_` prefix on client-side vars
- Check browser console for errors

## 📚 Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Stripe Testing](https://stripe.com/docs/testing)
- [Webhook Best Practices](https://stripe.com/docs/webhooks/best-practices)

## 💬 Support

Questions? Contact:
- Email: admin@ges-development.com
- Stripe Support: https://support.stripe.com/

---

**Built with ❤️ for PaintingA2**

