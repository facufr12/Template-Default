import React from "react";
import Image from "next/image";
const Sectiondual = () => {
  const textarea = {
    textareah1: "Apple",
    textareah2: "Iphone",
    textareah3: "Macbook"
  };
  return (
    <section id="">
      <div className="flex">
        {/* Columna izquierda (imagen) */}
        <div className="w-1/2">
          <Image
            src="/fondomontaña.avif"
            alt="Imagen"
            layout="responsive" // Permite que la imagen se ajuste al contenedor
            width={100} // Proporción de ancho
            height={700} // Proporción de altura
            className="object-cover" // Asegura que la imagen cubra todo el contenedor
          />
        </div>
        {/* Columna derecha (texto centrado) */}
        <div className="w-1/2 flex items-center bg-transparent justify-center">
          <div className="text-center">
            <h2 className="text-5xl text-white font-bold mb-4">
              {" "}
              {textarea.textareah1}{" "}
            </h2>
            <p className="text-xl text-white"> {textarea.textareah2}.</p>
            <span className="text-xl text-white"> {textarea.textareah3}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectiondual;
