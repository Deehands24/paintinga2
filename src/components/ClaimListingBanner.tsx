'use client';

import { useState } from 'react';
import { Business } from '@/types/directory';
import { trackEvent } from '@/components/Analytics';

interface ClaimListingModalProps {
  business: Business;
  isOpen: boolean;
  onClose: () => void;
}

function ClaimListingModal({ business, isOpen, onClose }: ClaimListingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tier: 'pro' as 'pro' | 'premier',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Track checkout start
      trackEvent('claim_listing_checkout_start', {
        companyName: business.name,
        tier: formData.tier
      });

      // Get the Stripe price ID based on selected tier
      const priceId = formData.tier === 'pro'
        ? process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID
        : process.env.NEXT_PUBLIC_STRIPE_PREMIER_PRICE_ID;

      if (!priceId) {
        throw new Error('Stripe price ID not configured');
      }

      // Call checkout API with company ID and verification data
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          tier: formData.tier,
          companyId: business.id, // Pass the company ID!
          claimData: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Checkout failed');
      }

      if (data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      console.error('Claim error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(`Failed to start checkout: ${errorMessage}`);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-umich-navy text-white p-6 rounded-t-lg">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">Claim Your Listing</h2>
              <p className="text-yellow-200">{business.name}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-yellow-200 transition-colors"
              disabled={loading}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Verification Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Verify your ownership</p>
                <p>Please provide your contact information to claim this listing. We will use this to verify you are the business owner.</p>
              </div>
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umich-navy focus:border-transparent"
              placeholder="John Smith"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Business Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umich-navy focus:border-transparent"
              placeholder="(734) 555-1234"
            />
            <p className="text-xs text-gray-500 mt-1">
              Listed phone: {business.phone} (for verification)
            </p>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umich-navy focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          {/* Tier Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Choose Your Plan *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pro Tier */}
              <div
                onClick={() => setFormData({ ...formData, tier: 'pro' })}
                className={`cursor-pointer border-2 rounded-lg p-4 transition-all ${formData.tier === 'pro'
                    ? 'border-umich-navy bg-yellow-50'
                    : 'border-gray-200 hover:border-gray-300'
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-gray-900">Pro</h3>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.tier === 'pro' ? 'border-umich-navy bg-umich-navy' : 'border-gray-300'
                    }`}>
                    {formData.tier === 'pro' && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <p className="text-2xl font-bold text-umich-navy mb-2">$29<span className="text-sm text-gray-600">/mo</span></p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Edit listing details</li>
                  <li>✓ Photo gallery</li>
                  <li>✓ Verified badge</li>
                </ul>
              </div>

              {/* Premier Tier */}
              <div
                onClick={() => setFormData({ ...formData, tier: 'premier' })}
                className={`cursor-pointer border-2 rounded-lg p-4 transition-all ${formData.tier === 'premier'
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-gray-300'
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Premier</h3>
                    <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">POPULAR</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.tier === 'premier' ? 'border-purple-600 bg-purple-600' : 'border-gray-300'
                    }`}>
                    {formData.tier === 'premier' && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <p className="text-2xl font-bold text-purple-600 mb-2">$79<span className="text-sm text-gray-600">/mo</span></p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Everything in Pro</li>
                  <li>✓ Homepage featured</li>
                  <li>✓ Lead generation form</li>
                  <li>✓ Higher ranking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-umich-navy text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Continue to Payment →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface ClaimListingBannerProps {
  business: Business;
}

export function ClaimListingBanner({ business }: ClaimListingBannerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Only show for Basic tier companies
  if (business.tier !== 'basic') {
    return null;
  }

  return (
    <>
      <div className="bg-gradient-to-r from-umich-navy to-blue-700 text-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-bold">Is this your company?</h3>
            </div>
            <p className="text-blue-100 mb-0">
              Claim this listing to unlock premium features, edit your profile, add photos, and get more leads!
            </p>
          </div>
          <button
            onClick={() => {
              setIsModalOpen(true);
              trackEvent('claim_listing_modal_open', { companyName: business.name });
            }}
            className="bg-yellow-400 text-umich-navy font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            Claim This Listing →
          </button>
        </div>
      </div>

      <ClaimListingModal
        business={business}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
