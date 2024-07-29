"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./wobble-card";
import { FaCheck } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";


import { Noise, Noise2, Noise3, Noise4, Noise5 } from "./Noisecomponents";
export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-4 max-w-7xl mx-auto">
      {/* Card 1 */}
      <WobbleCard
        NoiseComponent={Noise5}
        containerClassName="col-span-12 lg:col-span-6 bg-pink-800 min-h-[500px] lg:min-h-[400px]"
      >
        <div className="max-w-xs mx-auto lg:max-w-full">
          <h2 className="text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Nombre prepaga
          </h2>
          <div className="mt-4 text-left text-sm lg:text-base text-neutral-200 space-y-2">
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Personalizar.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Personalizar.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Personalizar.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Personalizar.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" />Personalizar.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Personalizar.
            </div>
            <div className="flex items-center">
              <FaCheck className="mr-2" /> Personalizar.
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
        Title
        </h2>
        <p className="mt-4 text-left text-sm lg:text-base text-neutral-200">
          Description
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
 

  className="px-12 py-4 rounded-full bg-[transparent] font-bold text-white tracking-widest uppercase transform hover:scale-105 transition-colors duration-200"
  style={{ fontSize: '18px', fontWeight: 'bold' 
    }} // Aquí ajusta el tamaño del texto según lo necesario
>
  Plan 
</h2>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-center">
              Plan Description.
              </p>
              <button
  onClick={() => window.location.href = 'https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD150'}
  className="px-12 py-4 mt-6 rounded-full bg-[#075757] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-gray-200 transition-colors duration-200"
>
  Ver Mas
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

  
  className="px-12 py-4 rounded-full bg-[transparent] font-bold text-white tracking-widest uppercase transform hover:scale-105 transition-colors duration-200"
  style={{ fontSize: '18px', fontWeight: 'bold' 
    }} // Aquí ajusta el tamaño del texto según lo necesario
>
  Plan 
</h2>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-center">
              Plan Description.
              </p>
              <button
  onClick={() => window.location.href = 'https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD250'}

              className=" mt-6 px-12 py-4 rounded-full bg-[#075757] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-blue-400 transition-colors duration-200"
            >
            Ver Mas
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

  
  className="px-12 py-4 rounded-full bg-[transparent] font-bold text-white tracking-widest uppercase transform hover:scale-105 transition-colors duration-200"
  style={{ fontSize: '18px', fontWeight: 'bold' 
    }} // Aquí ajusta el tamaño del texto según lo necesario
>
  Plan 
</h2>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-center">
              Plan Description.
              </p>
              <button
              
  onClick={() => window.location.href = 'https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD350'}
              className=" mt-6 px-12 py-4 rounded-full bg-[#075757] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-blue-800  transition-colors duration-200"
            >
             Ver Mas
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
  className="px-12 py-4 rounded-full bg-[transparent] font-bold text-white tracking-widest uppercase transform hover:scale-105 transition-colors duration-200"
  style={{ fontSize: '18px', fontWeight: 'bold' 
    }} // Aquí ajusta el tamaño del texto según lo necesario
>
  Plan 
</h2>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-center">
              Plan Description.
              </p>
              <button
  onClick={() => window.location.href = 'https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD450'}
              className=" mt-6 px-12 py-4 rounded-full bg-[#075757] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-gray-800 transition-colors duration-200"
            >
               Ver Mas
            </button>
            </div>
          </WobbleCard>
        </a>
      </div>
    </div>
  );
}
