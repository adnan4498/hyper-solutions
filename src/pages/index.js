import Header from "@/shared/Header";

import Marquee from "./Marquee";
import ServiceCards from "./ServicesSection";
import PowerSection from "./PowerSection";
import Footer from "@/shared/Footer";

import whatsapIcon from "../../public/images/whatsapp-icon2.png";
import Image from "next/image";
import ImagesCarousel from "./ImagesCarousel";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <div>
      <Header />

    <div className="mt-[74px] lg:mt-0 ">

      <HeroSection />
    </div>

      <Marquee />

      <div className="mt-10 lg:mt-20">
        <ServiceCards />
      </div>

      <div className="w-full mt-32 lg:mt-40">
        <p className="text-black font-bold text-center text-lg sm:text-xl mt-0">
          Brands and <span className="!text-[#01B2C1]"> Products </span>
        </p>
        <p className="text-black font-extrabold text-center text-[28px] md:text-4xl lg:text-[48px] leading-tight">
          Trusted names, <br /> delivering performance{" "}
          <br className="lg:hidden"></br> and reliability
        </p>
      </div>

      <div className="mt-10 lg:mt-40">
        <ImagesCarousel />
      </div>

      <div className="mt-10 lg:mt-40">
        <PowerSection />
      </div>

      <div className="mt-10 lg:mt-40">
        <Footer />
      </div>

      <div class="fixed right-1 bottom-4 z-50 cursor-pointer">
        <div class="mr-2">
          <a href="https://wa.me/9203242150061?text=">
            <Image
              alt="whatsapp-icon"
              loading="lazy"
              width="551"
              height="453"
              decoding="async"
              data-nimg="1"
              class="w-18 lg:w-24"
              // style="color:transparent"
              src={whatsapIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
