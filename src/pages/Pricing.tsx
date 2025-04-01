
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      description: "Perfect for individuals and small teams just getting started.",
      features: [
        "Up to 1,000 contacts",
        "Basic contact management",
        "Email integration",
        "Custom fields",
        "Mobile app access",
        "Email support"
      ],
      popular: false,
      buttonText: "Start free trial"
    },
    {
      name: "Professional",
      price: "$49",
      description: "For growing teams that need more power and flexibility.",
      features: [
        "Up to 10,000 contacts",
        "Advanced contact management",
        "Email and calendar integration",
        "Workflow automation",
        "Team collaboration features",
        "API access",
        "Priority support"
      ],
      popular: true,
      buttonText: "Start free trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced needs and large teams.",
      features: [
        "Unlimited contacts",
        "Advanced security features",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
        "Training sessions",
        "24/7 priority support"
      ],
      popular: false,
      buttonText: "Contact sales"
    }
  ];

  const frequentlyAskedQuestions = [
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle."
    },
    {
      question: "What happens when I reach my contact limit?",
      answer: "You'll receive a notification when you're approaching your limit. You can upgrade to a higher plan or remain on your current plan, but you won't be able to add new contacts until you reduce the count or upgrade."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial on all plans with no credit card required. You can explore all features before making a commitment."
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer: "Yes, we offer special pricing for nonprofits, educational institutions, and startups. Please contact our sales team for more information."
    },
    {
      question: "How does billing work?",
      answer: "We offer both monthly and annual billing options. Annual billing comes with a 15% discount compared to monthly pricing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), as well as PayPal. Enterprise customers can also pay by invoice."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Pricing Hero */}
        <section className="py-20 bg-tech-light">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple, transparent pricing
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose the plan that's right for your business. All plans include a 14-day free trial.
              </p>
              <div className="inline-flex items-center bg-white p-1 rounded-lg border border-gray-200">
                <button className="px-4 py-2 rounded-md bg-primary-purple text-white">Monthly</button>
                <button className="px-4 py-2 rounded-md text-gray-700">Annual (Save 15%)</button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-soft overflow-hidden border ${plan.popular ? 'border-primary-purple' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="bg-primary-purple text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-gray-600 ml-2">/month</span>}
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <Button className={`w-full mb-8 ${plan.popular ? 'bg-primary-purple hover:bg-secondary-purple' : ''}`}>
                      {plan.buttonText}
                    </Button>
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-primary-purple mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-tech-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have a question that's not answered here? Contact our support team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              {frequentlyAskedQuestions.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
