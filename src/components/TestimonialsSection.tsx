
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "FolkSync transformed how our team manages contacts. The interface is intuitive, and the automation features save us hours each week. Highly recommended!",
    author: "Sarah Johnson",
    position: "Sales Director",
    company: "TechGrowth Inc.",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 5
  },
  {
    id: 2,
    quote: "We tried several CRM solutions before finding FolkSync. It's the perfect balance of powerful features and ease of use. Our sales team adopted it immediately without any resistance.",
    author: "Michael Chen",
    position: "Operations Manager",
    company: "Nexus Partners",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "The customer support at FolkSync is exceptional. Whenever we've had questions, their team responds quickly with helpful solutions. It's made our transition to a new CRM seamless.",
    author: "Emily Williams",
    position: "Customer Success Lead",
    company: "Horizon Digital",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-tech-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What our customers say</h2>
          <p className="section-description">
            Join thousands of satisfied users who've transformed how they manage their business relationships.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-soft p-8 md:p-10">
            <div className="flex mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium mb-8 italic">
              "{currentTestimonial.quote}"
            </blockquote>
            
            <div className="flex items-center">
              <img 
                src={currentTestimonial.avatar} 
                alt={currentTestimonial.author}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <div className="font-semibold text-tech-dark">{currentTestimonial.author}</div>
                <div className="text-gray-600">{currentTestimonial.position}, {currentTestimonial.company}</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-200 hover:bg-white hover:border-primary-purple transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full ${idx === currentIndex ? 'bg-primary-purple' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-200 hover:bg-white hover:border-primary-purple transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
