import Image from "next/image";
import Link from "next/link";
import "./app.css";
import Navbartailwind from "./components/navtailwind";
import Footer from "./components/footer";
import { SignupFormDemo } from "./components/formdemo";
import { WobbleCardDemo } from "./components/woobledemo";
import Header from "./components/header";
import Marquee from "./components/marquee";
import { ExpandableCardDemo } from "./components/expandablecard";
import Sectiondual from "./components/sectiondual";
import { AppleCardsCarouselDemo } from "./components/appledemo";
export default function Home() {
  return (
    <main>
      {/* componente en : ./components, /Header.tsx */}
      <Header />
      <section id="planes">
        <div className="max-w-screen-xl mx-auto py-8">
          {/* componente en : ./components, /Woobledemo.tsx */}
          <WobbleCardDemo />
        </div>

        <section className="marqueee" id="marqueeee">
          {/* componente en : ./components, /Marquee.tsx */}
          <Marquee />
        </section>

        {/* componente en : ./components, /Sectiondunal */}
        <Sectiondual />

        {/* componente en : ./components, /Appledemo */}
        <AppleCardsCarouselDemo />

        {/* componente en : ./components, /ExpandableCard */}
        <ExpandableCardDemo />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
