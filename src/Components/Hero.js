import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import img from '../assests/2.png';

const HeroSection = () => {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hi, I'm <span className="text-indigo-600">Isuru Shehan</span> 
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
              Full Stack Developer
            </h3>
            
            <p className="text-lg text-gray-600 max-w-2xl">
              I craft beautiful and functional web experiences with modern technologies.
              Passionate about creating intuitive interfaces and scalable solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>

            
            <div className="flex gap-6 justify-center lg:justify-start pt-6">
              <a 
                href="https://github.com/isuru567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/isuru-shehan-1866b4241/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              
            </div>
          </div>

          
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 shadow-xl">
                <img 
                  src={img}
                  alt="Isuru Shehan Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 bg-indigo-200 rounded-full -top-3 -right-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;