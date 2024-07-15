"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/logomedicals.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "../app.css";
import { SignupFormDemo } from "./formdemo";
export const scrollToForm  = () => {
  const formElement = document.getElementById("formid");
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);



  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 z-50">
      {/* Línea rosa encima del nav */}
      <div className="bg-[#E82E8A] h-3 w-full"></div> {/* Línea de color #E82E8A */}

      <div className="max-w-screen-lg mx-auto px-4 py-2 md:py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={Logo} alt="Logo" width={150} height={100} />
        </div>

        {/* Menú principal */}
        <div className="flex-grow text-black text-center md:text-right uppercase">
          <div className="flex justify-center items-center md:hidden absolute right-4 top-0 bottom-0">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none text-2xl md:text-base"
            >
              {isOpenMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <ul
            className={`md:flex mt-2 mr-10 justify-center md:justify-end space-x-4 md:space-x-8 font-medium ${
              isOpenMenu ? "block" : "hidden"
            }`}
          >
            <NavItem href="#" onClick={closeMenu}>
              Sucursales
            </NavItem>
            <NavItem href="#" onClick={closeMenu}>
              Quienes Somos
            </NavItem>
            <NavItem href="#" onClick={closeMenu}>
              Cartilla
            </NavItem>
          </ul>
        </div>

        <button
          onClick={scrollToForm}
          className="px-6 ml-1 py-4 md:py-3 hidden md:block rounded-full bg-[#E82E8A] text-white text-xs font-bold tracking-widest uppercase transform hover:scale-105 hover:bg-gray-700 transition-colors duration-200"
        >
          Solicitá Asesor
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children, onClick }) => {
  return (
    <li className="relative">
      <Link href={href} legacyBehavior>
        <a onClick={onClick}>{children}</a>
      </Link>
    </li>
  );
};

export default Navbar;
