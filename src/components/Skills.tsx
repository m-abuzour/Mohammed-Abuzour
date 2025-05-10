import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
}

interface SkillsData {
  backend: Skill[];
  frontend: Skill[];
  tools: Skill[];
}

const Skills = () => {
  const skills: SkillsData = {
    backend: [
      { name: 'PHP/Laravel', level: 95 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'MySQL', level: 88 },
      { name: 'Software Architecture', level: 85 },
      { name: 'Microservices', level: 82 }
    ],
    frontend: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Vue.js', level: 85 },
      { name: 'Bootstrap', level: 88 },
      { name: 'jQuery', level: 85 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman', level: 88 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Figma', level: 75 },
      { name: 'Trello', level: 85 }
    ]
  };

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6">Backend Development</h3>
              <div className="space-y-6">
                {skills.backend.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div 
                        className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6">Frontend Development</h3>
              <div className="space-y-6">
                {skills.frontend.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div 
                        className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6">Tools & Workflow</h3>
              <div className="space-y-6">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div 
                        className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;