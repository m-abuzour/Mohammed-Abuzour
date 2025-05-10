
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  color?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  liveSite?: string;
  github?: string;
  skills: Skill[];
}

const projects: Project[] = [
  {
    title: "Edu Story Website",
    description: "Edu Story is an electronic Website that aims to provide consulting and educational services to students wishing to study in Turkey. The platform provides comprehensive information about Turkish universities, academic specializations, application procedures, in addition to services such as visa and residency insurance, and personal educational consultations.",
    image: "/images/edu-story.png",
    liveSite: "https://edu-story.com",
    github: "https://github.com/m-abuzour/edu-story",
    skills: [
      { name: "PHP-Laravel" },
      { name: "MySQL" },
      { name: "Bootstrap" },
      { name: "Figma" }
    ]
  },
  {
    title: "E-Commerce Backend",
    description: "This system was developed as a backend for an e-commerce mobile application using Laravel, and aims to enable users to create their online stores, manage products, customize their profiles, and interact with customers through a live chat system, with support for an integrated control panel and instant notifications, and more.",
    image: "/images/e-commerce-app.png",
    liveSite: "https://edu-story.com",
    github: "https://github.com/m-abuzour/edu-story",
    skills: [
      { name: "Laravel" },
      { name: "AdminLTE" },
      { name: "WebSockets" },
      { name: "JWT" },
      { name: "API's" },
      { name: "Google Maps" },
      { name: "Firebase" },
      { name: "MySQL" },
      // { name: "Mobile Development: Flutter" },
    ]
  },
  {
    title: "E-Book Store",
    description: "E-Book Store is a web application developed using Vue.js 3 and TypeScript, providing a seamless experience for viewing and purchasing digital books in Arabic. It includes a user permissions system (regular user/administrator), a control panel, a shopping cart, and a fully Arabic interface.",
    image: "/images/book-store.png",
    liveSite: "https://edu-story.com",
    github: "https://github.com/m-abuzour/edu-story",
    skills: [
      { name: "Laravel" },
      { name: "RESTful API" },
      { name: "MySQL" },
      { name: "Vue.js" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Bootstrap" }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="project-skill">
                      {skill.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveSite && (
                    <a href={project.liveSite} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                      Live Site
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                      GitHub
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
