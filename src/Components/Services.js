import React from 'react';
import { Code2, Smartphone, Globe, Database, Brush, Settings } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-indigo-600" size={24} />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Creating responsive and dynamic websites using modern frameworks like React, Next.js, and Node.js."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications using React Native and modern mobile technologies."
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end development of web applications, from frontend interfaces to backend systems."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing and implementing efficient database structures using SQL and NoSQL solutions."
    },
    {
      icon: Brush,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with focus on user experience and accessibility."
    },
    {
      icon: Settings,
      title: "API Development",
      description: "Building robust and scalable RESTful APIs and backend services with proper documentation."
    }
  ];

  return (
    <div id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized in creating modern and efficient digital solutions 
            to help businesses grow and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Looking for a custom solution for your project?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;