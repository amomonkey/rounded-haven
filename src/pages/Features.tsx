
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      title: "Contact Management",
      description: "Store all your contacts in one place with powerful search and filtering capabilities.",
      details: [
        "Custom fields and tagging system",
        "Duplicate detection and merging",
        "Import/export capabilities",
        "Contact enrichment from social profiles"
      ]
    },
    {
      title: "Relationship Tracking",
      description: "Never forget a follow-up or important interaction with automatic tracking.",
      details: [
        "Email and calendar integration",
        "Conversation history across channels",
        "Follow-up reminders",
        "Interaction analytics"
      ]
    },
    {
      title: "Team Collaboration",
      description: "Share contacts and insights across your organization securely.",
      details: [
        "Customizable permission levels",
        "Contact sharing and transfer",
        "Team activity dashboard",
        "Notes and comments"
      ]
    },
    {
      title: "Automation",
      description: "Save time with intelligent automation for repetitive tasks.",
      details: [
        "Workflow automation",
        "Scheduled follow-ups",
        "Email sequence automation",
        "Event-triggered actions"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Gain insights from your contact data with powerful analytics.",
      details: [
        "Custom dashboards",
        "Relationship strength metrics",
        "Activity reports",
        "Engagement analytics"
      ]
    },
    {
      title: "Integrations",
      description: "Connect with your favorite tools for a seamless workflow.",
      details: [
        "Email providers (Gmail, Outlook)",
        "Calendar apps",
        "CRM systems",
        "Communication tools (Slack, Teams)"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Features Hero */}
        <section className="py-20 bg-tech-light">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Powerful features to transform your contact management
              </h1>
              <p className="text-xl text-gray-600">
                Discover the tools that make FolkSync the preferred choice for teams who value their business relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
              {featuresList.map((feature, index) => (
                <div key={index} className="relative">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-purple mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="py-20 bg-tech-light">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Developer-friendly API</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Build on top of our platform with our comprehensive, well-documented API. Integrate FolkSync 
                  with your own tools and extend functionality to meet your specific needs.
                </p>
                <p className="text-lg text-gray-600">
                  Our API supports RESTful endpoints with JSON responses and secure authentication. 
                  Full documentation is available to help you get started quickly.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>
{`// Example API request
fetch('https://api.folksync.com/contacts', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
