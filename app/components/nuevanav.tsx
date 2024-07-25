"use client"
import Link from "next/link";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToForm } from "./formdemo";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      {/* Línea rosa encima del nav */}
      <div className="bg-[#000000] h-3 w-full"></div> {/* Línea de color #000000 */}

      <div className="max-w-screen-lg mx-auto px-4 py-2 md:py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/">
          <a className="flex-shrink-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
              alt="Logo"
              className="w-16 cursor-pointer"
            />
          </a>
        </Link>

        {/* Botón para el menú responsivo */}
        <div className="md:hidden">
          <button className="text-3xl text-black p-1" onClick={toggleMenu}>
            {isOpenMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Enlaces del menú */}
        <div className={`md:flex flex-grow ${isOpenMenu ? "block" : "hidden"} md:block mt-2 md:mt-0 md:w-auto md:flex-grow md:flex-row md:items-center md:space-x-6`}>
          <NavItem href="/proyectos" onClick={closeMenu}>Item1</NavItem>
          <NavItem href="#" onClick={closeMenu}>Item2</NavItem>
          <NavItem href="#" onClick={closeMenu}>Item3</NavItem>
        </div>

        {/* Botón de sign in */}
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]" onClick={scrollToForm}>
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};
const NavItem = ({ href, children, onClick }) => {
  return (
    <Link href={href} legacyBehavior>
      <href className="text-black hover:text-gray-300" onClick={onClick}>
        {children}
      </href>
    </Link>
  );
};

export default NavItem;