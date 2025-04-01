
import React from "react";
import { Apple, Chrome, Figma, Slack, Github, Trello } from "lucide-react";

const LogoCloud = () => {
  const companyLogos = [
    { name: "Apple", icon: <Apple className="h-8 w-8 text-gray-700" /> },
    { name: "Google", icon: <Chrome className="h-8 w-8 text-gray-700" /> },
    { name: "Figma", icon: <Figma className="h-8 w-8 text-gray-700" /> },
    { name: "Slack", icon: <Slack className="h-8 w-8 text-gray-700" /> },
    { name: "GitHub", icon: <Github className="h-8 w-8 text-gray-700" /> },
    { name: "Trello", icon: <Trello className="h-8 w-8 text-gray-700" /> },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <p className="text-center text-gray-500 mb-10">
          Trusted by innovative companies worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companyLogos.map((company, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                {company.icon}
                <span className="text-sm text-gray-500">{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
