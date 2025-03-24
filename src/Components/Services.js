import React from 'react';
import { Code2, Smartphone, Globe, Database, Brush, Settings } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
      <Icon className="text-indigo-600" size={28} />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    { icon: Code2, title: "Web Development", description: "Creating responsive and dynamic websites using React, Next.js, and Node.js." },
    { icon: Smartphone, title: "Mobile Development", description: "Building cross-platform mobile applications using React Native." },
    { icon: Globe, title: "Full Stack Solutions", description: "End-to-end development from frontend to backend systems." },
    { icon: Database, title: "Database Design", description: "Designing and optimizing SQL & NoSQL databases for efficiency." },
    { icon: Brush, title: "UI/UX Design", description: "Designing intuitive user experiences with accessibility in mind." },
    { icon: Settings, title: "API Development", description: "Developing scalable and secure RESTful APIs." }
  ];

  return (
    <div id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I specialize in modern and efficient digital solutions to help businesses grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">Looking for a custom solution for your project?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
