
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Globe, Heart, Trophy } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Product at a leading CRM company, Sarah founded FolkSync to solve the contact management challenges she experienced firsthand.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&q=80&crop=faces&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "With 15+ years of engineering leadership experience, Michael leads our technical strategy and development team.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&q=80&crop=faces&fit=crop"
    },
    {
      name: "Amelia Garcia",
      role: "VP of Product",
      bio: "Amelia brings her passion for user-centered design to ensure FolkSync delivers an exceptional experience for all users.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&q=80&crop=faces&fit=crop"
    },
    {
      name: "David Okafor",
      role: "VP of Customer Success",
      bio: "David and his team ensure customers get the most out of FolkSync through excellent support and training.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&q=80&crop=faces&fit=crop"
    }
  ];

  const companyValues = [
    {
      title: "Customer Success",
      description: "We succeed when our customers succeed. Every decision starts with the customer in mind.",
      icon: <Trophy className="h-10 w-10 text-primary-purple mb-4" />
    },
    {
      title: "Continuous Innovation",
      description: "We're always improving, learning, and pushing the boundaries of what's possible in relationship management.",
      icon: <Globe className="h-10 w-10 text-primary-purple mb-4" />
    },
    {
      title: "Team Collaboration",
      description: "We believe great products come from diverse teams working together with respect and trust.",
      icon: <Users className="h-10 w-10 text-primary-purple mb-4" />
    },
    {
      title: "Positive Impact",
      description: "Beyond business goals, we strive to create positive change in our communities and the world.",
      icon: <Heart className="h-10 w-10 text-primary-purple mb-4" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* About Hero */}
        <section className="py-20 bg-tech-light">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our mission is to transform how businesses build relationships
              </h1>
              <p className="text-xl text-gray-600">
                At FolkSync, we're passionate about helping businesses build stronger, 
                more meaningful connections with their customers and partners.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 italic">Company milestone image</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2019, FolkSync emerged from our founder's frustration with existing contact 
                  management solutions that were either too complex, too simple, or didn't work well for teams.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What started as a solution for a small team has grown into a platform trusted by thousands 
                  of businesses worldwide. We've expanded our team and product, but our core mission remains the same: 
                  to help businesses build better relationships.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we're a team of 50+ passionate individuals working remotely across 15 countries, 
                  united by our mission to transform relationship management for modern businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-tech-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do, from product development to customer support.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-soft text-center">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet our leadership team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The passionate people guiding our mission and product vision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-soft overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-purple font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="py-20 bg-tech-light">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Join our team</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're always looking for talented people to join our mission. Check out our open positions.
              </p>
              <Link to="/careers">
                <Button size="lg" className="bg-primary-purple hover:bg-secondary-purple">
                  View open positions
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
