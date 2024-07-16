"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./wobble-card";
import { FaCheck } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsTelephoneInboundFill } from "react-icons/bs";
import Plan350 from "../../public/assets/plan.png";
import Plan150 from "../../public/assets/plan150.png";
import Familia1 from "../../public/assets/familia.jpg";
import Familia2 from "../../public/assets/familia2.jpg";
import Familia3 from "../../public/assets/familia3.jpg";
import Familia4 from "../../public/assets/familia4.jpg";
import Plan450 from "../../public/assets/plan450.png";
import Plan250 from "../../public/assets/plan250.png";
import { BsPatchCheckFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { scrollToForm } from "./nuevanav";

import { Noise, Noise2, Noise3, Noise4, Noise5 } from "./Noisecomponents";
export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-4 max-w-7xl mx-auto">
      {/* Card 1 */}
      <WobbleCard
        NoiseComponent={Noise5}
        containerClassName="col-span-12 lg:col-span-6 bg-pink-800 min-h-[500px] lg:min-h-[400px]"
      >
        <div className="max-w-xs mx-auto lg:max-w-full">
          <h2 className="text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Medical’s Medicina Prepaga
          </h2>
          <div className="mt-4 text-left text-sm lg:text-base text-neutral-200 space-y-2">
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Planes de Salud 100% accesibles.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Profesionales de primer nivel.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Centros médicos de avanzada.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Médicos a domicilio las 24 hs. los
              365 días del año.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Descuentos en medicamentos.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Recupero de aportes de Obra Social
              para empleados.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Atención en los más modernos
              sanatorios y clínicas C.A.B.A. y G.B.A.
            </div>
          </div>
        </div>
      </WobbleCard>

      {/* Card 2 */}
      <WobbleCard
        NoiseComponent={Noise5}
        containerClassName="col-span-12 lg:col-span-6"
      >
        <h2 className="text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Medical’s es una empresa de salud fundada hace más de 35 años por
          profesionales de la medicina.
        </h2>
        <p className="mt-4 text-left text-sm lg:text-base text-neutral-200">
          Esto nos ha permitido tener un perfil médico antes que comercial
          dándole fuerza y sustento a nuestra filosofía «MEDICINA PARA TODOS».
        </p>
      </WobbleCard>

      {/* Cards de Planes */}
      <div className="col-span-12 flex flex-col lg:flex-row justify-center  gap-4 mt-4 mr">
        {/* Card Plan MD150 */}
        <a className="flex-1" target="_blank" rel="noopener noreferrer">
          <WobbleCard
            NoiseComponent={Noise}
            containerClassName="bg-gray-400 h-[420px] lg:w-[320px]"
          >
            <h2
              onClick={scrollToForm}
              className="px-12 py-4 rounded-full bg-[transparent] font-bold text-white tracking-widest uppercase transform hover:scale-105 transition-colors duration-200"
            >
              Plan MD150
            </h2>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-center">
                Permite un acceso integral a todos los servicios de nuestra Red
                de Prestadores, logrando un equilibrio perfecto entre precio y
                calidad de servicio.
              </p>
              <button
              onClick={scrollToForm}
              className="px-12 py-4 mt-6 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-gray-200 transition-colors duration-200"
            >
              Plan MD150
            </button>
            </div>
          </WobbleCard>
        </a>

        {/* Card Plan MD250 */}
        <a className="flex-1" target="_blank" rel="noopener noreferrer">
          <WobbleCard
            NoiseComponent={Noise2}
            containerClassName="bg-blue-400 h-[420px] lg:w-[320px]"
          >
            <h2
              onClick={scrollToForm}
              className="px-12 py-4 rounded-full bg-[transparent] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover: transition-colors duration-200"
            >
              Plan M250
            </h2>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-center">
                Ofrece una combinación equilibrada de costos asequibles y
                coberturas, que te permite acceder a una amplia gama de
                profesionales y servicios médicos ajustados a tu necesidad.
              </p>
              <button
              onClick={scrollToForm}
              className=" mt-6 px-12 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-blue-400 transition-colors duration-200"
            >
              Plan M250
            </button>
            </div>
          </WobbleCard>
        </a>

        {/* Card Plan MD350 */}
        <a className="flex-1" target="_blank" rel="noopener noreferrer">
          <WobbleCard
            NoiseComponent={Noise3}
            containerClassName="bg-blue-900 h-[420px] lg:w-[320px]"
          >
            <h2
              onClick={scrollToForm}
              className="px-12 py-4 rounded-full bg-[transparent+] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[transparent] transition-colors duration-200"
            >
              Plan MD350
            </h2>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-center">
                Amplia cartilla con especialistas, sanatorios, clínicas y
                centros médicos a tu disposición.
              </p>
              <button
              onClick={scrollToForm}
              className=" mt-6 px-12 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-blue-800  transition-colors duration-200"
            >
              Plan M350
            </button>
            </div>
          </WobbleCard>
        </a>

        {/* Card Plan MD450 */}
        <a className="flex-1" target="_blank" rel="noopener noreferrer">
          <WobbleCard
            NoiseComponent={Noise4}
            containerClassName="bg-gray-900 h-[420px] lg:w-[320px]"
          >
            <h2
              onClick={scrollToForm}
              className="px-12 py-4 rounded-full bg-[transparent] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#E82E8A] transition-colors duration-200"
            >
              Plan MD450
            </h2>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-center">
                Cartilla médica premium, atención personalizada y la más amplia
                cobertura prestacional geográfica con los mejores estándares de
                Calidad.
              </p>
              <button
              onClick={scrollToForm}
              className=" mt-6 px-12 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-gray-800 transition-colors duration-200"
            >
              Plan M250
            </button>
            </div>
          </WobbleCard>
        </a>
      </div>
    </div>
  );
}
