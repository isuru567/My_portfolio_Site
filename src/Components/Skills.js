import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'Laravel' },
    { name: 'React JS' },
    { name: 'Node/Express' },
  ];

  const softSkills = [
    { name: 'Problem Solving' },
    { name: 'Team Collaboration' },
    { name: 'Communication' },
  ];

  const tools = [
    { name: 'Git' },
    { name: 'VS Code' },
    { name: 'Figma' },
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {technicalSkills.map((skill) => (
            <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-600">
              <p className="text-lg font-medium text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soft Skills</h2>
          <div className="space-y-3">
            {softSkills.map((skill) => (
              <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <p className="font-medium text-gray-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Platforms</h2>
          <div className="space-y-3">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <p className="font-medium text-gray-800">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Education & Certifications</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Undergraduate Degree in BICT, Rajarata University Of Sri-lanka (2020-2025)</li>
          <li>Laravel Beginner Course Certification</li>
          <li>React.js Beginner Course Certification</li>
          <li>Figma for UX Design Beginner Course Certification</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;