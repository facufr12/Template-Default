import React from 'react';
import Image from 'next/image';
import "../app.css";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <Image src="/sponsor/britanico.webp" alt="Hospital Britanico" className="provider-sponsor" width={300} height={100} />
        <Image src="/sponsor/clinicabazterrica.webp" alt="Clínica Bazterrica" className="provider-sponsor" width={300} height={100} />
        <Image src="/sponsor/sancamilo.webp" alt="Clínica San Camilo" className="provider-sponsor" width={300} height={100} />
        <Image src="/sponsor/corporacionmedica.webp" alt="Corporacion Medica General" className="provider-sponsor" width={300} height={100} />
        <Image src="/sponsor/deragopayan.webp" alt="Deragopayan" className="provider-sponsor" width={300} height={100} />
        <Image src="/sponsor/foundationhospital.webp" alt="Fundacion Hospitalaria" className="provider-sponsor" width={300} height={100} />
        <Image src="/sponsor/icba.webp" alt="Icba" className="provider-sponsor" width={300} height={100} />
        <Image src="/sponsor/imc.webp" alt="Imc" className="provider-sponsor" width={300} height={100} />
        <Image src="/sponsor/italiano.webp" alt="Hospital Italiano" className="provider-sponsor" width={300} height={100} />
        <Image src="/sponsor/otamendi.webp" alt="Hospital Otamendi" className="provider-sponsor" width={300} height={100} />
        <Image src="/sponsor/rossi.webp" alt="Rossi" className="provider-sponsor" width={300} height={300} />
        <Image src="/sponsor/sanatoriosanlucas.webp" alt="Sanatorio San Lucas" className="provider-sponsor" width={300} height={100} />
        <Image src="/sponsor/materdei.webp" alt="Materdei" className="provider-sponsor" width={300} height={100} />
      </div>
    </div>
  );
}

export default Marquee;
