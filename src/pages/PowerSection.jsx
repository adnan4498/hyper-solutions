"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import powerImg from "../../public/images/power-section-img2.jpg";

const PowerSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row items-center lg:gap-10 w-full px-6 lg:px-16 py-20 relative overflow-hidden"
    >
      <div className=" w-full lg:w-8/12 text-black">
        <h3 className="text-2xl text-center lg:text-left">
          <span className="font-semibold ">About </span>
          <span className="!text-[#01B2C1] font-semibold">Us</span>
        </h3>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mt-4 font-['poppins'] text-center lg:text-left lg:w-[661px]">
          Powering <span className="!text-[#01B2C1]">industrial progress</span>{" "}
          with reliable machinery and precision parts.
        </h2>
        <p className="text-base leading-relaxed mt-6 font-semibold text-center lg:text-left lg:max-w-xl lg:w-[584px]">
          We specialize in delivering high-quality machinery and parts to
          industries, ensuring efficiency, durability, and top-tier performance
          across every stage of production.
        </p>

        <div className="flex justify-center lg:justify-start">
          <button className="mt-8 bg-[#01b2c1] !text-white hover:bg-black hover:!text-white cursor-pointer px-6 py-3 rounded-full font-semibold transition duration-300 lg:w-[121px]">
            Explore
          </button>
        </div>
      </div>

      <div className="relative w-full flex justify-center items-center mt-10 lg:mt-0 lg:w-[700px] ">
        <Image
          src={powerImg}
          alt="Infinitum Systems"
          className="w-full h-full rounded-2xl"
        />
      </div>
    </div>
  );
};

export default PowerSection;
