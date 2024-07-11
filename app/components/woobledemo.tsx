"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./wobble-card";
import { FaCheck } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsTelephoneInboundFill } from "react-icons/bs";
import Plan350 from "../../public/assets/plan.png"
import Plan150 from "../../public/assets/plan150.png"
import Familia1 from "../../public/assets/familia.jpg"

import Familia2 from "../../public/assets/familia2.jpg"

import Familia3 from "../../public/assets/familia3.jpg"

import Familia4 from "../../public/assets/familia4.jpg"

import Plan450 from "../../public/assets/plan450.png"
import Plan250 from "../../public/assets/plan250.png"
import { BsPatchCheckFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
    
    <a href="https://medicals.ar/contacto/" target="_blank" rel="noopener noreferrer">
    <WobbleCard containerClassName="col-span 2 min-h-[300px] bg-[#255194]">
      <h2 className="flex items-center max-w-100 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        <BsArrowRightSquareFill className="mr-2" /> Quiero Ser SOCIO
      </h2>
    </WobbleCard>
  </a>

  <a href="https://api.whatsapp.com/send?phone=541173677180&text=Hola%20Medicals%2C%20estoy%20interesado%20en%20tus%20Planes%20de%20Salud!" target="_blank" rel="noopener noreferrer">
    <WobbleCard containerClassName="col-span 2 min-h-[300px] bg-[#E82E8A]">
      <h2 className="flex items-center max-w-100 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        <BsPatchCheckFill className="mr-2" /> Atención al SOCIO
      </h2>
    </WobbleCard>
  </a>

    <WobbleCard containerClassName="col-span 2 min-h-[300px] bg-[#37B027]">
      <h2 className="flex items-center max-w-100 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        <BsTelephoneInboundFill className="mr-2" /> EMERGENCIAS 0810 777 1221
      </h2>
    </WobbleCard>
 
    
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
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
          <FaCheck className="mr-2" /> Médicos a domicilio las 24 hs. los 365 días del año.
        </div>
        <div className="flex items-center">
          <FaCheck className="mr-2" /> Descuentos en medicamentos.
        </div>
        <div className="flex items-center">
          <FaCheck className="mr-2" /> Recupero de aportes de Obra Social para empleados.
        </div>
        <div className="flex items-center">
          <FaCheck className="mr-2" /> Atención en los más modernos sanatorios y clínicas C.A.B.A. y G.B.A.
        </div>
      </div>
    </div>
    
      </WobbleCard>
      <WobbleCard containerClassName="col-span 2  min-h-[300px]">
        <h2 className="max-w-100  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Medical’s es una empresa de salud fundada hace más de 35 años por profesionales de la medicina. 
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Esto nos ha permitido tener un perfil médico antes que comercial dándole fuerza y sustento a nuestra filosofía «MEDICINA PARA TODOS».
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-[#000000] relative">
  <div className="flex flex-col justify-center items-center h-full">
    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      Conocé cada uno de nuestros Planes
    </h2>
    <div className="absolute inset-0 flex justify-end items-center">
      <Image
        src={Familia1}
        width={400}
        height={400}
        alt="linear demo image"
        className="object-contain rounded-2xl"
      />
    </div>
  </div>
</WobbleCard>

      <a href="https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD150" target="_blank" rel="noopener noreferrer">
  <WobbleCard containerClassName="col-span 2 bg-gray-400 min-h-[300px] relative ">
  <button className="px-12 mb-4 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#E82E8A] transition-colors duration-200">
        Plan MD150
      </button>
    <div className="flex justify-center items-center h-full relative">
      <Image
        src={Plan150}
        width={400}
        height={400}
        alt="plan150"
        className="object-contain rounded-2xl"
      />
    </div>
  </WobbleCard>
</a>

<a href="https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD250" target="_blank" rel="noopener noreferrer">
<WobbleCard containerClassName="col-span 2 bg-blue-400 min-h-[300px] relative">
<button className="px-12 py-4 mb-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#E82E8A] transition-colors duration-200">
        Plan MD250
      </button>
  <div className="flex justify-center items-center h-full relative">
    <Image
      src={Plan250}
      width={400}
      alt="plan250"
      height={400}
      className="object-contain rounded-2xl"
    />
  </div>
</WobbleCard>
</a>

<a href="https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD350" target="_blank" rel="noopener noreferrer">
      <WobbleCard containerClassName="col-span 2 bg-blue-900 min-h-[300px] relative">
      <button className="px-12 mb-4 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#E82E8A] transition-colors duration-200">
        Plan MD350
      </button>
  <div className="flex justify-center items-center h-full relative">
    <Image
      src={Plan350}
      width={400}
      height={400}
      alt="linear demo image"
      className="object-contain rounded-2xl"
    />
  </div>
</WobbleCard>
 </a>
 
<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-gray-900 relative">
<a href="https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD450" target="_blank" rel="noopener noreferrer">
<button className="px-12 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#E82E8A] transition-colors duration-200">
        Plan MD450
      </button>
  <div className="flex flex-col justify-center items-center h-full">
 
   
    <div className="absolute inset-0 flex justify-center items-center z-0">
      <Image
        src={Plan450}
        width={500}
        height={500}
        alt="linear demo image"
        className="object-contain rounded-2xl"
      />
    </div>
  </div>
</a>
</WobbleCard>


    </div>
  );
}
