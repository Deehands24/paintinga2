import Link from 'next/link';
import { Metadata } from 'next';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for PaintingA2.com - How we collect, use, and protect your information.',
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> December 8, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              PaintingA2.com ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>Submit an estimate request through our calculator</li>
              <li>Subscribe to a painter listing plan</li>
              <li>Contact us via email</li>
              <li>Use search or filtering features on our site</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This information may include: name, email address, phone number, project details, and payment information (processed securely through Stripe).
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              We automatically collect certain information when you visit our website, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>Connect you with painting contractors for estimate requests</li>
              <li>Process painter subscription payments through Stripe</li>
              <li>Improve and optimize our website functionality</li>
              <li>Analyze website traffic and user behavior through Google Analytics</li>
              <li>Communicate with you about your inquiries or services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device.
            </p>
            <p className="text-gray-700 mb-4">
              We use the following types of cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Google Analytics to understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Google Analytics</h2>
            <p className="text-gray-700 mb-4">
              We use Google Analytics to analyze website traffic and usage patterns. Google Analytics uses cookies to collect information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site.
            </p>
            <p className="text-gray-700 mb-4">
              Google's ability to use and share information collected by Google Analytics is restricted by the Google Analytics Terms of Service and Google Privacy Policy. You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Stripe</h3>
            <p className="text-gray-700 mb-4">
              We use Stripe for payment processing. When you make a payment, Stripe collects your payment information directly. We do not store your full credit card information on our servers. Stripe's privacy policy can be found at <a href="https://stripe.com/privacy" className="text-blue-600 hover:underline">stripe.com/privacy</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">FormSubmit</h3>
            <p className="text-gray-700 mb-4">
              We use FormSubmit.co to process estimate calculator submissions. Information submitted through our estimate forms is sent via FormSubmit to our email address. FormSubmit's privacy policy can be found at <a href="https://formsubmit.co/privacy" className="text-blue-600 hover:underline">formsubmit.co/privacy</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>With Painting Contractors:</strong> When you submit an estimate request, we share your contact information and project details with relevant contractors</li>
              <li><strong>Service Providers:</strong> With third-party service providers who perform services on our behalf (e.g., Stripe, Google Analytics, FormSubmit)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to object to or restrict processing</li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, please contact us at <a href="mailto:management@paintinga2.com" className="text-blue-600 hover:underline">management@paintinga2.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:management@paintinga2.com" className="text-blue-600 hover:underline">management@paintinga2.com</a><br />
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
