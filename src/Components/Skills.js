import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 70 },
    { name: 'CSS', percentage: 65 },
    { name: 'JavaScript', percentage: 60 },
    { name: 'Laravel', percentage: 75 },
    { name: 'React JS', percentage: 70 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center"> Skills</h1>

      <div className="grid grid-cols-1 gap-6"> 
        {skills.map((skill) => (
          <div key={skill.name} className="mb-8">
            <div className="flex items-center mb-2">
              <p className="text-lg font-medium text-gray-800 mr-4">{skill.name}</p>
              <span className="text-indigo-600 font-semibold">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
              <div 
                className="bg-indigo-600 h-3.5 rounded-full transition-all duration-500 ease-in-out" 
                style={{ width: `${skill.percentage}%` }} 
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;