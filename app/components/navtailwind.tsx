"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const NavbarTailwind = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo (sm and up) */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
            <Image
        className="block "
        src="/logoiphone.png"  // Nota: Asegúrate de que la extensión sea correcta, e.g., .jpg o .png
        alt="Logo"
        width={50}
        height={100} // Asegúrate de agregar la propiedad height
      />
            </div>
          </div>

          {/* Menu items */}
          <div className="hidden sm:flex sm:space-x-4">
          <button className="px-12 py-3 mr-4 rounded-full bg-[#000000] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#d0cdcd] transition-colors duration-200">
        Product
      </button>
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-md"
            >
              Item1
            </a>
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-md"
            >
              Item2
            </a>
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-md"
            >
              Item3
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
          <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
              <Image
        className="block"
        src="/logoiphone.png"  // Nota: Asegúrate de que la extensión sea correcta, e.g., .jpg o .png
        alt="Logo"
        width={50}
        height={50} // Asegúrate de agregar la propiedad height
      />
              </div>
              <div className="-mr-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items- justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <FaTimes className="h-9 w-9" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Item1
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Item2 
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Item3
              </a>
          

              <button className="px-12 py-3  rounded-full bg-[#000000] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#d0cdcd] transition-colors duration-200">
        Product
      </button>
             
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarTailwind;
