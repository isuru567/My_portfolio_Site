import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', percentage: 70, },
    { name: 'CSS', percentage: 65,  },
    { name: 'JavaScript', percentage: 60,  },
    { name: 'Laravel', percentage: 75, },
    { name: 'React JS', percentage: 70, },
    { name: 'Node/Express', percentage: 50, },
  ];

  const softSkills = [
    { name: 'Problem Solving', percentage: 85 },
    { name: 'Team Collaboration', percentage: 80 },
    { name: 'Communication', percentage: 75 },
  ];

  const tools = [
    { name: 'Git', percentage: 75 },
    { name: 'VS Code', percentage: 80 },
    { name: 'Figma', percentage: 60 },
  ];

  return (
    <div id="skills" className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Professional Skills</h1>
      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        As a developer with expertise in both frontend and backend technologies, I've built scalable applications 
        with focus on responsive design and performance optimization.
      </p>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalSkills.map((skill) => (
            <div key={skill.name} className="mb-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-medium text-gray-800">{skill.name}</p>
                <span className="text-indigo-600 font-semibold">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                  style={{ width: `${skill.percentage}%` }} 
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soft Skills</h2>
          <div className="space-y-4">
            {softSkills.map((skill) => (
              <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-800">{skill.name}</p>
                  <span className="text-indigo-600 font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500 ease-in-out" 
                    style={{ width: `${skill.percentage}%` }} 
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Platforms</h2>
          <div className="space-y-4">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-800">{tool.name}</p>
                  <span className="text-indigo-600 font-semibold">{tool.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-in-out" 
                    style={{ width: `${tool.percentage}%` }} 
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Education & Certifications</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Undergraduate Degree in BICT, Rajarata University Of Sri-lanka (2020-2025)</li>
          <li>Laravel Beginer Coures Certification</li>
          <li>React.js Beginer Course Certification</li>
          <li>Figama for UX Design  Beginer Course Certification</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;