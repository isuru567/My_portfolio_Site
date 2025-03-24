import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import img from '../assests/2.png';
import Resume from '../assests/Resume.pdf';
import { motion } from "motion/react"


const box = {
  width: 100,
  height: 55,
  borderRadius: 5,
}
const HeroSection = () => {
  
  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            whileInView={{opasity: 1, x:0, }}
            initial={{opasity:0, x:-100}}
            transition={{duration: 1.0}}
             
          className="flex-1 text-center sm:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Hi, I'm <span className="text-indigo-600"> Shehan</span> 
            </h2>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
              Full Stack Developer
            </h3>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto sm:mx-0">
              I craft beautiful and functional web experiences with modern technologies.
              Passionate about creating intuitive interfaces and scalable solutions.
            </p>

            {/* CTA Buttons */}
            <motion.div
              whileInView={{opasity: 1, x:0, }}
              initial={{opasity:0, x:-100}}
              transition={{duration: 1.75}}
            
            
            
            className="flex flex-col sm:flex-row gap-4  justify-center sm:justify-start">
              <motion.a 
                href="#projects"
                
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={box}

                className="px-6 text-center  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300  "
              >
                View Projects
              </motion.a>
              <motion.a 
                download='Isuru Shehan'
                href={Resume}

                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={box}

                className="px-6  border-2  border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300 text-center"
              >
                Download My CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center sm:justify-start pt-6">
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
          </motion.div>

          {/* Profile Image */}
          <motion.div
          
            whileInView={{opasity: 1, x:0, }}
            initial={{opasity:0, x:100}}
            transition={{duration: 1.0}}
            
            className="flex-1 flex justify-center lg:justify-end">
            
            <div className="relative">
              <div className="w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 shadow-xl">
                <img 
                  src={img}
                  alt="Isuru Shehan Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -z-10 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-indigo-200 rounded-full -top-2 -right-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
