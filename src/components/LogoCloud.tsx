
const LogoCloud = () => {
  // In a real implementation, these would be actual company logos
  const companies = [
    { name: "Company 1" },
    { name: "Company 2" },
    { name: "Company 3" },
    { name: "Company 4" },
    { name: "Company 5" },
    { name: "Company 6" },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <p className="text-center text-gray-500 mb-10">
          Trusted by innovative companies worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center">
              <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-sm">
                {company.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
