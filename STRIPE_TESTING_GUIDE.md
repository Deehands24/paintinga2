# 🧪 Stripe Testing Guide - PaintingA2.com

## ⚠️ ISSUE: Live Mode vs Test Mode

**Current Status**: Your Stripe integration is using **LIVE MODE** keys on production.

**The Problem**: You cannot use test cards (4242 4242 4242 4242) with live mode keys.

**Error You Saw**: 
```
Your card was declined. Your request was in live mode, but used a known test card.
```

---

## 🎯 TESTING OPTIONS

### **Option 1: Create a Test/Staging Environment** (RECOMMENDED)

Set up a separate staging deployment on Vercel that uses Stripe **test mode** keys.

#### Steps:

1. **Get Stripe Test Mode Keys**:
   - Go to https://dashboard.stripe.com
   - Toggle to **Test Mode** (switch in top-right)
   - Go to Developers > API Keys
   - Copy these keys:
     - `Publishable key` (starts with `pk_test_`)
     - `Secret key` (starts with `sk_test_`)

2. **Create Test Mode Products**:
   - In Test Mode, go to Products
   - Create "Pro Subscription" - $29/month
   - Create "Premier Subscription" - $79/month
   - Copy the Price IDs (start with `price_test_`)

3. **Deploy Staging Environment on Vercel**:
   ```bash
   # Option A: Use a git branch
   git checkout -b staging
   git push origin staging
   
   # In Vercel dashboard:
   # 1. Create new project from staging branch
   # 2. Add environment variables with TEST keys
   ```

4. **Environment Variables for Staging**:
   ```bash
   STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxx
   STRIPE_WEBHOOK_SECRET=[create new webhook for staging]
   NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_test_xxxxxxxxxxxx
   NEXT_PUBLIC_STRIPE_PREMIER_PRICE_ID=price_test_xxxxxxxxxxxx
   ```

5. **Test with Stripe Test Cards**:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
   - More cards: https://stripe.com/docs/testing

---

### **Option 2: Test Locally with Test Keys**

Run the app locally with test mode credentials.

#### Steps:

1. **Get Stripe Test Keys** (see Option 1, step 1)

2. **Update Your Local `.env.local`**:
   ```bash
   # Add these to .env.local
   STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxx
   STRIPE_WEBHOOK_SECRET=[test webhook secret]
   NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_test_xxxxxxxxxxxx
   NEXT_PUBLIC_STRIPE_PREMIER_PRICE_ID=price_test_xxxxxxxxxxxx
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Test Webhooks Locally with Stripe CLI**:
   ```bash
   # Install Stripe CLI: https://stripe.com/docs/stripe-cli
   stripe login
   
   # Forward webhooks to local server
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   
   # This will give you a webhook secret like: whsec_xxxxx
   # Add it to .env.local as STRIPE_WEBHOOK_SECRET
   ```

5. **Test the Flow**:
   - Go to http://localhost:3000/for-painters
   - Click "Get Started" on Pro or Premier
   - Use test card: `4242 4242 4242 4242`, Expiry: `01/30`, CVC: `111`
   - Watch Stripe CLI output to see webhook events

---

### **Option 3: Test on Production with Real Payment** (NOT RECOMMENDED)

⚠️ **Use this ONLY if you need to verify live mode works** ⚠️

#### Steps:

1. **Use a Real Credit Card** with a small amount
2. **Immediately Refund** in Stripe Dashboard:
   - Go to https://dashboard.stripe.com/payments
   - Find the payment
   - Click "Refund"

3. **Verify in Sanity**:
   - Check that the company's tier was updated
   - Verify `verified: true` was set

4. **Cancel the Subscription**:
   - Go to Stripe Dashboard > Subscriptions
   - Cancel the test subscription

**Cost**: You'll pay Stripe's processing fee (~2.9% + $0.30) even after refund.

---

## 🎯 RECOMMENDED WORKFLOW

**For Testing/Development**:
```
Local Dev (Test Mode) → Staging (Test Mode) → Production (Live Mode)
```

### Current Setup:
- ✅ Production: Live mode (already configured)
- ❌ Staging: Not set up yet
- ❌ Local: Using live keys (dangerous!)

### Ideal Setup:
- ✅ Production: Live mode (management@paintinga2.com gets paid)
- ✅ Staging: Test mode (safe testing with test cards)
- ✅ Local: Test mode (development without risk)

---

## 🔧 QUICK FIX: Set Up Local Testing NOW

Run these commands to test locally:

```bash
# 1. Get your Stripe test keys from dashboard (Test Mode)
# 2. Add to .env.local (I'll help you update it)

# 3. Install Stripe CLI for webhook testing
brew install stripe/stripe-cli/stripe  # Mac
# Or: https://stripe.com/docs/stripe-cli#install

# 4. Login to Stripe
stripe login

# 5. Start webhook forwarding (run in separate terminal)
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# 6. Copy the webhook secret (starts with whsec_) to .env.local

# 7. Start dev server
npm run dev

# 8. Test at http://localhost:3000/for-painters
```

---

## 📊 STRIPE TEST CARDS REFERENCE

| Card Number | Scenario | Expiry | CVC |
|-------------|----------|--------|-----|
| `4242 4242 4242 4242` | ✅ Success | Any future | Any 3 digits |
| `4000 0000 0000 0002` | ❌ Card Declined | Any future | Any 3 digits |
| `4000 0000 0000 9995` | ❌ Insufficient Funds | Any future | Any 3 digits |
| `4000 0025 0000 3155` | ✅ Requires 3D Secure | Any future | Any 3 digits |

Full list: https://stripe.com/docs/testing#cards

---

## 🚨 WEBHOOK CONFIGURATION

### Production Webhook (Already Set Up)
- **Endpoint**: `https://paintinga2.com/api/webhooks/stripe`
- **Secret**: Configured on Vercel
- **Events**: checkout.session.completed

### Staging Webhook (Need to Create)
1. Go to Stripe Dashboard (Test Mode)
2. Developers > Webhooks > Add endpoint
3. URL: `https://staging-paintinga2.vercel.app/api/webhooks/stripe`
4. Events: Select `checkout.session.completed`
5. Copy webhook secret and add to Vercel staging environment

### Local Webhook (Use Stripe CLI)
- Automatically generated with `stripe listen`
- No need to manually configure

---

## ✅ VERIFICATION CHECKLIST (Test Mode)

After setting up test environment:

- [ ] Can access test checkout page
- [ ] Can submit payment with `4242 4242 4242 4242`
- [ ] Stripe redirects to success page
- [ ] Webhook receives `checkout.session.completed` event
- [ ] Company tier updates in Sanity (check Sanity Studio)
- [ ] Company `verified` field set to `true`
- [ ] Google Analytics tracks `payment_click` event

---

## 💡 BEST PRACTICE TIPS

1. **Never test with live keys locally** - Always use test mode for development
2. **Use Stripe CLI for webhook testing** - Simulates real webhook events
3. **Keep test and live data separate** - Use different Sanity datasets if needed
4. **Monitor webhook logs** - Check Vercel logs: `vercel logs --follow`
5. **Test failure scenarios** - Use decline cards to test error handling

---

**Need Help?** 
- Stripe Testing Docs: https://stripe.com/docs/testing
- Stripe CLI: https://stripe.com/docs/stripe-cli
- Stripe Webhooks: https://stripe.com/docs/webhooks

---

**Status**: 🟡 **Production is live and working, but testing setup is needed**

Would you like me to help you:
1. Set up a staging environment on Vercel?
2. Configure local testing with test mode keys?
3. Just verify production works with a real payment (and immediate refund)?

Let me know which option you prefer!
