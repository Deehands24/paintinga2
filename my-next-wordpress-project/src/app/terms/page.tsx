import Link from 'next/link';
import { Metadata } from 'next';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for PaintingA2.com - Rules and guidelines for using our painting directory.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Logo height={50} width={150} />
            </Link>
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> December 8, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using PaintingA2.com (the "Website"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              PaintingA2.com is an online directory that connects homeowners and businesses with professional painting contractors in the Ann Arbor, Michigan area. We provide:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>A searchable directory of painting contractors</li>
              <li>An estimate calculator for painting projects</li>
              <li>Educational content about painting services</li>
              <li>Subscription-based listing services for painting contractors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of the Website</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Permitted Use</h3>
            <p className="text-gray-700 mb-4">
              You may use the Website to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>Search for and contact painting contractors</li>
              <li>Request painting project estimates</li>
              <li>Read educational content and resources</li>
              <li>Subscribe to listing services if you are a painting contractor</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Use</h3>
            <p className="text-gray-700 mb-4">
              You agree NOT to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>Use the Website for any unlawful purpose</li>
              <li>Scrape, copy, or harvest data from the Website without permission</li>
              <li>Submit false or misleading information</li>
              <li>Spam or send unsolicited communications to listed contractors</li>
              <li>Attempt to gain unauthorized access to the Website or its systems</li>
              <li>Post or transmit any viruses, malware, or harmful code</li>
              <li>Impersonate another person or entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Painter Listing Subscriptions</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Subscription Plans</h3>
            <p className="text-gray-700 mb-4">
              We offer three tiers of listing plans for painting contractors:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>Basic:</strong> Free listing with basic information</li>
              <li><strong>Pro:</strong> $29/month or $299/year - Enhanced profile with additional features</li>
              <li><strong>Premier:</strong> $79/month or $799/year - Premium placement and maximum visibility</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Terms</h3>
            <p className="text-gray-700 mb-4">
              Subscription payments are processed securely through Stripe. By subscribing, you authorize us to charge your payment method on a recurring basis until you cancel your subscription.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cancellation and Refunds</h3>
            <p className="text-gray-700 mb-4">
              You may cancel your subscription at any time through the Stripe customer portal or by contacting us. Cancellations will take effect at the end of the current billing period. We do not provide refunds for partial subscription periods.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Listing Accuracy</h3>
            <p className="text-gray-700 mb-4">
              Painters are responsible for ensuring their listing information is accurate, current, and truthful. We reserve the right to remove or modify listings that contain false, misleading, or inappropriate content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Estimate Calculator and Lead Generation</h2>
            <p className="text-gray-700 mb-4">
              Our estimate calculator provides approximate cost estimates based on user-provided information. These estimates are for informational purposes only and should not be considered binding quotes.
            </p>
            <p className="text-gray-700 mb-4">
              When you submit an estimate request, your contact information and project details may be shared with one or more painting contractors in our directory. By submitting an estimate request, you consent to being contacted by these contractors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              THE WEBSITE AND ALL INFORMATION, CONTENT, AND SERVICES PROVIDED ARE OFFERED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
            </p>
            <p className="text-gray-700 mb-4">
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>The Website will be uninterrupted or error-free</li>
              <li>Defects will be corrected</li>
              <li>The Website is free of viruses or harmful components</li>
              <li>Information provided is accurate, complete, or current</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Independent Contractor Relationships</h2>
            <p className="text-gray-700 mb-4">
              PaintingA2.com is a directory service only. We do not employ, endorse, recommend, or guarantee the work of any painting contractors listed on the Website. All contractors are independent businesses, and any agreements for services are made directly between you and the contractor.
            </p>
            <p className="text-gray-700 mb-4">
              We are not responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>The quality of work performed by listed contractors</li>
              <li>Disputes between users and contractors</li>
              <li>Contractor licensing, insurance, or credentials (though we may display verification badges)</li>
              <li>Pricing, scheduling, or contractual terms between users and contractors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PAINTINGA2.COM AND ITS OWNERS, OPERATORS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>Your use or inability to use the Website</li>
              <li>Any work performed or not performed by contractors found through the Website</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any other matter relating to the Website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify, defend, and hold harmless PaintingA2.com and its owners, operators, and affiliates from any claims, damages, losses, liabilities, and expenses (including attorney fees) arising out of or related to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>Your use of the Website</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Any disputes with contractors found through the Website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on the Website, including text, graphics, logos, images, and software, is the property of PaintingA2.com or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
            <p className="text-gray-700 mb-4">
              You may not reproduce, distribute, modify, or create derivative works from any content on the Website without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modification of Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page and updating the "Effective Date." Your continued use of the Website after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to terminate or suspend your access to the Website at any time, with or without cause, with or without notice. Upon termination, your right to use the Website will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Michigan, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:paintinga2@ges-development.com" className="text-blue-600 hover:underline">paintinga2@ges-development.com</a><br />
              <strong>Website:</strong> <a href="https://paintinga2.com" className="text-blue-600 hover:underline">paintinga2.com</a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-4">
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </div>
          <p className="text-gray-600">&copy; 2024 PaintingA2.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
