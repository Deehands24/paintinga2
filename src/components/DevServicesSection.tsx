'use client';

import { useState } from 'react';
import DevServicesModal from './DevServicesModal';

export default function DevServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-umich-navy to-gray-900 border-y-4 border-umich-maize relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}/>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Content */}
          <div className="text-center mb-12">
            <div className="inline-block bg-umich-maize text-umich-navy text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-lg">
              🚀 SPECIAL OFFER FOR PAINTERS
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to <span className="text-umich-maize">Dominate</span> the Digital Landscape?
            </h2>

            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              While other painters struggle with outdated websites and get buried in search results,
              <span className="font-bold text-umich-maize"> you could be the first name customers see</span> —
              on Google, AI chatbots, and every platform that matters.
            </p>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-umich-maize border-opacity-30 rounded-xl p-6 text-center hover:bg-opacity-20 transition-all">
              <div className="w-16 h-16 bg-umich-maize rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-umich-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">SEO + GEO Optimization</h3>
              <p className="text-gray-300 text-sm">
                Rank #1 on Google AND become the top AI recommendation.
                We optimize for both search engines and ChatGPT, Claude, Perplexity, and more.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-umich-maize border-opacity-30 rounded-xl p-6 text-center hover:bg-opacity-20 transition-all">
              <div className="w-16 h-16 bg-umich-maize rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-umich-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Complete Brand Transformation</h3>
              <p className="text-gray-300 text-sm">
                Website rebuild, logo design, social media presence, Google Business optimization —
                we handle your entire digital identity from A to Z.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-umich-maize border-opacity-30 rounded-xl p-6 text-center hover:bg-opacity-20 transition-all">
              <div className="w-16 h-16 bg-umich-maize rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-umich-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Results in 3 Weeks — Guaranteed</h3>
              <p className="text-gray-300 text-sm">
                We don't just promise results — we guarantee them.
                See measurable improvements in traffic, leads, and visibility within 21 days or we keep working for free.
              </p>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="bg-gradient-to-r from-umich-maize to-yellow-400 rounded-2xl p-8 mb-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-umich-navy mb-6 text-center">
              What We Build, Update &amp; Maintain:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-umich-navy">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">High-performance websites that convert visitors to customers</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">SEO strategy that gets you ranking above competitors</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">GEO optimization so AI tools recommend YOU first</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Social media presence that builds trust and authority</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Content marketing campaigns that attract ideal customers</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Ongoing maintenance, updates &amp; performance monitoring</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-300 text-lg mb-6">
              Stop losing customers to competitors with better online presence.
              <br className="hidden md:block" />
              <span className="text-white font-bold">Let's turn your painting business into the market leader.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group bg-umich-maize text-umich-navy font-bold px-10 py-5 rounded-xl hover:bg-yellow-400 transition-all text-lg shadow-2xl hover:shadow-umich-maize/50 hover:scale-105 transform"
              >
                Get Your Free Consultation
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <a
                href="mailto:management@paintinga2.com"
                className="text-white hover:text-umich-maize font-semibold underline transition-colors"
              >
                or email: management@paintinga2.com
              </a>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              <span className="text-umich-maize font-bold">Limited availability:</span> We only take on 3 new clients per month to ensure quality results.
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      <DevServicesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
