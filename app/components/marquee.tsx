import React from 'react';
import Image from 'next/image';
import "../app.css";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <Image src="/logof.jpg" alt="Hospital Britanico" className="provider-sponsor" width={300} height={100} />
        <Image src="/logof.jpg"  alt="Clínica Bazterrica" className="provider-sponsor" width={300} height={100} />
        <Image src="/logof.jpg"  alt="Clínica San Camilo" className="provider-sponsor" width={300} height={100} />
        <Image src="/logof.jpg"  alt="Corporacion Medica General" className="provider-sponsor" width={300} height={100} />
        <Image src="/logof.jpg"  alt="Deragopayan" className="provider-sponsor" width={300} height={100} />
        <Image src="/logof.jpg"  alt="Fundacion Hospitalaria" className="provider-sponsor" width={300} height={100} />
        <Image src="/logof.jpg" alt="Icba" className="provider-sponsor" width={300} height={100} />
        <Image src="/logof.jpg"  alt="Imc" className="provider-sponsor" width={300} height={100} />
        <Image src="/logof.jpg"  alt="Hospital Italiano" className="provider-sponsor" width={300} height={100} />
        <Image src="/logof.jpg"  alt="Hospital Otamendi" className="provider-sponsor" width={300} height={100} />
        <Image src="/logof.jpg" alt="Rossi" className="provider-sponsor" width={300} height={300} />
        <Image src="/logof.jpg"  alt="Sanatorio San Lucas" className="provider-sponsor" width={300} height={100} />
        <Image src="/logof.jpg"  alt="Materdei" className="provider-sponsor" width={300} height={100} />
      </div>
    </div>
  );
}

export default Marquee;
