import React from "react";

const PricingSection = () => {
  return (
    <section className="w-full bg-[#f8f8fc] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>

          <p className="text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">

          {/* Starter */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Starter
            </h3>

            <p className="text-gray-500 mb-8">
              Perfect for getting started
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-gray-500 text-2xl">/Month</span>
            </div>

            <ul className="space-y-4 mb-10 text-gray-600">
              <li>✓ Access to 10 free tools</li>
              <li>✓ Basic templates</li>
              <li>✓ Community support</li>
              <li>✓ 1 project per month</li>
            </ul>

            <button className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold hover:scale-105 transition">
              Get Started Free
            </button>
          </div>


          {/* Pro (Featured) */}
          <div className="relative rounded-2xl bg-gradient-to-b from-purple-700 to-fuchsia-600 p-8 text-white shadow-xl scale-105">

            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-gray-800 text-sm font-medium px-4 py-1 rounded-full">
              Most Popular
            </div>

            <h3 className="text-3xl font-bold mb-2">
              Pro
            </h3>

            <p className="text-white/80 mb-8">
              Best for professionals
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold">$29</span>
              <span className="text-2xl text-white/80">/Month</span>
            </div>

            <ul className="space-y-4 mb-10">
              <li>✓ Access to all premium tools</li>
              <li>✓ Unlimited templates</li>
              <li>✓ Priority support</li>
              <li>✓ Unlimited projects</li>
              <li>✓ Cloud sync</li>
              <li>✓ Advanced analytics</li>
            </ul>

            <button className="w-full py-4 rounded-full bg-white text-purple-700 font-semibold hover:scale-105 transition">
              Start Pro Trial
            </button>
          </div>


          {/* Enterprise */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Enterprise
            </h3>

            <p className="text-gray-500 mb-8">
              For teams and businesses
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-gray-500 text-2xl">/Month</span>
            </div>

            <ul className="space-y-4 mb-10 text-gray-600">
              <li>✓ Everything in Pro</li>
              <li>✓ Team collaboration</li>
              <li>✓ Custom integrations</li>
              <li>✓ Dedicated support</li>
              <li>✓ SLA guarantee</li>
              <li>✓ Custom branding</li>
            </ul>

            <button className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold hover:scale-105 transition">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;