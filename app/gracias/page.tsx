import React from 'react';
import Navbar from '../components/nuevanav';
import Image from 'next/image';
import familia4 from '../../public/assets/familia4.jpg';

export default function Gracias() {
  return (
    <section id="header" className="relative h-screen">
      <Navbar />
      <div className="relative h-full">
        {/* Ajustar el contenedor de la imagen */}
        <div className="absolute inset-0 z-0 top-20">
          <Image
            src={familia4}
            alt="Gracias"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
        </div>
        {/* Contenedor para el texto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-black bg-opacity-50 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">¡Gracias por tu envío!</h1>
          <p className="text-2xl mb-6">Hemos recibido tu información correctamente.</p>
        </div>
        {/* Gradient overlay to fade out at the bottom */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </section>
  );
}
