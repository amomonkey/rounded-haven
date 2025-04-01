
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary-purple text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to transform your contact management?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of businesses that use FolkSync to build better relationships and drive growth. Start your 14-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary-purple hover:bg-gray-100 text-base py-6 px-8 rounded-lg flex items-center">
              Start for free
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base py-6 px-8 rounded-lg">
              Book a demo
            </Button>
          </div>
          <p className="mt-6 text-white/80 text-sm">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
