import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("formid");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
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
      Acercanos tus datos y se pondran en contacto con vos.
    </p>
  
    <form className="my-10">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="firstname">Nombre y Apellido</Label>
          <Input id="name" placeholder="Nombre" type="text" />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email </Label>
        <Input
          id="email"
          placeholder="usuario@hotmail.com"
          type="email"
          className="mobile-form-input"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="telefono">Telefono</Label>
        <Input
          id="telefono"
          placeholder="Telefono"
          type="telefono"
          className="mobile-form-input"
        />
      </LabelInputContainer>
  
      <LabelInputContainer className="mb-8">
        <Label htmlFor="consulta">Consulta</Label>
        <Input
          id="consulta"
          placeholder="Consulta"
          type="text"
          className="mobile-form-input"
        />
      </LabelInputContainer>
  
      <button
        className="bg-gradient-to-br from-pink-600 to-pink-400 relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--pink-600)_inset,0px_-1px_0px_0px_var(--pink-400)_inset]"
        type="submit"
      >
        Solicitá Asesor &rarr;
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
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
