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
export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-12 mt-4 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[400px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Medical’s Medicina Prepaga
          </h2>
          <div className="mt-4 text-left text-base/6 text-neutral-200 space-y-2">
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
      <WobbleCard containerClassName="col-span 2  min-h-[300px]">
        <h2 className="max-w-100  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Medical’s es una empresa de salud fundada hace más de 35 años por
          profesionales de la medicina.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Esto nos ha permitido tener un perfil médico antes que comercial
          dándole fuerza y sustento a nuestra filosofía «MEDICINA PARA TODOS».
        </p>
      </WobbleCard>
      <div />

      <div className="flex justify-center gap-6 mt-4">
  <a
    className="flex-1"
    href="https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD150"
    target="_blank"
    rel="noopener noreferrer"
  >
  <WobbleCard containerClassName="w-full bg-gray-400 h-[420px] w-[320px]">
  <button className="px-12 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#E82E8A] transition-colors duration-200">
    Plan MD150
  </button>
  <div className="flex flex-col justify-center items-center h-full">
    <p>
      Permite un acceso integral a todos los servicios de nuestra Red de Prestadores, logrando un equilibrio perfecto entre precio y calidad de servicio.
    </p>
  </div>
</WobbleCard>

  </a>

  <a
    className="flex-1"
    href="https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD250"
    target="_blank"
    rel="noopener noreferrer"
  >
    <WobbleCard containerClassName="w-full bg-blue-400 h-[420px] w-[320px]">
      <button className="px-12 py-4 mb-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#E82E8A] transition-colors duration-200">
        Plan MD250
      </button>
      <div className="flex flex-col justify-center items-center h-full">
        <p>
          Ofrece una combinación equilibrada de costos asequibles y coberturas, que te permite acceder a una amplia gama de profesionales y servicios médicos ajustados a tu necesidad.
        </p>
      </div>
    </WobbleCard>
  </a>

  <a
    className="flex-1"
    href="https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD350"
    target="_blank"
    rel="noopener noreferrer"
  >
    <WobbleCard containerClassName="w-full bg-blue-900 h-[420px] w-[320px]">
      <button className="px-12 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#E82E8A] transition-colors duration-200">
        Plan MD350
      </button>
      <div className="flex flex-col justify-center items-center h-full">
        <p>
        Amplia cartilla con especialistas, sanatorios, clínicas y centros médicos a tu disposición.
        </p>
      </div>
    </WobbleCard>
  </a>

  <a
    className="flex-1"
    href="https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD450"
    target="_blank"
    rel="noopener noreferrer"
  >
    <WobbleCard containerClassName="w-full bg-gray-900 h-[420px] w-[320px]">
      <button className="px-12 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#E82E8A] transition-colors duration-200">
        Plan MD450
      </button>
      <div className="flex flex-col justify-center items-center h-full">
        <p>
          Cartilla médica premium, atención personalizada y la más amplia cobertura prestacional geográfica con los mejores estándares de Calidad.
        </p>
      </div>
    </WobbleCard>
  </a>
</div>
    </div>
  );
}
