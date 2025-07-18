"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "antd/dist/reset.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import industrialMachine1 from "../../public/images/industrial-machines/jinzen-iron.avif";
import industrialMachine2 from "../../public/images/industrial-machines/jinzen-machine.webp";
import industrialMachine3 from "../../public/images/industrial-machines/jinzen-machine2.webp";
import industrialMachine4 from "../../public/images/industrial-machines/jinzen-machine3.webp";
import industrialMachine5 from "../../public/images/industrial-machines/jinzen-machine4.webp";
import industrialMachine6 from "../../public/images/industrial-machines/jinzen-machine5.webp";
import industrialMachine7 from "../../public/images/industrial-machines/jinzen-machine6.webp";
import industrialMachine8 from "../../public/images/industrial-machines/jinzen-machine7.webp";

import gencler from "../../public/images/gencler/gencler.jpg";
import gencler1 from "../../public/images/gencler/gencler1.jpg";
import gencler2 from "../../public/images/gencler/gencler2.jpg";
import gencler3 from "../../public/images/gencler/gencler3.jpg";
import gencler4 from "../../public/images/gencler/gencler4.jpg";
import gencler5 from "../../public/images/gencler/gencler5.jpg";
import gencler6 from "../../public/images/gencler/gencler6.jpg";

import sparePart1 from "../../public/images/spare-parts/spare-part1.webp";
import sparePart2 from "../../public/images/spare-parts/spare-part2.webp";
import sparePart3 from "../../public/images/spare-parts/spare-part3.webp";
import sparePart4 from "../../public/images/spare-parts/spare-part4.webp";
import sparePart5 from "../../public/images/spare-parts/spare-part5.webp";
import sparePart6 from "../../public/images/spare-parts/spare-part6.webp";
import sparePart7 from "../../public/images/spare-parts/spare-part7.webp";

import guangSen1 from "../../public/images/guangSen/guangSen1.png"
import guangSen2 from "../../public/images/guangSen/guangSen2.png"
import guangSen3 from "../../public/images/guangSen/guangSen3.png"
import guangSen4 from "../../public/images/guangSen/guangSen4.png"
import guangSen5 from "../../public/images/guangSen/guangSen5.png"
import guangSen6 from "../../public/images/guangSen/guangSen6.png"
import guangSen7 from "../../public/images/guangSen/guangSen7.png"

// Function to extract filename from image src
const getImageName = (imgSrc) => {
  if (imgSrc && imgSrc.src) {
    const path = imgSrc.src;
    const filename = path.split('/').pop();
    return filename.split('.')[0]; // Remove file extension
  }
  return '';
};

const jinzenImages = [
  industrialMachine1,
  industrialMachine2,
  industrialMachine3,
  industrialMachine4,
  industrialMachine5,
  industrialMachine6,
  industrialMachine7,
  industrialMachine8,
];

const genclerImages = [
  gencler,
  gencler1,
  gencler2,
  gencler3,
  gencler4,
  gencler5,
  gencler6,
];

const sparePartImages = [
  sparePart1,
  sparePart2,
  sparePart3,
  sparePart4,
  sparePart5,
  sparePart6,
  sparePart7,
];

const guangSen1Images = [
    guangSen1,
    guangSen2,
    guangSen3,
    guangSen4,
    guangSen5,
    guangSen6,
    guangSen7,
  ];

const ProductSection = ({ title, onImageClick, images }) => (
  <section className="w-full px-4 sm:px-6 lg:px-8 my-16">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-3 h-[60px] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 18 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 22 },
          1280: { slidesPerView: 3, spaceBetween: 25 },
        }}
        className="industrial-carousel"
      >
        {images.map((imgSrc, idx) => (
          <SwiperSlide key={idx}>
            <div className="group p-2 sm:p-3 lg:p-4">
              <div
                onClick={() => onImageClick(imgSrc)}
                className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-102 relative"
              >
                <div className="relative min-h-[420px] overflow-hidden">
                  <img
                    src={imgSrc.src}
                    alt={`${title} image ${idx + 1}`}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 right-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-bold text-base mb-1">{title} #{idx + 1}</h3>
                    <p className="text-white/90 text-xs">Click to view details</p>
                  </div>
                </div>
                {/* Image Name Below the Image */}
                <div className="p-3 text-center bg-white">
                  <h4 className="text-gray-800 font-semibold text-base mb-1">
                    {getImageName(imgSrc)}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {title} Product
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export const ImagesCarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen py-2 lg:py-16">
      <ProductSection title="Jinzen" images={jinzenImages} onImageClick={openModal} />
      <ProductSection title="Gencler" images={genclerImages} onImageClick={openModal} />
      <ProductSection title="Guang Sen" images={guangSen1Images} onImageClick={openModal} />
      <ProductSection title="Spare Parts" images={sparePartImages} onImageClick={openModal} />

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={1000}
        centered
        className="custom-modal"
      >
        {selectedImage && (
          <div className="flex flex-col lg:flex-row gap-8 p-4">
            <div className="flex-1 relative h-80 lg:h-96">
              <Image
                src={selectedImage}
                alt={`Selected product`}
                className="rounded-xl shadow-lg"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="flex-1 space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {getImageName(selectedImage)}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                High-performance product designed for maximum efficiency and precision.
                This state-of-the-art equipment delivers exceptional results with advanced technology
                and robust construction suitable for demanding applications.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-4 text-gray-800">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Powerful motor system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Compact design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700">High precision control</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Energy efficient</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Quote
                </button>
                <button className="flex-1 border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};