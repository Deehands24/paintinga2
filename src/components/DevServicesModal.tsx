'use client';

import { useState } from 'react';

interface DevServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DevServicesModal({ isOpen, onClose }: DevServicesModalProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    service: 'full-rebuild',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/dev-services-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({
          businessName: '',
          contactName: '',
          email: '',
          phone: '',
          service: 'full-rebuild',
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to submit. Please try again or email directly at management@paintinga2.com');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-umich-navy to-[#00274C] text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-umich-maize mb-2">
                Transform Your Business Online
              </h3>
              <p className="text-gray-200 text-sm">
                Get a free consultation with Ges Development
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-umich-maize transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Success Message */}
        {status === 'success' && (
          <div className="p-6 bg-green-50 border-l-4 border-green-500 m-6">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-green-800 font-bold">Request Received!</h4>
                <p className="text-green-700 text-sm">We'll contact you within 24 hours to discuss your project.</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        {status !== 'success' && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                What service are you interested in? *
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-umich-navy focus:ring-2 focus:ring-umich-maize outline-none transition-colors"
              >
                <option value="full-rebuild">Complete Website Rebuild + Marketing</option>
                <option value="website-only">Website Development Only</option>
                <option value="marketing-only">Digital Marketing Campaign Only</option>
                <option value="seo-geo">SEO + GEO Optimization</option>
                <option value="maintenance">Website Maintenance & Updates</option>
                <option value="consultation">Free Consultation First</option>
              </select>
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                required
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-umich-navy focus:ring-2 focus:ring-umich-maize outline-none transition-colors"
                placeholder="Your Painting Company"
              />
            </div>

            {/* Contact Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-umich-navy focus:ring-2 focus:ring-umich-maize outline-none transition-colors"
                placeholder="John Smith"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-umich-navy focus:ring-2 focus:ring-umich-maize outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-umich-navy focus:ring-2 focus:ring-umich-maize outline-none transition-colors"
                placeholder="(734) 555-0123"
              />
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-red-700 text-sm">{errorMessage}</p>
              </div>
            )}

            {/* Info Box */}
            <div className="bg-yellow-50 border-l-4 border-umich-maize p-4 rounded">
              <p className="text-sm text-gray-700">
                <span className="font-bold text-umich-navy">We respond fast!</span> You'll receive a call or text within 24 hours to discuss how we can transform your online presence and drive real results.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-umich-navy text-umich-maize font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {status === 'submitting' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-umich-maize" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Get My Free Consultation'
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to be contacted about our services. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
