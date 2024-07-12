"use client"
import Head from 'next/head';

const GraciasPage = () => {
  // Redirigir a la página principal después de 4 segundos
  setTimeout(() => {
    window.location.href = "index.html";
  }, 4000);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Bienvenido a Medicals. Ofrecemos una variedad de servicios y productos de Medicina Prepaga de alta calidad. Descubre más sobre nuestras ofertas y cómo podemos ayudarte."
        />
        <link rel="shortcut icon" href="assets/img/Favicon.png" />
        <link rel="stylesheet" href="assets/css/style2.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap"
          rel="stylesheet"
        />
        <title>Medical's Medicina Prepaga - Plan Integral Plus.</title>

        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11429907458"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11429907458');
          `}
        </script>
      </Head>

      <header className="header-redirection">
        <nav className="nav-redirection">
          <img src="assets/img/nuevo-logo-medicals.png" alt="logo-medicals" width="150px" />
        </nav>
        <div className="hero-redirection">
          <h1>
            ¡Gracias! <br /> A la brevedad nos comunicaremos con usted.
          </h1>
        </div>
      </header>

      <footer>
        <section className="section-footer-legal">
          <div className="section-footer-legal-title">
            ©MEDICALS 2023 - Todos los derechos reservados - info@medicals.com.ar <br /><br />
          </div>
          <div className="section-footer-legal-description">
            Las prestaciones incorporadas en el marco de las leyes No 24.754 y 26682 y la Resoluciones
            201/02 y 1991/05 M:S :deberán ser gestionadas ante MEDICAL'S S.A., quien indicará los
            prestadores para cada caso, hay prestaciones obligatorias de cobertura medico asistencial,
            informese de los términos y alcances del Programa Mdico Obligatorio, en www.buenosaires.gov.ar
            (Ley 2792 CABA) y Ley 13987 orientación al consumidor Bs As 0800-222-9042 y el órgano de control
            SSS 0800-222-72583 - www.sssalud.gov.ar
          </div>
        </section>
      </footer>
    </>
  );
};

export default GraciasPage;
