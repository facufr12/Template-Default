import React from "react";
import { SignupFormDemo } from "./formdemo";
import NavbarTailwind from "./navtailwind";
const Header = () => {
  
  // Variable para el texto 
  const textheader = {
    texth1: "Apple",
    texth2: "Macbook",
    text3: "Iphone 50%"
  };
  return (
    <section id="header" className="relative">
      <div className="imgheader">
        <NavbarTailwind />
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* Contenedor para el texto */}
          <div className="flex items-center justify-center relative">
            <div className="flex flex-col items-start mx-auto space-y-4 relative top-[-10%] md:top-[-15%]">
              <h1 className="text-4xl md:text-7xl font-bold text-white-900 hidden md:block">
                {textheader.texth1}
              </h1>
              <h2 className="text-2xl md:text-5xl font-bold text-white-900 hidden md:block">
                {textheader.texth2}
              </h2>
              <h2 className="text-2xl md:text-4xl font-bold text-white-900   hidden md:block">
                {textheader.text3}
              </h2>
            </div>
          </div>
          {/* Contenedor para el formulario */}
          <div className="flex items-center justify-center">
            <SignupFormDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
