"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/logomedicals.png";
import { FaBars } from "react-icons/fa";
import "../App.css";
import { SignupFormDemo } from "./formdemo";
const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const scrollToForm = () => {
    const formElement = document.getElementById("formid");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 z-50">
      <div className="max-w-screen-lg mx-auto px-4 py-2 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={Logo} alt="Logo" width={150} height={100} />
        </div>

        {/* Menú principal */}
        <div className="flex-grow text-black text-center md:text-right uppercase relative">
          <div className="flex justify-center items-center md:hidden absolute left-0 right-0 top-0 bottom-0">
            {!isOpenMenu && (
              <button
                onClick={toggleMenu}
                className="text-gray-900 focus:outline-none  text-2xl md:text-base"
              >
                <FaBars />
              </button>
            )}
          </div>
          <ul
            className={`md:flex mt-2 mr-4 justify-center md:justify-end space-x-4 md:space-x-8 font-medium ${
              isOpenMenu ? "block" : "hidden"
            }`}
          >
            <NavItem
              href="https://medicals.ar/sucursales/"
              onClick={toggleMenu}
            >
              Sucursales
            </NavItem>
            <NavItem
              href="https://medicals.ar/quienes-somos/"
              onClick={toggleMenu}
            >
              Quienes Somos
            </NavItem>
            <NavItem href="https://medicals.ar/cartilla/" onClick={toggleMenu}>
              Cartilla
            </NavItem>
          </ul>
          <div className="absolute top-0 right-0 md:relative md:static mt-2 md:mt-0"></div>
        </div>

        <button
          onClick={scrollToForm}
          className="px-3 md:px-6 ml-1 md:ml-3 py-2 md:py-3 rounded-full bg-[#E82E8A] text-white text-xs md:text-base font-bold tracking-widest uppercase transform hover:scale-105 hover:bg-gray-700 transition-colors duration-200"
        >
          Solicitá Asesor
        </button>
      </div>
      <div></div>
    </nav>
  );
};

const NavItem = ({ href, children, onClick }) => {
  return (
    <li className="relative">
    <Link href={href}>
        {children}
      
    </Link>
  </li>
  );
};

export default Navbar;
