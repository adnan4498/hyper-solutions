"use client";

import React, { useRef, useState, useEffect } from "react";
import { Carousel } from "antd";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowRight,
  Star,
  Award,
  Users,
  Globe,
} from "lucide-react";

import hStrongBanner from "../../public/images/h-strong-banner.jpg";
import hStrongBanner2 from "../../public/images/h-strong-banner2.jpg";
import jinzenBanner from "../../public/images/jinzen-banner.jpg";
import jinzenBanner2 from "../../public/images/jinzen2.jpg";
import guangsenBanner from "../../public/images/guangsen-bg.jpg";
import scissorBg from "../../public/images/scissor-bg.png";

const HeroSection = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const slides = [
    {
      src: jinzenBanner,
      alt: "Premium Industrial Solutions",
      title: "Travel And Experience The World Like a Star",
      subtitle: "Your Journey to Extraordinary Places Begins Here",
      description:
        "Discover premium industrial machinery and solutions that power the world's most ambitious projects",
      cta: "Explore Solutions",
      accent: "from-blue-600 to-cyan-600",
    },
    {
      src: scissorBg,
      alt: "Precision Engineering",
      title: "Precision Engineering Excellence",
      subtitle: "Where Innovation Meets Reliability",
      description:
        "Advanced manufacturing solutions designed for the most demanding industrial applications",
      cta: "View Products",
      accent: "from-purple-600 to-pink-600",
    },
    {
      src: jinzenBanner2,
      alt: "Global Manufacturing",
      title: "Global Manufacturing Partners",
      subtitle: "Connecting Industries Worldwide",
      description:
        "Trusted by leading manufacturers across continents for exceptional quality and performance",
      cta: "Our Network",
      accent: "from-emerald-600 to-teal-600",
    },
    {
      src: hStrongBanner,
      alt: "Industrial Innovation",
      title: "Industrial Innovation Hub",
      subtitle: "Shaping Tomorrow's Manufacturing",
      description:
        "Cutting-edge technology solutions that revolutionize how industries operate and grow",
      cta: "Learn More",
      accent: "from-orange-600 to-red-600",
    },
    {
      src: guangsenBanner,
      alt: "Quality Assurance",
      title: "Uncompromising Quality",
      subtitle: "Excellence in Every Detail",
      description:
        "Rigorous quality standards ensure every product meets the highest industry benchmarks",
      cta: "Quality Promise",
      accent: "from-violet-600 to-purple-600",
    },
  ];

  const handleSlideChange = (current) => {
    setCurrentSlide(current);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[150vh] min-h-[1000px] max-h-[1400px] group">
        <button
          onClick={() => carouselRef.current?.prev()}
          className="absolute left-4 lg:left-8 top-1/2 z-30 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-3 lg:p-4 rounded-full shadow-2xl hover:bg-white/20 transition-all duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 group"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-white/90 transition-colors" />
        </button>

        <button
          onClick={() => carouselRef.current?.next()}
          className="absolute right-4 lg:right-8 top-1/2 z-30 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-3 lg:p-4 rounded-full shadow-2xl hover:bg-white/20 transition-all duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 group"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-white/90 transition-colors" />
        </button>

        <Carousel
          ref={carouselRef}
          dots={false}
          autoplay
          autoplaySpeed={5000}
          effect="fade"
          speed={1000}
          afterChange={handleSlideChange}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full">
              <div className="relative h-[150vh] min-h-[1000px] max-h-[1400px] overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={slide.src.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40"></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${slide.accent} opacity-20`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className={`absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r ${slide.accent} opacity-10 rounded-full blur-3xl animate-pulse`}
                  ></div>
                  <div
                    className={`absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l ${slide.accent} opacity-15 rounded-full blur-2xl animate-pulse delay-1000`}
                  ></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div
                      className={`transform transition-all duration-1000 ${
                        isLoaded
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <div className="mb-12 lg:mb-16 pt-10 lg:pt-0">
                        <div className="mb-6 lg:mb-8">
                          <span
                            className={`inline-block px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r ${slide.accent} text-white text-sm lg:text-base font-semibold rounded-full shadow-xl backdrop-blur-sm border border-white/20`}
                          >
                            {slide.subtitle}
                          </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black text-white mb-8 lg:mb-10 tracking-tight leading-tight">
                          <span className="block">
                            {slide.title.split(" ").slice(0, 3).join(" ")}
                          </span>
                          <span
                            className={`block bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}
                          >
                            {slide.title.split(" ").slice(3).join(" ")}
                          </span>
                        </h1>

                        <p className="text-xl lg:text-2xl xl:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10 lg:mb-14 font-light">
                          {slide.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center mb-16 lg:mb-20">
                        <button
                          className={`group bg-gradient-to-r ${slide.accent} text-white font-bold px-10 lg:px-14 py-5 lg:py-6 rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-white/20 backdrop-blur-sm text-lg lg:text-xl`}
                        >
                          <span className="flex items-center space-x-3">
                            <span>{slide.cta}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </button>

                        <button className="group bg-white/10 backdrop-blur-xl text-white font-bold px-10 lg:px-14 py-5 lg:py-6 rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 text-lg lg:text-xl">
                          <span className="flex items-center space-x-3">
                            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            <span>Watch Demo</span>
                          </span>
                        </button>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-5xl mx-auto">
                        {[
                          {
                            icon: (
                              <Award className="w-8 h-8 lg:w-10 lg:h-10" />
                            ),
                            number: "25+",
                            label: "Years Experience",
                          },
                          {
                            icon: (
                              <Users className="w-8 h-8 lg:w-10 lg:h-10" />
                            ),
                            number: "10K+",
                            label: "Happy Clients",
                          },
                          {
                            icon: (
                              <Globe className="w-8 h-8 lg:w-10 lg:h-10" />
                            ),
                            number: "50+",
                            label: "Countries",
                          },
                          {
                            icon: (
                              <Star className="w-8 h-8 lg:w-10 lg:h-10" />
                            ),
                            number: "99%",
                            label: "Satisfaction",
                          },
                        ].map((stat, idx) => (
                          <div
                            key={idx}
                            className="text-center group hover:scale-105 transition-transform duration-300"
                          >
                            <div
                              className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${slide.accent} rounded-full mb-4 lg:mb-6 shadow-xl`}
                            >
                              {stat.icon}
                            </div>
                            <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 lg:mb-3">
                              {stat.number}
                            </div>
                            <div className="text-white/80 text-base lg:text-lg font-medium">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                    <div className="text-white text-sm font-semibold">
                      Slide {index + 1} of {slides.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => carouselRef.current?.goTo(index)}
                className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${slides[currentSlide].accent} shadow-lg scale-125`
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="flex flex-col items-center text-white/80 group-hover:text-white transition-colors duration-300">
            <div className="text-sm font-medium mb-2 rotate-90 origin-center">
              Scroll
            </div>
            <div className="w-0.5 h-12 bg-white/40 rounded-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-4 bg-white/80 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <svg
          className="w-full h-12 lg:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
