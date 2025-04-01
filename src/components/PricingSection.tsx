
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams just getting started",
      price: annual ? 12 : 15,
      features: [
        "Up to 1,000 contacts",
        "Basic contact management",
        "Email integration",
        "Task management",
        "Mobile app access",
        "Email support"
      ],
      popular: false,
      cta: "Start for free"
    },
    {
      name: "Professional",
      description: "For growing teams that need more power and flexibility",
      price: annual ? 29 : 39,
      features: [
        "Up to 10,000 contacts",
        "Advanced contact management",
        "Email & calendar integration",
        "Task automation",
        "Team collaboration",
        "Custom fields & tags",
        "Basic analytics",
        "Priority support"
      ],
      popular: true,
      cta: "Start free trial"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex requirements",
      price: annual ? 79 : 99,
      features: [
        "Unlimited contacts",
        "Advanced security features",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced workflow automation",
        "Advanced analytics & reporting",
        "API access",
        "24/7 premium support",
        "Onboarding & training"
      ],
      popular: false,
      cta: "Contact sales"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-description">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center mt-8 mb-12">
            <span className={`mr-3 ${annual ? 'text-gray-600' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  annual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${annual ? 'text-gray-600' : 'text-gray-400'}`}>
              Annual <span className="text-primary-purple font-medium">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl border ${
                plan.popular 
                  ? 'border-primary-purple shadow-lg relative' 
                  : 'border-gray-200 shadow-soft'
              } bg-white p-8`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-purple text-white text-xs uppercase font-bold tracking-wider py-1 px-3 rounded-full">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-2xl font-bold text-tech-dark mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6 h-12">
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-tech-dark">${plan.price}</span>
                <span className="text-gray-600 ml-1">/ month</span>
                {annual && <p className="text-sm text-gray-500">Billed annually</p>}
              </div>
              
              <Button 
                className={`w-full mb-8 ${
                  plan.popular 
                    ? 'bg-primary-purple hover:bg-secondary-purple' 
                    : 'bg-white border border-gray-200 text-tech-dark hover:bg-gray-50'
                } rounded-lg`}
              >
                {plan.cta}
              </Button>
              
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary-purple mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
