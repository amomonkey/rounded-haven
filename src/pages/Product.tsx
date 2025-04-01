
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-tech-light">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything you need to manage your contacts effectively
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover how our intuitive platform helps you organize, track, and grow your business relationships.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-primary-purple hover:bg-secondary-purple text-white px-8 py-6 rounded-lg text-lg">
                  Start your free trial
                </Button>
                <Button variant="outline" className="px-8 py-6 rounded-lg text-lg">
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact management reimagined</h2>
                <p className="text-lg text-gray-600 mb-6">
                  FolkSync gives you a centralized platform to store, organize, and leverage all your contact data.
                  No more scattered information across different tools and platforms.
                </p>
                <ul className="space-y-4">
                  {[
                    "Store all contact information in one secure place",
                    "Create custom fields to track what matters to your business",
                    "Tag and segment contacts for targeted communication",
                    "Track interactions and build stronger relationships"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-primary-purple mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 italic">Product dashboard preview</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-tech-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Built for every team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Whether you're in sales, marketing, customer success, or leadership, FolkSync adapts to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sales Teams",
                  description: "Track leads, manage deals, and never miss a follow-up opportunity with automated reminders."
                },
                {
                  title: "Marketing Teams",
                  description: "Segment your audience, personalize campaigns, and measure engagement all from one platform."
                },
                {
                  title: "Customer Success",
                  description: "Build stronger relationships with centralized customer information and interaction history."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-soft">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <Link to="/features" className="text-primary-purple font-medium hover:text-secondary-purple">
                    Learn more →
                  </Link>
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

export default Product;
