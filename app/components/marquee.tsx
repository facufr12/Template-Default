import React from 'react';
import Image from 'next/image';
import "../app.css";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <Image src="/logoiphone.png" alt="Hospital Britanico" className="provider-sponsor" width={300} height={100} />
        <Image src="/logoiphone.png" alt="Clínica Bazterrica" className="provider-sponsor" width={300} height={100} />
        <Image src="/logoiphone.png"  alt="Clínica San Camilo" className="provider-sponsor" width={300} height={100} />
        <Image src="/logoiphone.png"  alt="Corporacion Medica General" className="provider-sponsor" width={300} height={100} />
        <Image src="/logoiphone.png"  alt="Deragopayan" className="provider-sponsor" width={300} height={100} />
        <Image src="/logoiphone.png" alt="Fundacion Hospitalaria" className="provider-sponsor" width={300} height={100} />
        <Image src="/logoiphone.png"alt="Icba" className="provider-sponsor" width={300} height={100} />
        <Image src="/logoiphone.png" alt="Imc" className="provider-sponsor" width={300} height={100} />
        <Image src="/logoiphone.png" alt="Hospital Italiano" className="provider-sponsor" width={300} height={100} />
        <Image src="/logoiphone.png" alt="Hospital Otamendi" className="provider-sponsor" width={300} height={100} />
        <Image src="/logoiphone.png" alt="Rossi" className="provider-sponsor" width={300} height={300} />
        <Image src="/logoiphone.png"  alt="Sanatorio San Lucas" className="provider-sponsor" width={300} height={100} />
        <Image src="/logoiphone.png" alt="Materdei" className="provider-sponsor" width={300} height={100} />
      </div>
    </div>
  );
}

export default Marquee;
