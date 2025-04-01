
import { 
  Users, 
  Calendar, 
  Mail, 
  PieChart, 
  MessageSquare, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: <Users className="h-6 w-6 text-primary-purple" />,
    title: "Contact Management",
    description: "Keep all your contacts organized in one place with custom fields, tags, and advanced filtering."
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary-purple" />,
    title: "Task Planning",
    description: "Schedule follow-ups, meetings, and reminders to stay on top of your relationships."
  },
  {
    icon: <Mail className="h-6 w-6 text-primary-purple" />,
    title: "Email Integration",
    description: "Connect your email accounts to track conversations and engage with contacts directly."
  },
  {
    icon: <PieChart className="h-6 w-6 text-primary-purple" />,
    title: "Insights & Reports",
    description: "Get valuable insights with customizable reports and dashboards to track your performance."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary-purple" />,
    title: "Team Collaboration",
    description: "Work together seamlessly with shared contacts, notes, and activities for better teamwork."
  },
  {
    icon: <Zap className="h-6 w-6 text-primary-purple" />,
    title: "Automation",
    description: "Save time with automated workflows, follow-ups, and personalized communications."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">All the tools you need to grow</h2>
          <p className="section-description">
            Our platform gives you everything you need to manage contacts, track interactions, and build stronger relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-feature group hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-purple/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-tech-dark group-hover:text-primary-purple transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
