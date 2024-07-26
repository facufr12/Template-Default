import Image from "next/image";
import Link from "next/link";
import Navbar2 from "./components/navbar2";
import "./app.css";
import Navbartailwind from "./components/navtailwind"

import { SignupFormDemo } from "./components/formdemo";
import { WobbleCardDemo } from "./components/woobledemo";
import Marquee from "./components/marquee";
import {ExpandableCardDemo} from "./components/expandablecard"
import {AppleCardsCarouselDemo} from "./components/appledemo"
export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main>
      <section id="header" className="">
        <div className="imgheader">
         <Navbartailwind />
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
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
            <div className="mt-0 flex items-center justify-center">
              <SignupFormDemo className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Planes */}

      {/* Sección de Demo de WobbleCard */}
      <section id="planes">
        <div className="max-w-screen-xl mx-auto py-8">
          <WobbleCardDemo />
        </div>
      </section>

      {/* Sección de Infinite Moving Cards */}

      <section className="marqueee" id="marqueeee">
        <Marquee />
      </section>
      <section id="">
      <div className="flex">
            {/* Columna izquierda (imagen) */}
            <div className="w-1/2">
                <img src="./logof.jpg" alt="Imagen" className="h-full w-full object-cover" />
            </div>
            {/* Columna derecha (texto centrado) */}
            <div className="w-1/2 flex items-center bg-transparent justify-center">
                <div className="text-center">
                    <h2 className="text-3xl text-black font-bold mb-4">Title Plan</h2>
                    <p className="text-lg text-black">Description Plan.</p>
                    <span className="text-lg text-black" >Plan Comment</span>
                </div>
            </div>
        </div>


      </section>
   <AppleCardsCarouselDemo />

   <ExpandableCardDemo />
   
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
            backgroundColor: "#1f2531",
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
                    width: "100%",
                  }}
                >
                  <div className="elementor-widget-container">
                    © Prepaga {currentYear} – Todos los derechos reservados –
                    calle 111 – pisos x y x – (011) 5555-444x –{" "}
                    <a
                      href="mailto:info@medicals.ar"
                      style={{ color: "#e82e8a" }}
                    >
                      email@medicals.ar
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
                    padding: "10px",
                  }}
                >
                  <div className="elementor-widget-container">
                    <p>
                     Texto Footer
                      <a
                        style={{ color: "#e82e8a" }}
                        href="https://www.argentina.gob.ar/sssalud"
                        target="_blank"
                        rel="noopener"
                      >
                        htts://paginaweb.com.ar
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
