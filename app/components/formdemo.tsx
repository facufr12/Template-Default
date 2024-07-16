"use client";
import React, { useRef, useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../lib/utils";
import Gracias from "../gracias"
import { useRouter } from 'next/navigation';
export function SignupFormDemo() {
  const ThankYouPage = () => {
    return <Gracias />;
  };
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter(); 
  
  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxI-4huVNr9h3Tb1i4vD2X9n4MYeCc1nEAY-Fdh-wz1iwV1iJfrif0f5yLRxxQg9Vs82g/exec";
      const formData = new FormData(formRef.current);
  
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
  
      console.log("Response received");
      if (response.ok) {
        // Formulario enviado con éxito
        router.replace(<Gracias/>);
      } else {
        // Error en el envío del formulario
        throw new Error("Ocurrió un error al enviar el formulario.");
      }
    } catch (error) {
      // Captura de errores de red u otros errores
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="formid"
      className="max-w-md mt-8  w-full mx-auto md:rounded-lg rounded-none md:rounded-3xl p-2 md:p-8 shadow-input bg-white dark:bg-black"
    >
      <h2 className="font-bold text-xl lg:text-white-900 text-neutral-800 dark:text-neutral-200">
        Solicitá Asesor
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Acercanos tus datos y nos pondremos en contacto con vos!.
      </p>

      <form
        ref={formRef}
        action="#"
        method="POST"
        className="my-10"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">NOMBRE Y APELLIDO</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Jose Gonzalez"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone">WHATSAPP</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="11-5555-4444"
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">EMAIL </Label>

          <Input
            type="email"
            id="email"
            name="email"
            className="mobile-form-input"
            placeholder="Usuario@hotmail.com"
            required
          />
        </LabelInputContainer>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="mb-4">
          <Label
              htmlFor="edad-titular"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              LOCALIDAD
            </Label>
            <Label>
            <select
      id="localidad"
      name="localidad"
      className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
      style={{ height: '2.5rem' }} // Ajusta la altura según tus necesidades
    >
                <option value="consulta">Seleccione Localidad</option>
                <option value="CABA">CABA</option>
                <option value="Almirante Brown">ALMIRANTE BROWN</option>
                <option value="Avellaneda">AVELLANEDA</option>
                <option value="Berazategui">BERAZATEGUI</option>
                <option value="Esteban Echeverría">ESTEBAN ECHEVERRÍA</option>
                <option value="Ezeiza">EZEIZA</option>
                <option value="Florencio Varela">FLORENCIO VARELA</option>
                <option value="General San Martín">GENERAL SAN MARTIN</option>
                <option value="General Rodriguez">GENERAL RODRIGUEZ</option>
                <option value="Hurlingham">HURLINGHAM</option>
                <option value="Ituzaingó">ITUZAINGÓ</option>
                <option value="José C. Paz">JOSÉ C. PAZ</option>
                <option value="La Matanza">LA MATANZA</option>
                <option value="Lanús">LANÚS</option>
                <option value="Lomas de Zamora">LOMAS DE ZAMORA</option>
                <option value="Malvinas Argentinas">MALVINAS ARGENTINAS</option>
                <option value="Marcos Paz">MARCOS PAZ</option>
                <option value="Merlo">MERLO</option>
                <option value="Moreno">MORENO</option>
                <option value="Morón">MORÓN</option>
                <option value="Pilar">PILAR</option>
                <option value="Quilmes">QUILMES</option>
                <option value="San Fernando">SAN FERNANDO</option>
                <option value="San Isidro">SAN ISIDRO</option>
                <option value="San Miguel">SAN MIGUEL</option>
                <option value="Tigre">TIGRE</option>
                <option value="Tres de Febrero">TRES DE FEBRERO</option>
                <option value="Vicente López">VICENTE LÓPEZ</option>
                <option value="Otra">OTRA</option>
              </select>
            </Label>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4 relative">
            <Label
              htmlFor="edad-titular"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              EDAD DEL TITULAR
            </Label>
            <select
              id="edad-titular"
              name="edad-titular"
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="edad-titular">Seleccione Edad</option>
              <option value="18 años">18 años</option>
              <option value="19 años">19 años</option>
              <option value="20 años">20 años</option>
              <option value="21 años">21 años</option>
              <option value="22 años">22 años</option>
              <option value="23 años">23 años</option>
              <option value="24 años">24 años</option>
              <option value="25 años">25 años</option>
              <option value="26 años">26 años</option>
              <option value="27 años">27 años</option>
              <option value="28 años">28 años</option>
              <option value="29 años">29 años</option>
              <option value="30 años">30 años</option>
              <option value="31 años">31 años</option>
              <option value="32 años">32 años</option>
              <option value="33 años">33 años</option>
              <option value="34 años">34 años</option>
              <option value="35 años">35 años</option>
              <option value="36 años">36 años</option>
              <option value="37 años">37 años</option>
              <option value="38 años">38 años</option>
              <option value="39 años">39 años</option>
              <option value="40 años">40 años</option>
              <option value="41 años">41 años</option>
              <option value="42 años">42 años</option>
              <option value="43 años">43 años</option>
              <option value="44 años">44 años</option>
              <option value="45 años">45 años</option>
              <option value="46 años">46 años</option>
              <option value="47 años">47 años</option>
              <option value="48 años">48 años</option>
              <option value="49 años">49 años</option>
              <option value="50 años">50 años</option>
              <option value="51 años">51 años</option>
              <option value="52 años">52 años</option>
              <option value="53 años">53 años</option>
              <option value="54 años">54 años</option>
              <option value="55 años">55 años</option>
              <option value="56 años">56 años</option>
              <option value="57 años">57 años</option>
              <option value="58 años">58 años</option>
              <option value="59 años">59 años</option>
              <option value="60 años">60 años</option>
              <option value="61 a 65 años">61 a 65 años</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="mb-4">
            <Label
              htmlFor="tipo-afiliacion"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              TIPO DE AFILIACIÓN
            </Label>
            <select
              id="tipo-afiliacion"
              name="tipo-afiliacion"
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="tipo-afiliacion">Seleccione Afiliación</option>
              <option value="particular-autonomo">PARTICULAR / AUTÓNOMO</option>
              <option value="con-recibo-sueldo">CON RECIBO DE SUELDO</option>
              <option value="monotributista">MONOTRIBUTISTA</option>
            </select>
          </LabelInputContainer>
          <LabelInputContainer className="mb-12">
            <Label
              htmlFor="grupo-familiar"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              GRUPO FAMILIAR
            </Label>
            <select
              id="grupo-familiar"
              name="grupo-familiar"
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="grupo-familiar">Seleccione Grupo </option>
              <option value="individual">INDIVIDUAL</option>
              <option value="matrimonio">MATRIMONIO</option>
              <option value="matrimonio-1-hijo">MATRIMONIO + 1 HIJO</option>
              <option value="matrimonio-2-hijos">MATRIMONIO + 2 HIJOS</option>
              <option value="matrimonio-3-hijos">MATRIMONIO + 3 HIJOS</option>
              <option value="individual-1-hijo">INDIVIDUAL + 1 HIJO</option>
              <option value="individual-2-hijos">INDIVIDUAL + 2 HIJOS</option>
              <option value="individual-3-hijos">INDIVIDUAL + 3 HIJOS</option>
              <option value="otro">OTRO</option>
            </select>
          </LabelInputContainer>
        </div>

        {error && (
          <div className="text-red-500 text-sm mt-2 mb-4">
            Ocurrió un error al enviar el formulario: {error}
          </div>
        )}
        <button
          className={`bg-gradient-to-br from-pink-600 to-pink-400 relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--pink-600)_inset,0px_-1px_0px_0px_var(--pink-400)_inset] ${
            submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Enviando..." : "Solicitá un Asesor →"}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
