import Link from 'next/link';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: '5 Essential Tips for Hiring Trusted Painters in Ann Arbor | PaintingA2',
  description:
    'Learn how to hire a reliable painting contractor. Your essential checklist for vetting painters, verifying insurance, and getting quality work.',
};

export default function HiringTipsArticle() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        navLinks={[
          { href: '/', label: 'Home' },
          { href: '/articles', label: 'Articles' }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/" className="hover:text-umich-navy">Home</Link></li>
            <li>/</li>
            <li><Link href="/articles" className="hover:text-umich-navy">Articles</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Hiring Tips</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your Essential Checklist: 5 Tips for Hiring a Trusted Painter in Ann Arbor
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Hiring a painting contractor is a significant decision. You are inviting them into your home and trusting them with one of your most valuable assets. A great painter can deliver a stunning transformation, but a poor choice can lead to costly mistakes, delays, and frustration. To ensure a smooth, professional experience, it&apos;s essential to do your homework. Follow this checklist of five essential tips to help you hire a trusted, reliable painter in the Ann Arbor area.
          </p>

          <div className="space-y-12 mt-12">
            <div className="border-l-4 border-umich-navy pl-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-umich-navy text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Verify They Are Licensed and Insured
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is the most critical first step. A reputable contractor must carry two key types of insurance:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-umich-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>General Liability Insurance:</strong> This protects your property from accidental damage caused by the painter or their crew.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-umich-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Workers&apos; Compensation Insurance:</strong> This protects you from liability if a worker is injured on your property. Without it, you could be held financially responsible for medical bills and lost wages.</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Always ask for a Certificate of Insurance (COI) and don&apos;t hesitate to verify it with the insurance provider. While Michigan does not have a state-level license for painters, being a registered business and carrying the proper insurance are non-negotiable signs of professionalism.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-gray-700 m-0">
                  <strong>Directory Tip:</strong> Look for painters with a &quot;Verified License & Insurance&quot; badge on their PaintingA2.com profile for added peace of mind.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-umich-navy pl-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-umich-navy text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Get a Detailed, Written Estimate
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Never accept a verbal quote. A professional painting contractor will provide a detailed, written proposal that clearly outlines every aspect of the project. A vague estimate is a major red flag. The contract should include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-umich-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Scope of Work:</strong> A precise description of all surfaces to be painted (walls, trim, ceilings, doors, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-umich-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Surface Preparation:</strong> Details on prep work, such as patching holes, sanding, caulking, and priming</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-umich-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Materials Specified:</strong> The exact brand, type, and finish of paint and primer to be used</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-umich-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Timeline:</strong> A clear start and estimated completion date</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-umich-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Cost Breakdown:</strong> A transparent breakdown of labor and material costs, along with the payment schedule</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Getting at least three detailed estimates from different contractors is a best practice to ensure you are receiving a fair price for comparable work.
              </p>
            </div>

            <div className="border-l-4 border-umich-navy pl-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-umich-navy text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Check References and Past Work
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A painter&apos;s past work is the best indicator of their future performance. A reputable contractor will be proud to share their portfolio and connect you with recent clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-umich-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Ask for Photos:</strong> Request to see before-and-after photos of projects similar to yours</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-umich-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Call References:</strong> Speak with at least two or three past customers. Ask about their experience with the crew&apos;s punctuality, communication, cleanliness, and the overall quality of the finished product</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-umich-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Read Online Reviews:</strong> Look at reviews on trusted third-party sites. A consistent pattern of positive feedback is a strong indicator of reliability</span>
                </li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-gray-700 m-0">
                  <strong>Directory Tip:</strong> The profiles on PaintingA2.com centralize customer reviews and often include photo galleries, making it easy to assess a painter&apos;s track record.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-umich-navy pl-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-umich-navy text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  4
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Understand Their Process for Prep and Cleanup
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The quality of a paint job is determined long before the first finish coat is applied. A thorough preparation process is the foundation of a durable, beautiful result. Ask potential contractors to detail their prep process, which should include protecting furniture and floors, cleaning walls, and making necessary repairs. Equally important is the cleanup process. The contract should specify that the crew will clean the site daily and perform a final, thorough cleanup upon completion.
              </p>
            </div>

            <div className="border-l-4 border-umich-navy pl-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-umich-navy text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  5
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Inquire About a Warranty
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A professional painter should stand behind their work. Ask if they offer a warranty or guarantee against defects in workmanship, such as peeling, bubbling, or cracking. A typical warranty lasts for at least two years. The warranty terms should be in writing and clearly define what is covered and for how long. A contractor who is hesitant to guarantee their work should be avoided.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-umich-navy to-umich-navy text-white rounded-xl p-8 my-12">
            <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-lg leading-relaxed">
              By following these steps, you can confidently navigate the hiring process and find a painting professional who will treat your home with respect and deliver results you&apos;ll love for years to come.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/listings"
            className="inline-block bg-umich-navy text-white font-bold px-8 py-4 rounded-lg hover:bg-umich-navy transition-colors"
          >
            Find Verified Painters on PaintingA2
          </Link>
        </div>
      </article>
    </div>
  );
}
