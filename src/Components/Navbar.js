import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Install lucide-react for icons: npm install lucide-react

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  // Handle smooth scrolling
  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false); // Close menu on mobile after clicking
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
          {/* Logo or Brand Name */}
          <div className=" font-semibold text-indigo-600 text-3xl">
            Isuru Shehan
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative text-gray-600 hover:text-indigo-600 px-4 py-3 font-medium group ${
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full flex flex-col space-y-4 py-4 items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-gray-600 hover:text-indigo-600 text-lg font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
