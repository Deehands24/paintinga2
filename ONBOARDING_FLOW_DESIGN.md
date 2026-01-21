# 🎯 Painter Onboarding Flow - CRITICAL FIX

## 🚨 PROBLEM IDENTIFIED

**Current Flow**:
1. Painter clicks "Get Started" → Immediately goes to Stripe
2. Pays for subscription
3. Webhook has NO IDEA which company to update
4. ❌ **Payment is orphaned - no company gets upgraded**

## ✅ SOLUTION: Pre-Payment Registration

### **New Flow**:

```
Step 1: Click "Get Started"
    ↓
Step 2: Company Registration Form (NEW!)
    - Ask: "Do you have an existing listing?"
    - If YES: Search and claim existing company
    - If NO: Enter new company details
    ↓
Step 3: Collect Required Info:
    - Business Name*
    - Contact Email* (used for Stripe)
    - Phone Number*
    - Business Address*
    - Website (optional)
    - Services Offered*
    ↓
Step 4: Pass to Stripe Checkout
    - Include company info in Stripe metadata
    ↓
Step 5: Payment Completes
    ↓
Step 6: Webhook Receives Payment
    - Extract company info from metadata
    - Create new company OR update existing
    - Set tier to 'pro' or 'premier'
    - Set verified: true
```

---

## 📋 IMPLEMENTATION PLAN

### **1. Create Registration Component**

File: `src/components/PainterRegistration.tsx`

**Features**:
- Modal or separate page
- Two-path flow:
  - "Claim Existing Listing" → Search existing companies
  - "Create New Listing" → Form for new company
- Form validation
- Store data before Stripe redirect

### **2. Update Checkout API**

File: `src/app/api/checkout/route.ts`

**Changes**:
```typescript
// Accept company data
const { priceId, tier, companyData } = await req.json();

// Pass to Stripe metadata
metadata: {
  tier: tier,
  companyName: companyData.name,
  companyEmail: companyData.email,
  companyPhone: companyData.phone,
  companyAddress: companyData.address,
  companyCity: companyData.city,
  companyWebsite: companyData.website,
  companyServices: JSON.stringify(companyData.services),
  // If claiming existing:
  existingCompanyId: companyData.existingId || null
}
```

### **3. Update Webhook Handler**

File: `src/app/api/webhooks/stripe/route.ts`

**Changes**:
```typescript
// Extract company data from metadata
const metadata = session.metadata;
const existingCompanyId = metadata?.existingCompanyId;

if (existingCompanyId) {
  // Update existing company
  // Patch tier and verified fields
} else {
  // Create new company
  // Use metadata to populate all fields
  // Generate slug from company name
  // Set tier from metadata
  // Set verified: true
}
```

---

## 🎨 UI/UX DESIGN

### **Option A: Modal Flow** (Recommended)
- Click "Get Started" → Modal opens
- Multi-step form in modal
- Better UX, keeps user on same page
- Can show progress indicator

### **Option B: Dedicated Onboarding Page**
- Click "Get Started" → Redirect to `/for-painters/register?tier=pro`
- Full-page form
- More space for detailed info
- Easier to implement

### **Recommended: Start with Option B** (faster to implement)

---

## 📝 REGISTRATION FORM FIELDS

### **Step 1: Existing or New?**
```
○ I want to claim my existing listing
○ I'm new - create a listing for me
```

### **Step 2A: Claim Existing** (if selected)
```
Search for your business:
[__________________________] 🔍 Search

Results:
☐ ABC Painting - 123 Main St, Ann Arbor
☐ XYZ Painters - 456 Oak Ave, Ann Arbor

Confirm your email: [_________________]
```

### **Step 2B: New Company** (if selected)
```
Business Name*: [_________________]
Contact Email*: [_________________]
Phone Number*:  [_________________]
Street Address*: [_________________]
City*: [_________________]
State*: [MI ▼]
ZIP Code: [_____]
Website: [_________________]

Services Offered*: (select all that apply)
☐ Residential Painting
☐ Commercial Painting
☐ Interior Painting
☐ Exterior Painting
☐ Cabinet Refinishing
☐ Deck & Fence Staining

Brief Description (optional):
[____________________________]
[____________________________]
```

### **Step 3: Review & Checkout**
```
Review Your Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Business: ABC Painting
Email: john@abcpainting.com
Phone: (734) 555-1234
Address: 123 Main St, Ann Arbor, MI 48104

Selected Plan: Pro ($29/month)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Edit Info]  [Continue to Payment →]
```

---

## 🔒 DATA HANDLING

### **Where to Store Registration Data**

**Before Payment**:
1. **Client-side (sessionStorage)**: Temporary, lost on tab close
2. **Database (Sanity)**: Create draft company document
3. **API session**: Server-side temporary storage

**Recommendation**: Store in Stripe metadata
- Pass all data to Stripe checkout
- Webhook creates company after successful payment
- No orphaned data if payment fails

### **Security Considerations**
- Validate email format
- Sanitize all inputs
- Check for duplicate companies (by phone/email)
- Don't expose Sanity writes to client-side

---

## 📊 STRIPE METADATA STRUCTURE

```json
{
  "tier": "pro",
  "action": "new" | "claim",
  "existingCompanyId": "sanity-doc-id" | null,
  
  // Company data (for new companies)
  "companyName": "ABC Painting",
  "companyEmail": "john@abcpainting.com",
  "companyPhone": "(734) 555-1234",
  "companyAddress": "123 Main St",
  "companyCity": "Ann Arbor",
  "companyState": "MI",
  "companyZip": "48104",
  "companyWebsite": "https://abcpainting.com",
  "companyServices": "[\"residential\",\"interior\",\"exterior\"]",
  "companyDescription": "Professional painting since 1990"
}
```

**Stripe Metadata Limits**:
- Max 50 keys
- Each value max 500 characters
- Total metadata max 8KB

---

## ✅ VERIFICATION FLOW

### **For Existing Companies** (Claim)
1. User searches for their company
2. Selects from results
3. Enters email to verify ownership
4. System sends verification email (optional)
5. Proceeds to payment
6. Webhook updates existing company tier

### **For New Companies**
1. User fills out form
2. System checks for duplicates
3. Shows preview before payment
4. Proceeds to payment
5. Webhook creates new company in Sanity

---

## 🚀 IMPLEMENTATION PRIORITY

### **Phase 1: Minimum Viable Fix** (URGENT)
1. ✅ Create registration form page
2. ✅ Collect: name, email, phone, address
3. ✅ Pass to Stripe metadata
4. ✅ Webhook creates/updates company

### **Phase 2: Enhanced Features** (Later)
- Search and claim existing listings
- Email verification
- Duplicate detection
- Better UI/UX

---

## 🎯 NEXT STEPS

**What do you want?**

1. **Quick Fix**: Simple form → Stripe → Create company
   - ⏱️ Fast to implement (1-2 hours)
   - ✅ Solves the critical issue
   - ⚠️ No claiming existing listings yet

2. **Full Solution**: Registration flow with claim option
   - ⏱️ Longer to implement (4-6 hours)
   - ✅ Professional onboarding experience
   - ✅ Handles all use cases

**Recommendation**: Start with #1 to unblock launch, add #2 later.

---

Would you like me to implement the quick fix now?
