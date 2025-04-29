
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700 py-16 px-4 relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-white/20 text-white hover:bg-white/30"
          onClick={toggleTheme}
        >
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-3/5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Mohammed Abuzour</h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Full Stack Web Developer | Laravel, API, Vue.js Specialist
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <a href="#contact" className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition-all">
              Contact Me
            </a>
            <a href="#projects" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-2 px-6 rounded-lg transition-all">
              View Projects
            </a>
          </div>
        </div>
        <div className="lg:w-2/5 flex justify-center lg:justify-end">
          <div className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="https://avatars.githubusercontent.com/u/109964750?v=4" 
              alt="Mohammed Abuzour" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
