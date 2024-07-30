import "./app.css";
import Footer from "./components/footer";
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
      <section id="planes">
        <Header />
        <div className="max-w-screen-xl mx-auto py-8">
          {/* componente en : ./components, /Woobledemo.tsx Aceternity UI*/}
          <WobbleCardDemo />
        </div>

        <section className="marqueee" id="marqueeee">
          {/* componente en : ./components, /Marquee.tsx */}
          <Marquee />
        </section>

        {/* componente en : ./components, /Sectiondunal */}
        <Sectiondual />

        {/* componente en : ./components, /Appledemo  Aceternity UI*/}
        <AppleCardsCarouselDemo />

        {/* componente en : ./components, /ExpandableCard Aceternity UI */}
        <ExpandableCardDemo />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
