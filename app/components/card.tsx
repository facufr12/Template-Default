import React from 'react';

const Card = () => {
  return (
    <div className="mt-4 ml-4 max-w-sm rounded overflow-hidden shadow-lg bg-white block">
      <iframe
        className='w-full h-full'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.2277620655573!2d-58.487484524418406!3d-34.522457072983585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb14a18a03219%3A0xee7a66871b30e664!2sAv.%20Maip%C3%BA%201682%2C%20B1602ABQ%20Vicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1718299442749!5m2!1ses!2sar"
     
      ></iframe>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">CENTRO DE ATENCIÓN VICENTE LÓPEZ</div>
        <p className="text-gray-700 text-base">Teléfono</p>
        <p className="text-gray-700 text-base"> 0810-888-8766</p>
        
        <p className="text-gray-700 text-base">ACTIVIDADES</p>
        
        <p className="text-gray-700 text-base">Servicios Administrativos al Socio - Oficina Comercial</p>
                          
        <p className="text-gray-700 text-base">TRÁMITES ADMINISTRATIVOS</p>
        
        <p className="text-gray-700 text-base">Orientación sobre autorizaciones médicas - Renovación de tu credencial - Modificar tus datos de socio - Presentar sugerencias.</p>
  
        <p className="text-gray-700 text-base">HORARIOS</p>
        <p className="text-gray-700 text-base">Servicios Administrativos: Lunes a Viernes de 09 a 18 hs.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  );
};

export default Card;
