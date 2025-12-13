import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Responsive Design',
        '5 Pages',
        'Basic SEO',
        'Contact Form',
        '1 Month Support',
        'Social Media Integration'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '2,499',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Up to 15 Pages',
        'Advanced SEO',
        'Custom Animations',
        '3 Months Support',
        'CMS Integration',
        'Analytics Setup',
        'Performance Optimization'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '4,999',
      description: 'For large-scale projects',
      features: [
        'Everything in Professional',
        'Unlimited Pages',
        'Custom Functionality',
        'API Integration',
        '6 Months Support',
        'Priority Support',
        'Custom Backend',
        'Training Sessions'
      ],
      highlighted: false
    },
  ];

  return (
    <div className="px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Select the perfect package for your project. All plans include our commitment to quality and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl p-5 lg:p-6 transition-all flex flex-col ${
                plan.highlighted 
                  ? 'bg-linear-to-br from-blue-600 to-purple-600 md:scale-[1.02] shadow-lg shadow-blue-500/15 ring-1 ring-white/12 hover:shadow-[0_0_32px_rgba(59,130,246,0.35)] hover:ring-2 hover:ring-blue-200/40' 
                  : 'bg-linear-to-br from-gray-900/80 to-gray-800/40 border border-gray-800 hover:shadow-[0_0_28px_rgba(59,130,246,0.28)] hover:ring-1 hover:ring-blue-400/25'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-lg lg:text-xl text-white mb-2">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.highlighted ? 'text-white/80' : 'text-gray-400'}`}>
                {plan.description}
              </p>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl text-white">${plan.price}</span>
                <span className={`${plan.highlighted ? 'text-white/80' : 'text-gray-400'} text-xs lg:text-sm`}>/project</span>
              </div>
              <div className="space-y-2.5 text-sm">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className={plan.highlighted ? 'text-white' : 'text-blue-500'} size={20} />
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-300'}>{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full py-2 rounded-lg mt-5 transition-colors text-sm font-medium ${
                plan.highlighted 
                  ? 'bg-white text-blue-600 hover:bg-gray-100' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
