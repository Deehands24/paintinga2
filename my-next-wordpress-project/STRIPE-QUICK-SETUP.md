# ⚡ STRIPE PAYMENT LINKS - 5 MINUTE SETUP

## What You're Building
Simple payment links you can text/email to painters. No coding required.

---

## STEP 1: Create Stripe Account (2 minutes)

1. Go to https://stripe.com
2. Click "Start now" or "Sign up"
3. Enter:
   - Email: admin@ges-development.com
   - Password: (your choice)
   - Business name: PaintingA2 or GES Development
4. Click "Create account"

**Skip verification for now** - You can process payments immediately in test mode, complete verification later.

---

## STEP 2: Create Payment Links (3 minutes)

### A. Create Pro Plan ($29/month)

1. In Stripe Dashboard, click **"Products"** in left sidebar
2. Click **"+ Add product"**
3. Fill in:
   - **Name:** `PaintingA2 Pro Membership`
   - **Description:** `Professional directory listing with verified badge, full profile, and lead generation`
   - **Pricing model:** `Standard pricing`
   - **Price:** `$29.00`
   - **Billing period:** `Monthly`
   - **Currency:** `USD`
4. Click **"Add product"**

5. On the product page, click **"Create payment link"**
6. Leave defaults (or customize):
   - Collect customer name and email: ✓
   - Free trial: (optional - add 7 or 30 days if you want)
7. Click **"Create link"**

8. **COPY THIS URL** - It looks like:
   ```
   https://buy.stripe.com/test_xxxxxxxxxxxxx
   ```
   Save it in a note: "Pro Plan: [URL]"

### B. Create Premier Plan ($79/month)

Repeat the same process:
1. Click **"+ Add product"**
2. Fill in:
   - **Name:** `PaintingA2 Premier Membership`
   - **Description:** `Premium listing with featured placement, dedicated lead calculator, priority support, and exclusive lead routing`
   - **Price:** `$79.00`
   - **Billing period:** `Monthly`
3. Click **"Add product"**
4. Click **"Create payment link"**
5. **COPY THIS URL**
   Save it: "Premier Plan: [URL]"

### C. Optional: Create Annual Plans (Better margins)

**Pro Annual ($279/year = 20% off)**
- Same process
- Price: $279.00
- Billing period: **Yearly**

**Premier Annual ($759/year = 20% off)**
- Price: $759.00
- Billing period: **Yearly**

---

## STEP 3: How to Use Payment Links on Calls

### During the Call:
```
Painter: "Okay, I'm interested in the Premier plan."

You: "Perfect! Here's what I'll do. Right now I'm texting/emailing
you a secure payment link. Click it, enter your card info, and
you're set up. I'll have your profile live by end of business today."
```

### Text Message:
```
Hi [Name], here's your PaintingA2 Premier membership link:
https://buy.stripe.com/xxxxx

First month free as a founding member! After that $79/mo.
Reply with your logo and company info and I'll get you live today.
```

### Email:
```
Subject: Your PaintingA2 Membership Link

Hi [Name],

Thanks for joining! Complete your signup here:
https://buy.stripe.com/xxxxx

After payment, reply with:
- Company logo
- 2-3 project photos
- Brief company description
- License/insurance info

You'll be live within 24 hours.

[Your Name]
```

---

## STEP 4: When They Pay - You Get Notified

### Stripe Will Email You:
```
Subject: Payment succeeded for [Customer Name]

[Customer Name] paid $79.00 for PaintingA2 Premier Membership
```

### What to Do:
1. Email them the onboarding request (see DEPLOY-NOW.md)
2. Once they send info, add to `businesses.ts`
3. Deploy to Vercel (auto-deploys in 2 min)
4. Send them their live profile link

---

## STEP 5: View Your Revenue Dashboard

In Stripe Dashboard:
- **Home** → See total revenue, recent payments
- **Payments** → All transactions
- **Customers** → All subscribers
- **Subscriptions** → Active/cancelled subscriptions

**Important:** Stripe takes 2.9% + $0.30 per transaction
- $29 Pro → You keep $28.16
- $79 Premier → You keep $76.61

---

## STEP 6: Activate Your Account (Do This Week 2)

After your first few sales, Stripe will ask you to verify:
1. Business details (EIN or SSN)
2. Bank account (for payouts)
3. Identity verification

**Until then:** Money stays in Stripe balance, you can't withdraw yet.

**Don't worry:** You can process payments immediately, just complete verification within 2 weeks.

---

