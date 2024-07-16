// pages/thankyou.js
import React from 'react';
import Image from 'next/image';
import familia4 from "../public/assets/familia4.jpg"
const Gracias = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Gracias por tu envío!</h1>
        <p className="text-gray-700 mb-6">Hemos recibido tu información correctamente.</p>
        <Image src={familia4} alt="Gracias" width={300} height={300} />
      </div>
    </div>
  );
};

export default Gracias;
