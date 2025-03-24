import React from 'react';
// import { motion } from 'motion/react';



const Skills = () => {
  const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'Laravel', 'React JS', 'Node/Express'];
  const softSkills = ['Problem Solving', 'Team Collaboration', 'Communication'];
  const tools = ['Git', 'VS Code', 'Figma'];
  const certifications = [
    'Undergraduate Degree in BICT, Rajarata University Of Sri Lanka (2020-2025)',
    'Laravel Beginner Course Certification',
    'React.js Beginner Course Certification',
    'Figma for UX Design Beginner Course Certification'
  ];

  return (
    <div id="skills" className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Professional Skills</h1>
      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        As a developer with expertise in both frontend and backend technologies, I build scalable applications
        with a focus on responsive design and performance optimization.
      </p>

      {/* Technical Skills */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {technicalSkills.map((skill) => (
            <div key={skill} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-indigo-600">
              <p className="text-lg font-medium text-gray-800 text-center">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills & Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center justify-center sm:text-left">Soft Skills</h2>
          <div className="space-y-3">
            {softSkills.map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
                <p className="font-medium text-gray-800 text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">Tools & Platforms</h2>
          <div className="space-y-3">
            {tools.map((tool) => (
              <div key={tool} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500">
                <p className="font-medium text-gray-800 text-center">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center sm:text-left">Education & Certifications</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
