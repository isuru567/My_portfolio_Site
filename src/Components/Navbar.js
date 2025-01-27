import React from 'react';

const Navbar = () => {
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '/Skills' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          

         {/* Navigation Links */}
<div className="flex justify-center w-full">
  <div className="flex space-x-12">
    {navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="relative text-gray-600 hover:text-indigo-600 px-4 py-3 text-me font-medium group"
      >
        {item.name}
        <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 ease-in-out" />
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