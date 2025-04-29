
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
    title: "Edu Story",
    description: "Educational platform with multi-role access, admin dashboard, and SEO-ready content management built with Laravel.",
    image: "https://edu-story.com/assest/images/logo.png",
    liveSite: "https://edu-story.com",
    github: "https://github.com/m-abuzour/edu-story",
    skills: [
      { name: "Laravel" },
      { name: "Auth" },
      { name: "API" },
      { name: "Dashboard" },
      { name: "MySQL" }
    ]
  },
  {
    title: "Multi-tenant System",
    description: "A scalable multi-tenant system with separate databases and customization options for each tenant.",
    image: "https://placeholder.svg",
    skills: [
      { name: "Laravel" },
      { name: "Multi-Tenant" },
      { name: "API" },
      { name: "SPA" },
      { name: "Vue.js" }
    ]
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with inventory management, payment integration, and customer profiles.",
    image: "https://placeholder.svg",
    skills: [
      { name: "Laravel" },
      { name: "API" },
      { name: "Vue.js" },
      { name: "Payment" },
      { name: "MySQL" }
    ]
  },
  {
    title: "Learning Management System",
    description: "Complete LMS with course creation, student tracking, and interactive assignments.",
    image: "https://placeholder.svg",
    skills: [
      { name: "Laravel" },
      { name: "Auth" },
      { name: "API" },
      { name: "Vue.js" },
      { name: "Media" }
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
