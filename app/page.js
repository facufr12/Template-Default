import Image from "next/image";
import Link from "next/link";
import "./app.css";
import Navbar from "./components/nuevanav";
import { SignupFormDemo } from "./components/formdemo";
import { WobbleCardDemo } from "./components/woobledemo";
import Marquee from "./components/marquee";
export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main>
          <Head>
        <meta name="theme-color" content="[#E82E8A" />
        <title>Tu Título de Página</title>
        {/* Otros elementos <head> que puedas necesitar */}
      </Head>
      <section id="header" className="">
        <div className="imgheader">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <Navbar />
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-start mx-auto space-y-4">
                <h1 className="text-4xl md:text-7xl font-bold text-white-900 hidden md:block">
                  Medicina Prepaga
                </h1>
                <h2 className="text-2xl md:text-5xl font-bold text-white-600 hidden md:block">
                  Cotizá tu Plan
                </h2>
                <h2 className="text-2xl md:text-4xl font-bold text-white-600 hidden md:block">
                  Hasta 50% de Ahorro
                </h2>
              </div>
            </div>
            <div className="mt-14 flex items-center justify-center">
              <SignupFormDemo className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Planes */}

      {/* Sección de Demo de WobbleCard */}
      <section id="planesmostrar">
        <div className="max-w-screen-xl mx-auto py-8">
          <WobbleCardDemo />
        </div>
      </section>

      {/* Sección de Infinite Moving Cards */}

      <section className="marqueee">
        <Marquee />
      </section>
      <footer>
        
        <section
        
          className="elementor-section elementor-top-section elementor-element elementor-element-49b719d3 elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
          data-id="49b719d3"
          data-element_type="section"
          data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
          style={{
            padding: "40px",
            width: "100%",
            left: "0px",
            backgroundColor: "#1f2531"
          }}
        >
          
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d876cc8"
              data-id="d876cc8"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-bbc9e8f elementor-widget elementor-widget-text-editor"
                  data-id="bbc9e8f"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                  style={{
                    textAlign: "center",
                    fontSize: "12px",
                    width: "100%"
                  }}
                >
                  <div className="elementor-widget-container">
                  © MEDICALS {currentYear} – Todos los derechos reservados –
                    750 – pisos 10º y 11º – (011) 4373-9999 –{" "}
                    <a
                      href="mailto:info@medicals.ar"
                      style={{ color: "#e82e8a" }}
                    >
                      info@medicals.ar
                    </a>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-616df7e5 elementor-widget elementor-widget-text-editor"
                  data-id="616df7e5"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                  style={{
                    textAlign: "center",
                    fontSize: "10px",
                    width: "100%",
                    padding: "10px"
                  }}
                >
                  <div className="elementor-widget-container">
                    <p>
                      Las prestaciones incorporadas en el marco de las leyes No
                      24.754 y 26682 y la Resoluciones 201/02 y 1991/05 M:S
                      :deberán ser gestionadas ante MEDICAL’S S.A., quien
                      indicará los prestadores para cada caso, hay prestaciones
                      obligatorias de cobertura medico asistencial, informese de
                      los términos y alcances del Programa Médico Obligatorio,
                      en www.buenosaires.gov.ar (Ley 2792 CABA) y Ley 13987
                      orientación al consumidor Bs As 0800-222-9042 y el órgano
                      de control SSS 0800-222-72583 –{" "}
                      <a
                        style={{ color: "#e82e8a" }}
                        href="https://www.argentina.gob.ar/sssalud"
                        target="_blank"
                        rel="noopener"
                      >
                        https://www.argentina.gob.ar/sssalud
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}