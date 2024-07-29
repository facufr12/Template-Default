"use client"
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./apple-cards-carousel";
import logof from "../../public/logof.jpg"
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 text-white dark:text-neutral-200 font-sans">
       Planes Disponibles
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src={logof}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "PLAN",
    title: "Plan MD 150",
    src: "https://medicals.ar/planes-medicina-prepaga/cotizar/assets/img/MD150.webp",
    content: <DummyContent />,
  },
  {
    category: "PLAN",
    title: "Plan MD 250",
       src: "https://medicals.ar/planes-medicina-prepaga/cotizar/assets/img/MD250.webp",
    content: <DummyContent />,
  },
  {
    category: "PLAN",
    title: "Plan MD 350",
    src: "https://medicals.ar/planes-medicina-prepaga/cotizar/assets/img/MD350.webp",
    content: <DummyContent />,
  },

  {
    category: "PLAN",
    title: "Plan MD 450",
    src: "https://medicals.ar/planes-medicina-prepaga/cotizar/assets/img/MD450.webp",
    content: <DummyContent />,
  },
  {
    category: "PLAN",
    title: "Plan MD 150",
    src: "https://medicals.ar/planes-medicina-prepaga/cotizar/assets/img/MD150.webp",
    content: <DummyContent />,
  },
  {
    category: "PLAN",
    title: "Plan MD 250",
    src: "https://medicals.ar/planes-medicina-prepaga/cotizar/assets/img/MD250.webp",
    content: <DummyContent />,
  },
  {
    category: "PLAN",
    title: "Plan MD 350",
    src: "https://medicals.ar/planes-medicina-prepaga/cotizar/assets/img/MD350.webp",
    content: <DummyContent />,
  },
  {
    category: "PLAN",
    title: "Plan MD 450",
    src: "https://medicals.ar/planes-medicina-prepaga/cotizar/assets/img/MD450.webp",
    content: <DummyContent />,
  },
];