## ADVANCED: Want Customer Portal?

Stripe has a built-in customer portal where painters can:
- Update card info
- Cancel subscription
- View invoices

**To enable:**
1. Stripe Dashboard → Settings → Billing
2. Enable "Customer portal"
3. Share link: `https://billing.stripe.com/p/login/xxxxx`

Painters manage their own subscriptions!

---

## ALTERNATIVE: If You Want PayPal Instead

**Pros of PayPal:**
- More painters have PayPal accounts
- Might feel more familiar

**Cons:**
- Recurring billing is clunky
- Less professional
- Higher fees (3.49% + $0.49)
- Worse developer experience

**How to do it:**
1. Go to PayPal.com → Business → Create Invoice
2. Add subscription item manually
3. Send invoice link

**Recommendation:** Use Stripe. It's 2024, everyone has cards, and it looks more professional.

---

## PRICING STRATEGY: First Month Free Promotion

### Option 1: Manual "First Month Free"
- Send them the regular payment link ($29 or $79)
- After they pay, refund first month in Stripe
- Subscription continues monthly after that

### Option 2: Set Up Free Trial in Stripe
When creating payment link:
- Check "Add free trial"
- Set to 30 days
- They enter card but aren't charged until day 31

**Recommended:** Use free trial feature, it's cleaner.

---

## COPY/PASTE: Your Payment Link Text

Save these in your notes app for quick access:

### Pro Plan ($29/mo):
```
PaintingA2 Pro Membership - $29/month
First month FREE for founding members
https://buy.stripe.com/[YOUR_LINK]
```

### Premier Plan ($79/mo):
```
PaintingA2 Premier Membership - $79/month
First month FREE for founding members
https://buy.stripe.com/[YOUR_LINK]
```

---

## WHAT IF THEY ASK TO PAY BY CHECK?

**Option 1:** Accept it (builds trust)
```
"Sure! Make check out to [Your Business Name] and mail to:
[Your Address]

I'll get your listing live as soon as I receive it."
```

**Option 2:** Politely push to online
```
"I'd love to, but our system requires online payment for the
recurring subscription. The payment link is secure and takes
30 seconds. Can we do that?"
```

**Recommendation:** Accept checks for first few customers if needed. Build trust. Switch to online-only once you have momentum.

---

## QUESTIONS THEY MIGHT ASK

**Q: "Is my credit card info secure?"**
A: "Absolutely. We use Stripe, the same payment processor used by Amazon, Google, and millions of businesses. We never see or store your card info."

**Q: "Can I cancel anytime?"**
A: "Yes, cancel anytime. No contracts, no cancellation fees. We're confident you'll love the leads we generate."

**Q: "Do you take a percentage of leads?"**
A: "No! It's just $29 or $79 flat monthly fee. All leads go directly to you, we don't take a cut of your jobs."

**Q: "How many leads will I get?"**
A: "We're just launching, so I can't promise a specific number yet. But our estimate calculator is proven to convert, and we're driving SEO traffic to the site daily. Plus, you can cancel anytime if you're not happy."

**Q: "What if I want to upgrade from Pro to Premier later?"**
A: "Easy! Just let me know and I'll send you the Premier link. Your Pro membership will be canceled and Premier starts immediately."

---

## TRACK YOUR MRR (Monthly Recurring Revenue)

**Create a simple tracker:**

| Month | Pro Members | Premier Members | Total MRR |
|-------|-------------|-----------------|-----------|
| Oct 2024 | 5 @ $29 | 2 @ $79 | $303 |
| Nov 2024 | 8 @ $29 | 4 @ $79 | $548 |
| Dec 2024 | 12 @ $29 | 6 @ $79 | $822 |

**Goal Trajectory:**
- Month 3: $1,000 MRR (covers your time)
- Month 6: $3,000 MRR (part-time income)
- Month 12: $10,000 MRR (full-time income)
- Year 2: $25,000+ MRR (scale to other cities)

At 100 members average $50/month = $5,000 MRR
At 200 members average $50/month = $10,000 MRR

**You only need 20 customers at $50/month average to hit $1,000 MRR.**

---

## YOU'RE READY TO SELL

1. ✅ Stripe account created
2. ✅ Payment links generated
3. ✅ Links saved in notes app
4. ✅ Know how to handle objections

**Now go close deals.**

---

*Expected time: 5 minutes*
*Difficulty: Easy*
*Required: Credit card (for Stripe account, no charges)*

**The fastest way to make money is to start charging for your service. You're ready. Go.**
