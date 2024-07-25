"use client"
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-8 w-auto" src="/logo.svg" alt="Logo" />
            <img className="hidden lg:block h-8 w-auto" src="/logo.svg" alt="Logo" />
          </div>

          {/* Navbar items (hidden on mobile) */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Item 1</a>
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Item 2</a>
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Item 3</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className={`text-white block px-3 py-2 rounded-md text-base font-medium ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 delay-100`}>Item 1</a>
          <a href="#" className={`text-white block px-3 py-2 rounded-md text-base font-medium ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 delay-200`}>Item 2</a>
          <a href="#" className={`text-white block px-3 py-2 rounded-md text-base font-medium ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 delay-300`}>Item 3</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
