
import React from 'react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Card,
  CardContent
} from "@/components/ui/card";
import { Database, Palette, LayoutDashboard, Code, SplitSquareVertical, Activity } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

const servicesList: ServiceProps[] = [
  {
    title: "API Development",
    description: "API development with secure authentication and fast response times.",
    icon: "api"
  },
  {
    title: "Admin Dashboard",
    description: "Full-featured Laravel dashboard with roles and permissions.",
    icon: "dashboard"
  },
  {
    title: "Multi-Tenancy System",
    description: "Multi-Tenant structure with single shared database.",
    icon: "database"
  },
  {
    title: "SPA Vue.js",
    description: "SPA using Vue3 + Vue Router + Vuex + Axios.",
    icon: "spa"
  },
  {
    title: "Front-End Design",
    description: "Clean HTML/CSS layouts, responsive and accessible.",
    icon: "design"
  },
  {
    title: "Database Design",
    description: "Database modeling, optimization, and analytics.",
    icon: "database"
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'api':
      return <Activity className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-3" />;
    case 'dashboard':
      return <LayoutDashboard className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-3" />;
    case 'database':
      return <Database className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-3" />;
    case 'spa':
      return <SplitSquareVertical className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-3" />;
    case 'design':
      return <Palette className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-3" />;
    default:
      return <Code className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-3" />;
  }
};

const Service: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="service min-w-[220px] flex-shrink-0 mx-4 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-10 flex flex-col items-center justify-center p-6 cursor-pointer">
            <CardContent className="p-0 flex flex-col items-center">
              {getIcon(icon)}
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center hidden group-hover:block">{description}</p>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent className="bg-white dark:bg-gray-800 p-3 text-sm max-w-[220px] text-gray-700 dark:text-gray-300 shadow-lg border border-gray-200 dark:border-gray-700">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
              <Service key={index} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
