import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  // Handle smooth scrolling
  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Navigation Links */}
          <div className="flex justify-center w-full">
            <div className="flex space-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative text-gray-600 hover:text-indigo-600 px-4 py-3 text-me font-medium group ${
                    activeSection === item.href.substring(1) ? 'text-indigo-600' : ''
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out ${
                      activeSection === item.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;