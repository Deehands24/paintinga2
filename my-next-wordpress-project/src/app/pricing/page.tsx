'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Pro',
    price: 29,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID,
    features: [
      'Professional directory listing',
      'Verified badge',
      'Full company profile',
      'Lead generation',
      'Email support',
    ],
    description: 'Perfect for established painting contractors',
  },
  {
    name: 'Premier',
    price: 79,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PREMIER_PRICE_ID,
    features: [
      'Everything in Pro, plus:',
      'Featured placement',
      'Dedicated lead calculator',
      'Priority support',
      'Exclusive lead routing',
      'Monthly analytics report',
    ],
    description: 'Best for growing businesses',
    popular: true,
  },
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string | undefined, planName: string) => {
    if (!priceId) {
      alert('Price ID not configured. Please set up your environment variables.');
      return;
    }

    setLoading(planName);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          metadata: {
            plan: planName,
          },
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to start checkout. Please try again.');
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that&apos;s right for your painting business
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full">
            <span className="text-sm font-medium">
              🎉 First month FREE for founding members
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-xl ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-600 text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>

                <div className="mt-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="ml-2 text-xl text-gray-500">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Cancel anytime, no contracts
                  </p>
                </div>

                <button
                  onClick={() => handleSubscribe(plan.priceId, plan.name)}
                  disabled={loading === plan.name}
                  className={`mt-8 w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-900 hover:bg-gray-800'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {loading === plan.name ? 'Loading...' : 'Get Started'}
                </button>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Is my credit card info secure?
              </h3>
              <p className="mt-2 text-gray-600">
                Absolutely. We use Stripe, the same payment processor used by
                Amazon, Google, and millions of businesses. We never see or
                store your card info.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Can I cancel anytime?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, cancel anytime. No contracts, no cancellation fees. We&apos;re
                confident you&apos;ll love the leads we generate.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Do you take a percentage of leads?
              </h3>
              <p className="mt-2 text-gray-600">
                No! It&apos;s just a flat monthly fee. All leads go directly to you,
                we don&apos;t take a cut of your jobs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Can I upgrade my plan later?
              </h3>
              <p className="mt-2 text-gray-600">
                Easy! Just contact us and we&apos;ll upgrade you immediately. Your
                billing will be prorated automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
