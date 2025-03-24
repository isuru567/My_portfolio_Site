import React, { useState } from 'react';
import Library from '../assests/library.PNG';
import CURD from '../assests/Laravel_CURD.PNG';
import Attend from '../assests/Attendence.PNG';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Library Management System",
      description: "A full-stack library solution with member enrollment, book borrowing, and other services.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: Library, 
      githubUrl: "https://github.com/isuru567/Library-Management-System",
      category: "web"
    },
    {
      id: 2,
      title: "Simple CRUD App",
      description: "A CRUD application using Laravel and MySQL.",
      technologies: ["Laravel", "MySQL"],
      imageUrl: CURD, 
      githubUrl: "https://github.com/isuru567/Laravel_App",
      category: "web"
    },
    {
      id: 3,
      title: "Attendance Management System",
      description: "An analytics dashboard for attendance management, suitable for schools, classes, and offices.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      imageUrl: Attend, 
      githubUrl: "https://github.com/isuru567/Attendance-Management-System",
      category: "data"
    }
  ];

  // Categories for filtering
  const categories = ["all", "web", "mobile", "data"];
  const [activeFilter, setActiveFilter] = useState("all");

  // Filtered projects
  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div id="projects" className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">My Projects</h1>
      <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Here are some of my recent projects showcasing my skills and expertise in web development, 
        application design, and problem-solving.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-8 gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              activeFilter === category 
                ? "bg-indigo-600 text-white" 
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden bg-gray-200">
              {project.imageUrl ? (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-500">
                  <span className="text-xl font-semibold">{project.title}</span>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 text-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">Interested in seeing more of my work?</p>
        <a 
          href="https://github.com/isuru567" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
        >
          View More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
