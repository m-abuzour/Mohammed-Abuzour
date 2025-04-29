
import React, { useState } from 'react';

interface ServiceProps {
  title: string;
  description: string;
}

const servicesList: ServiceProps[] = [
  {
    title: "API Development",
    description: "API development with secure authentication and fast response times."
  },
  {
    title: "Admin Dashboard",
    description: "Full-featured Laravel dashboard with roles and permissions."
  },
  {
    title: "Multi-Tenancy System",
    description: "Multi-Tenant structure with single shared database."
  },
  {
    title: "SPA Vue.js",
    description: "SPA using Vue3 + Vue Router + Vuex + Axios."
  },
  {
    title: "Front-End Design",
    description: "Clean HTML/CSS layouts, responsive and accessible."
  },
  {
    title: "Database Design",
    description: "Database modeling, optimization, and analytics."
  }
];

const Service: React.FC<ServiceProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="service min-w-[220px] flex-shrink-0 mx-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">{title}</h3>
      {isHovered && (
        <div className="service-hover">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">My Services</h2>
        
        <div className="overflow-hidden relative bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
          <div className="flex animate-scroll">
            {servicesList.concat(servicesList).map((service, index) => (
              <Service key={index} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
