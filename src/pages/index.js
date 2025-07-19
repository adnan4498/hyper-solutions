import Header from "@/shared/Header";
import { Carousel } from "antd";
import { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import hStrongBanner from "../../public/images/h-strong-banner.jpg";
import hStrongBanner2 from "../../public/images/h-strong-banner2.jpg";
import jinzenBanner from "../../public/images/jinzen-banner.jpg";
import jinzenBanner2 from "../../public/images/jinzen2.jpg";
import guangsenBanner from "../../public/images/guangsen-bg.jpg";
import scissorBg from "../../public/images/scissor-bg.png";
import jinzenMobile from "../../public/images/jinzen-mobile-bg.jpg";
import jinzenMobile2 from "../../public/images/jinzen-mobile-bg2.avif";
import Marquee from "./Marquee";
import ServiceCards from "./ServicesSection";
import PowerSection from "./PowerSection";
import Footer from "@/shared/Footer";

import whatsapIcon from "../../public/images/whatsapp-icon2.png"
import Image from "next/image";
import ImagesCarousel from "./ImagesCarousel";

export default function Home() {
  const carouselRef = useRef(null);

  // Responsive height using Tailwind — adjusts based on screen size
  const bannerHeight =
    "h-[60vw] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px]";

  // Array of slides
  const slides = [
    { src: jinzenBanner, alt: "jinzen banner" },
    { src: scissorBg, alt: "scissor banner" },
    { src: jinzenBanner2, alt: "jinzen banner 2" },
    { src: hStrongBanner, alt: "h-strong banner" },
    { src: guangsenBanner, alt: "guangsen banner" },
    { src: jinzenMobile, alt: "jinzenMobile banner" },
    { src: jinzenMobile2, alt: "jinzenMobile banner 2" },
  ];

  return (
    <div>
      <Header />

      <div className="relative group w-full max-w-full overflow-hidden mt-24 lg:mt-18">
        <button
          onClick={() => carouselRef.current?.prev()}
          className="absolute left-2 sm:left-4 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 hidden group-hover:block"
        >
          <LeftOutlined className="text-xl" />
        </button>

        <button
          onClick={() => carouselRef.current?.next()}
          className="absolute right-2 sm:right-4 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 hidden group-hover:block"
        >
          <RightOutlined className="text-xl" />
        </button>

        <Carousel
          ref={carouselRef}
          dots
          autoplay
          autoplaySpeed={2500}
          className="relative w-full"
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                className={`relative w-full ${bannerHeight} overflow-hidden`}
              >
                <img
                  src={slide.src.src} // since you’re importing images, use .src
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Carousel>
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
