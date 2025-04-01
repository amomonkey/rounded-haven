
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-dark mb-6 leading-tight">
              Build stronger relationships with
              <span className="text-primary-purple"> your contacts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              A CRM that's easy to use, helps you create meaningful connections, and drives your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary text-base py-6 px-8 rounded-lg flex items-center">
                Start for free
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" className="btn-secondary text-base py-6 px-8 rounded-lg">
                Book a demo
              </Button>
            </div>
            <p className="text-gray-500 mt-4 text-sm">
              No credit card required. Free 14-day trial.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white p-4 rounded-xl shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1470&auto=format&fit=crop" 
                alt="CRM Dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-purple text-white p-4 rounded-lg shadow-soft">
              <p className="font-medium">Boost your team's productivity by 35%</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-soft">
              <p className="font-medium text-primary-purple">Trusted by 1000+ companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
