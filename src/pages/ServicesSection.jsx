"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import textileImg from "../../public/images/textileImg.jpg";
import machineryIndustryImg from "../../public/images/machinery-industry.jpg";
import manufactoringIndustry from "../../public/images/manufactoring-industry.png";
import garmentIndustryImg from "../../public/images/garment-industry.jpg";

const services = [
  {
    title: "Textile Industry",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    img: textileImg,
  },
  {
    title: "Manufactoring Industry",
    desc: "Crafting memorable brand experiences through visual identity and storytelling.",
    img: manufactoringIndustry,
  },
  {
    title: "Garment Industry",
    desc: "We build blazing-fast websites with clean code and scalable architecture.",
    img: garmentIndustryImg,
  },
];

const ServiceCards = () => {
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);
  const titleRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    const enters = [];
    const leaves = [];

    cards.forEach((card, i) => {
      const title = titleRefs.current[i];
      const text = textRefs.current[i];

      const enter = () => {
        gsap.killTweensOf([title, text]);
        gsap.to(title, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(text, {
          opacity: 1,
          y: -20,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.killTweensOf([title, text]);
        gsap.to(title, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
        });
        gsap.to(text, {
          opacity: 0,
          y: 0,
          duration: 0.4,
          ease: "power1.inOut",
        });
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      enters.push(() => card.removeEventListener("mouseenter", enter));
      leaves.push(() => card.removeEventListener("mouseleave", leave));
    });

    return () => {
      enters.forEach((off) => off());
      leaves.forEach((off) => off());
    };
  }, []);

  return (
    <div className="w-full">
      <div className="w-full px-4 pt-0">
        <p className="text-black font-bold text-center text-lg sm:text-xl mt-0">
          What we <span className="!text-sky-300"> do </span>
        </p>
        <p className="text-black font-extrabold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight">
        Powering industries <br></br> with machines and spare parts

        </p>
      </div>

      <div className="flex justify-center w-full mt-6 sm:mt-8 lg:mt-[38px]">
        <div className="flex flex-col lg:flex-row max-w-[1600px] w-full gap-6 sm:gap-8 lg:gap-10 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative w-full lg:w-[480px] cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl relative z-10">
                <div className="relative overflow-hidden">
                  <Image
                    ref={(el) => (imageRefs.current[index] = el)}
                    src={service.img}
                    alt={service.title}
                    width={480}
                    height={440}
                    className="object-cover w-full h-[280px] sm:h-[360px] lg:h-[440px]"
                  />

                  <div
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30"
                    ref={(el) =>
                      (titleRefs.current[index] = el?.querySelector("h2"))
                    }
                  >
                    <h2 className="text-black bg-white py-2 px-2 rounded-md text-lg sm:text-xl font-bold tracking-wide opacity-0">
                      {service.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div
                ref={(el) => (textRefs.current[index] = el)}
                className="absolute overflow-hidden left-0 w-full opacity-0 mt-4 sm:mt-6 lg:mt-[30px]"
              >
                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-black font-bold text-base sm:text-lg leading-relaxed w-full sm:w-[90%] lg:w-[370px]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
