
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">Contact Me</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in new projects and opportunities. Feel free to reach out to me through any of these channels.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <a href="mailto:mohammadabozuor@gmail.com" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    mohammadabozuor@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-700 p-3 rounded-full mr-4">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gray-800 dark:bg-gray-700 p-3 rounded-full mr-4">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <a href="https://github.com/m-abuzour" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    GitHub Profile
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Upwork Profile
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <a href="https://mostaql.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Mostaql Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-xl border border-blue-100 dark:border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Download My CV</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Get my complete resume with details about my experience, education, and skills.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
