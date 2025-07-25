// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Modal } from "antd";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow } from "swiper/modules";
// import "antd/dist/reset.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/effect-coverflow";

// import industrialMachine1 from "../../public/images/industrial-machines/jinzen-iron.avif";
// import industrialMachine2 from "../../public/images/industrial-machines/jinzen-machine.webp";
// import industrialMachine3 from "../../public/images/industrial-machines/jinzen-machine2.webp";
// import industrialMachine4 from "../../public/images/industrial-machines/jinzen-machine3.webp";
// import industrialMachine5 from "../../public/images/industrial-machines/jinzen-machine4.webp";
// import industrialMachine6 from "../../public/images/industrial-machines/jinzen-machine5.webp";
// import industrialMachine7 from "../../public/images/industrial-machines/jinzen-machine6.webp";
// import industrialMachine8 from "../../public/images/industrial-machines/jinzen-machine7.webp";

// import gencler from "../../public/images/gencler/gencler.jpg";
// import gencler1 from "../../public/images/gencler/gencler1.jpg";
// import gencler2 from "../../public/images/gencler/gencler2.jpg";
// import gencler3 from "../../public/images/gencler/gencler3.jpg";
// import gencler4 from "../../public/images/gencler/gencler4.jpg";
// import gencler5 from "../../public/images/gencler/gencler5.jpg";
// import gencler6 from "../../public/images/gencler/gencler6.jpg";

// import sparePart1 from "../../public/images/spare-parts/spare-part1.webp";
// import sparePart2 from "../../public/images/spare-parts/spare-part2.webp";
// import sparePart3 from "../../public/images/spare-parts/spare-part3.webp";
// import sparePart4 from "../../public/images/spare-parts/spare-part4.webp";
// import sparePart5 from "../../public/images/spare-parts/spare-part5.webp";
// import sparePart6 from "../../public/images/spare-parts/spare-part6.webp";
// import sparePart7 from "../../public/images/spare-parts/spare-part7.webp";

// import guangSen1 from "../../public/images/guangSen/guangSen1.png";
// import guangSen2 from "../../public/images/guangSen/guangSen2.png";
// import guangSen3 from "../../public/images/guangSen/guangSen3.png";
// import guangSen4 from "../../public/images/guangSen/guangSen4.png";
// import guangSen5 from "../../public/images/guangSen/guangSen5.png";
// import guangSen6 from "../../public/images/guangSen/guangSen6.png";
// import guangSen7 from "../../public/images/guangSen/guangSen7.png";

// import scissors1 from "../../public/images/strong-scissors/strong-scissors1.webp"
// import scissors2 from "../../public/images/strong-scissors/strong-scissors2.webp"
// import scissors3 from "../../public/images/strong-scissors/strong-scissors3.webp"
// import scissors4 from "../../public/images/strong-scissors/strong-scissors4.webp"
// import scissors5 from "../../public/images/strong-scissors/strong-scissors5.webp"
// import scissors6 from "../../public/images/strong-scissors/strong-scissors6.webp"

// const getImageName = (imgSrc) => {
//   if (imgSrc && imgSrc.src) {
//     const path = imgSrc.src;
//     const filename = path.split("/").pop();
//     return filename.split(".")[0];
//   }
//   return "";
// };

// const jinzenImages = [
//   industrialMachine1,
//   industrialMachine2,
//   industrialMachine3,
//   industrialMachine4,
//   industrialMachine5,
//   industrialMachine6,
//   industrialMachine7,
//   industrialMachine8,
// ];

// const genclerImages = [
//   gencler,
//   gencler1,
//   gencler2,
//   gencler3,
//   gencler4,
//   gencler5,
//   gencler6,
// ];

// const sparePartImages = [
//   sparePart1,
//   sparePart2,
//   sparePart3,
//   sparePart4,
//   sparePart5,
//   sparePart6,
//   sparePart7,
// ];

// const guangSenImages = [
//   guangSen1,
//   guangSen2,
//   guangSen3,
//   guangSen4,
//   guangSen5,
//   guangSen6,
//   guangSen7,
// ];

// const hStrongScissors = [
//   scissors1,
//   scissors2,
//   scissors3,
//   scissors4,
//   scissors5,
//   scissors6,
// ]

// const ProductSection = ({ title, onImageClick, images, sectionId }) => {
//   // Color schemes for each section
//   const getColorScheme = (title) => {
//     switch (title) {
//       case "Jinzen":
//         return {
//           titleGradient: "from-blue-600 via-indigo-600 to-purple-600",
//           cardBorder: "border-blue-200/50",
//           sectionBg: "from-blue-50/30 to-indigo-50/30",
//           buttonGradient: "from-blue-600 to-purple-600",
//           badgeGradient: "from-blue-500 to-purple-500",
//           overlayAccent: "from-blue-600/20 to-purple-600/20"
//         };
//       case "Gencler":
//         return {
//           titleGradient: "from-emerald-600 via-teal-600 to-cyan-600",
//           cardBorder: "border-emerald-200/50",
//           sectionBg: "from-emerald-50/30 to-teal-50/30",
//           buttonGradient: "from-emerald-600 to-cyan-600",
//           badgeGradient: "from-emerald-500 to-cyan-500",
//           overlayAccent: "from-emerald-600/20 to-cyan-600/20"
//         };
//       case "Guang Sen":
//         return {
//           titleGradient: "from-orange-600 via-red-600 to-pink-600",
//           cardBorder: "border-orange-200/50",
//           sectionBg: "from-orange-50/30 to-pink-50/30",
//           buttonGradient: "from-orange-600 to-pink-600",
//           badgeGradient: "from-orange-500 to-pink-500",
//           overlayAccent: "from-orange-600/20 to-pink-600/20"
//         };
//       case "Spare Parts":
//         return {
//           titleGradient: "from-violet-600 via-purple-600 to-fuchsia-600",
//           cardBorder: "border-violet-200/50",
//           sectionBg: "from-violet-50/30 to-fuchsia-50/30",
//           buttonGradient: "from-violet-600 to-fuchsia-600",
//           badgeGradient: "from-violet-500 to-fuchsia-500",
//           overlayAccent: "from-violet-600/20 to-fuchsia-600/20"
//         };
//         case "H-Strong Scissors":
//           return {
//             titleGradient: "from-emerald-600 via-teal-600 to-cyan-600",
//             cardBorder: "border-emerald-200/50",
//             sectionBg: "from-emerald-50/30 to-teal-50/30",
//             buttonGradient: "from-emerald-600 to-cyan-600",
//             badgeGradient: "from-emerald-500 to-cyan-500",
//             overlayAccent: "from-emerald-600/20 to-cyan-600/20"
//           };
//       default:
//         return {
//           titleGradient: "from-emerald-600 via-teal-600 to-cyan-600",
//           cardBorder: "border-emerald-200/50",
//           sectionBg: "from-emerald-50/30 to-teal-50/30",
//           buttonGradient: "from-emerald-600 to-cyan-600",
//           badgeGradient: "from-emerald-500 to-cyan-500",
//           overlayAccent: "from-emerald-600/20 to-cyan-600/20"
//         };
//     }
//   };

//   const colors = getColorScheme(title);
  
//   return (
//     <section className={`w-full px-4 sm:px-6 lg:px-8 my-16 lg:my-24`}>
//       <div className={`max-w-7xl mx-auto bg-gradient-to-br ${colors.sectionBg} py-12 lg:py-20 rounded-3xl backdrop-blur-sm border border-white/20 shadow-xl`}>
//         {/* Section Header */}
//         <div className="text-center mb-12 lg:mb-16 px-4">
//           <div className="relative inline-block mb-6">
//             <h2 className={`text-4xl lg:text-6xl font-black lg:h-[70px] bg-gradient-to-r ${colors.titleGradient} bg-clip-text text-transparent tracking-tight`}>
//               {title}
//             </h2>
//             <div className={`absolute -inset-4 bg-gradient-to-r ${colors.overlayAccent} blur-3xl opacity-20 rounded-2xl -z-10`}></div>
//           </div>
//           <div className={`w-24 h-2 bg-gradient-to-r ${colors.badgeGradient} mx-auto rounded-full mb-6`}></div>
//           <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
//             Discover our premium collection of {title.toLowerCase()} products crafted for excellence
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative px-4">
//           <Swiper
//             modules={[Navigation, Pagination, Scrollbar, Autoplay]}
//             spaceBetween={20}
//             slidesPerView={1}
//             centeredSlides={true}
//             loop={true}
//             navigation={{
//               nextEl: `.swiper-button-next-${sectionId}`,
//               prevEl: `.swiper-button-prev-${sectionId}`,
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             autoplay={{ 
//               delay: 5000, 
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true 
//             }}
//             breakpoints={{
//               320: { 
//                 slidesPerView: 1.1, 
//                 spaceBetween: 16,
//                 centeredSlides: true 
//               },
//               640: { 
//                 slidesPerView: 1.5, 
//                 spaceBetween: 20,
//                 centeredSlides: true 
//               },
//               768: { 
//                 slidesPerView: 2, 
//                 spaceBetween: 24,
//                 centeredSlides: false 
//               },
//               1024: { 
//                 slidesPerView: 3, 
//                 spaceBetween: 28,
//                 centeredSlides: false 
//               },
//               1280: { 
//                 slidesPerView: 3, 
//                 spaceBetween: 32,
//                 centeredSlides: false 
//               },
//             }}
//             className="pb-16 overflow-visible"
//           >
//             {images.map((imgSrc, idx) => (
//               <SwiperSlide key={idx} className="h-auto">
//                 <div className="group p-1 h-full">
//                   <div
//                     onClick={() => onImageClick(imgSrc)}
//                     className={`cursor-pointer rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 border-2 ${colors.cardBorder} hover:border-opacity-70 h-full`}
//                   >
//                     {/* Image Container */}
//                     <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
//                       <img
//                         src={imgSrc.src}
//                         alt={`${title} image ${idx + 1}`}
//                         className="object-cover w-full h-full transition-all duration-1000 group-hover:scale-110"
//                       />
                      
//                       {/* Dark Gradient Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      
//                       {/* Colored Overlay */}
//                       <div className={`absolute inset-0 bg-gradient-to-br ${colors.overlayAccent} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      
//                       {/* Content Overlay */}
//                       <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
//                         <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
//                           {/* Category Badge */}
//                           <div className="flex items-center space-x-2 mb-3">
//                             <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-gradient-to-r ${colors.badgeGradient} shadow-lg`}></div>
//                             <span className="!text-white/90 text-xs lg:text-sm font-medium tracking-wider uppercase">
//                               {title}
//                             </span>
//                           </div>
                          
//                           {/* Product Name */}
//                           <h3 className="!text-white font-bold text-lg lg:text-xl xl:text-2xl mb-2 leading-tight line-clamp-2">
//                             {getImageName(imgSrc)}
//                           </h3>
                          
//                           {/* Description */}
//                           <p className="!text-white/80 text-sm mb-4 line-clamp-2 leading-relaxed">
//                             Premium quality product engineered for exceptional performance
//                           </p>
                          
//                           {/* Action Button */}
//                           <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
//                             <button className={`bg-gradient-to-r ${colors.buttonGradient} !text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
//                               View Details
//                             </button>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Floating Number Badge */}
//                       <div className="absolute top-3 lg:top-4 right-3 lg:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                         <div className={`bg-gradient-to-r ${colors.buttonGradient} !text-white px-2 lg:px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
//                           #{idx + 1}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}

//             {/* Custom Navigation Buttons */}
//             <div className={`swiper-button-prev-${sectionId} group absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-12 lg:w-14 h-12 lg:h-14 bg-white/95 backdrop-blur-xl rounded-full shadow-xl border border-white/30 cursor-pointer transition-all duration-500 hover:bg-white hover:shadow-2xl hover:scale-110 flex items-center justify-center`}>
//               <svg className="w-5 lg:w-6 h-5 lg:h-6 text-gray-700 group-hover:text-gray-900 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//               </svg>
//             </div>

//             <div className={`swiper-button-next-${sectionId} group absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-12 lg:w-14 h-12 lg:h-14 bg-white/95 backdrop-blur-xl rounded-full shadow-xl border border-white/30 cursor-pointer transition-all duration-500 hover:bg-white hover:shadow-2xl hover:scale-110 flex items-center justify-center`}>
//               <svg className="w-5 lg:w-6 h-5 lg:h-6 text-gray-700 group-hover:text-gray-900 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//               </svg>
//             </div>
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ImagesCarousel = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 lg:py-32">
//         {/* Animated Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//           <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
//           <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="mb-8">
//             <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black !text-white mb-6 lg:mb-8 tracking-tight leading-tight">
//               Premium 
//               <br className="sm:hidden" />
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Collections</span>
//             </h1>
//             <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
//               Explore our curated selection of industrial excellence and precision engineering
//             </p>
//           </div>
          
//           <div className="flex justify-center mb-8">
//             <div className="w-24 lg:w-32 h-1 lg:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
//           </div>
          
//           {/* Stats */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto mt-12 lg:mt-16">
//             {[
//               { number: "500+", label: "Products" },
//               { number: "50+", label: "Categories" },
//               { number: "24/7", label: "Support" },
//               { number: "99%", label: "Satisfaction" }
//             ].map((stat, idx) => (
//               <div key={idx} className="text-center">
//                 <div className="text-2xl lg:text-4xl font-black !text-white mb-2">{stat.number}</div>
//                 <div className="text-blue-200 text-sm lg:text-base font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Product Sections */}
//       <div className="py-8 lg:py-16">
//         <ProductSection title="Jinzen" images={jinzenImages} onImageClick={openModal} sectionId="jinzen" />
//         <ProductSection title="Gencler" images={genclerImages} onImageClick={openModal} sectionId="gencler" />
//         <ProductSection title="Guang Sen" images={guangSenImages} onImageClick={openModal} sectionId="guangsen" />
//         <ProductSection title="Spare Parts" images={sparePartImages} onImageClick={openModal} sectionId="spareparts" />
//         <ProductSection title="H-Strong Scissors" images={hStrongScissors} onImageClick={openModal} sectionId="hStrongScissors" />
//       </div>

//       {/* Enhanced Modal */}
//       <Modal
//         open={isModalOpen}
//         onCancel={handleCancel}
//         footer={null}
//         width="90%"
//         style={{ maxWidth: '1200px' }}
//         centered
//         destroyOnClose
//         className="rounded-3xl overflow-hidden"
//       >
//         {selectedImage && (
//           <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 lg:p-8">
//             {/* Image Section */}
//             <div className="flex-1 relative h-64 sm:h-80 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
//               <Image
//                 src={selectedImage}
//                 alt="Selected product"
//                 className="rounded-2xl"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 600px"
//                 style={{ objectFit: "contain" }}
//                 priority
//               />
//             </div>
            
//             {/* Content Section */}
//             <div className="flex-1 space-y-6 lg:space-y-8">
//               {/* Header */}
//               <div className="border-b border-gray-200 pb-4 lg:pb-6">
//                 <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 lg:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
//                   {getImageName(selectedImage)}
//                 </h3>
//                 <div className="w-16 lg:w-24 h-1 lg:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 lg:mb-4"></div>
//                 <p className="text-gray-600 text-base lg:text-lg font-medium">Premium Industrial Solution</p>
//               </div>
              
//               {/* Description */}
//               <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
//                 Experience unparalleled performance with our state-of-the-art equipment. 
//                 Engineered for precision, built for durability, and designed to exceed 
//                 expectations in the most demanding industrial environments.
//               </p>
              
//               {/* Features */}
//               <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-4 lg:p-6 border border-blue-100">
//                 <h4 className="font-bold text-lg lg:text-xl mb-4 lg:mb-6 text-gray-800 flex items-center">
//                   <div className="w-1 h-6 lg:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
//                   Premium Features
//                 </h4>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
//                   {[
//                     { icon: "⚡", text: "High-performance motor" },
//                     { icon: "🎯", text: "Precision engineering" },
//                     { icon: "💎", text: "Premium build quality" },
//                     { icon: "🔧", text: "Easy maintenance" },
//                     { icon: "🌿", text: "Energy efficient" },
//                     { icon: "🛡️", text: "Advanced safety" }
//                   ].map((feature, idx) => (
//                     <div key={idx} className="flex items-center space-x-3 p-2 lg:p-3 bg-white/60 rounded-xl border border-white/40">
//                       <div className="text-lg lg:text-xl flex-shrink-0">{feature.icon}</div>
//                       <span className="text-gray-700 font-medium text-sm lg:text-base">{feature.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2">
//                 <button className="flex-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 !text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm lg:text-base">
//                   Get Quote Now
//                 </button>
//                 <button className="flex-1  border-2 border-blue-600 !text-blue-600 font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 text-sm lg:text-base">
//                   Technical Specs
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default ImagesCarousel;



"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow } from "swiper/modules";
import "antd/dist/reset.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

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

import guangSen1 from "../../public/images/guangSen/guangSen1.png";
import guangSen2 from "../../public/images/guangSen/guangSen2.png";
import guangSen3 from "../../public/images/guangSen/guangSen3.png";
import guangSen4 from "../../public/images/guangSen/guangSen4.png";
import guangSen5 from "../../public/images/guangSen/guangSen5.png";
import guangSen6 from "../../public/images/guangSen/guangSen6.png";
import guangSen7 from "../../public/images/guangSen/guangSen7.png";

import scissors1 from "../../public/images/strong-scissors/strong-scissors1.webp"
import scissors2 from "../../public/images/strong-scissors/strong-scissors2.webp"
import scissors3 from "../../public/images/strong-scissors/strong-scissors3.webp"
import scissors4 from "../../public/images/strong-scissors/strong-scissors4.webp"
import scissors5 from "../../public/images/strong-scissors/strong-scissors5.webp"
import scissors6 from "../../public/images/strong-scissors/strong-scissors6.webp"

const getImageName = (imgSrc) => {
  if (imgSrc && imgSrc.src) {
    const path = imgSrc.src;
    const filename = path.split("/").pop();
    return filename.split(".")[0];
  }
  return "";
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

const guangSenImages = [
  guangSen1,
  guangSen2,
  guangSen3,
  guangSen4,
  guangSen5,
  guangSen6,
  guangSen7,
];

const hStrongScissors = [
  scissors1,
  scissors2,
  scissors3,
  scissors4,
  scissors5,
  scissors6,
]

const ProductSection = ({ title, onImageClick, images, sectionId }) => {
  // Color schemes for each section
  const getColorScheme = (title) => {
    switch (title) {
      case "Jinzen":
        return {
          titleGradient: "from-blue-600 via-indigo-600 to-purple-600",
          cardBorder: "border-blue-200/50",
          sectionBg: "from-blue-50/30 to-indigo-50/30",
          buttonGradient: "from-blue-600 to-purple-600",
          badgeGradient: "from-blue-500 to-purple-500",
          overlayAccent: "from-blue-600/20 to-purple-600/20"
        };
      case "Gencler":
        return {
          titleGradient: "from-emerald-600 via-teal-600 to-cyan-600",
          cardBorder: "border-emerald-200/50",
          sectionBg: "from-emerald-50/30 to-teal-50/30",
          buttonGradient: "from-emerald-600 to-cyan-600",
          badgeGradient: "from-emerald-500 to-cyan-500",
          overlayAccent: "from-emerald-600/20 to-cyan-600/20"
        };
      case "Guang Sen":
        return {
          titleGradient: "from-orange-600 via-red-600 to-pink-600",
          cardBorder: "border-orange-200/50",
          sectionBg: "from-orange-50/30 to-pink-50/30",
          buttonGradient: "from-orange-600 to-pink-600",
          badgeGradient: "from-orange-500 to-pink-500",
          overlayAccent: "from-orange-600/20 to-pink-600/20"
        };
      case "Spare Parts":
        return {
          titleGradient: "from-violet-600 via-purple-600 to-fuchsia-600",
          cardBorder: "border-violet-200/50",
          sectionBg: "from-violet-50/30 to-fuchsia-50/30",
          buttonGradient: "from-violet-600 to-fuchsia-600",
          badgeGradient: "from-violet-500 to-fuchsia-500",
          overlayAccent: "from-violet-600/20 to-fuchsia-600/20"
        };
        case "H-Strong Scissors":
          return {
            titleGradient: "from-emerald-600 via-teal-600 to-cyan-600",
            cardBorder: "border-emerald-200/50",
            sectionBg: "from-emerald-50/30 to-teal-50/30",
            buttonGradient: "from-emerald-600 to-cyan-600",
            badgeGradient: "from-emerald-500 to-cyan-500",
            overlayAccent: "from-emerald-600/20 to-cyan-600/20"
          };
      default:
        return {
          titleGradient: "from-emerald-600 via-teal-600 to-cyan-600",
          cardBorder: "border-emerald-200/50",
          sectionBg: "from-emerald-50/30 to-teal-50/30",
          buttonGradient: "from-emerald-600 to-cyan-600",
          badgeGradient: "from-emerald-500 to-cyan-500",
          overlayAccent: "from-emerald-600/20 to-cyan-600/20"
        };
    }
  };

  const colors = getColorScheme(title);
  
  return (
    <section className={`w-full px-4 sm:px-6 lg:px-8 my-16 lg:my-24`}>
      <div className={`max-w-7xl mx-auto bg-gradient-to-br ${colors.sectionBg} py-12 lg:py-20 rounded-3xl backdrop-blur-sm border border-white/20 shadow-xl`}>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 px-4">
          <div className="relative inline-block mb-6">
            <h2 className={`text-4xl lg:text-6xl font-black lg:h-[70px] bg-gradient-to-r ${colors.titleGradient} bg-clip-text text-transparent tracking-tight`}>
              {title}
            </h2>
            <div className={`absolute -inset-4 bg-gradient-to-r ${colors.overlayAccent} blur-3xl opacity-20 rounded-2xl -z-10`}></div>
          </div>
          <div className={`w-24 h-2 bg-gradient-to-r ${colors.badgeGradient} mx-auto rounded-full mb-6`}></div>
          <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our premium collection of {title.toLowerCase()} products crafted for excellence
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-4">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: `.swiper-button-next-${sectionId}`,
              prevEl: `.swiper-button-prev-${sectionId}`,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            breakpoints={{
              320: { 
                slidesPerView: 1.1, 
                spaceBetween: 16,
                centeredSlides: true 
              },
              640: { 
                slidesPerView: 1.5, 
                spaceBetween: 20,
                centeredSlides: true 
              },
              768: { 
                slidesPerView: 2, 
                spaceBetween: 24,
                centeredSlides: false 
              },
              1024: { 
                slidesPerView: 3, 
                spaceBetween: 28,
                centeredSlides: false 
              },
              1280: { 
                slidesPerView: 3, 
                spaceBetween: 32,
                centeredSlides: false 
              },
            }}
            className="pb-16 overflow-visible"
          >
            {images.map((imgSrc, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group p-1 h-full">
                  <div
                    onClick={() => onImageClick(imgSrc)}
                    className={`cursor-pointer rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 border-2 ${colors.cardBorder} hover:border-opacity-70 h-full`}
                  >
                    {/* Image Container */}
                    <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                      <img
                        src={imgSrc.src}
                        alt={`${title} image ${idx + 1}`}
                        className="object-cover w-full h-full transition-all duration-1000 group-hover:scale-110"
                      />
                      
                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      
                      {/* Colored Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.overlayAccent} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
                        <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                          {/* Category Badge */}
                          <div className="flex items-center space-x-2 mb-3">
                            <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-gradient-to-r ${colors.badgeGradient} shadow-lg`}></div>
                            <span className="!text-white/90 text-xs lg:text-sm font-medium tracking-wider uppercase">
                              {title}
                            </span>
                          </div>
                          
                          {/* Product Name */}
                          <h3 className="!text-white font-bold text-lg lg:text-xl xl:text-2xl mb-2 leading-tight line-clamp-2">
                            {getImageName(imgSrc)}
                          </h3>
                          
                          {/* Description */}
                          <p className="!text-white/80 text-sm mb-4 line-clamp-2 leading-relaxed">
                            Premium quality product engineered for exceptional performance
                          </p>
                          
                          {/* Action Button */}
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                            <button className={`bg-gradient-to-r ${colors.buttonGradient} !text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Number Badge */}
                      <div className="absolute top-3 lg:top-4 right-3 lg:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`bg-gradient-to-r ${colors.buttonGradient} !text-white px-2 lg:px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                          #{idx + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div className={`swiper-button-prev-${sectionId} group absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-12 lg:w-14 h-12 lg:h-14 bg-white/95 backdrop-blur-xl rounded-full shadow-xl border border-white/30 cursor-pointer transition-all duration-500 hover:bg-white hover:shadow-2xl hover:scale-110 flex items-center justify-center`}>
              <svg className="w-5 lg:w-6 h-5 lg:h-6 text-gray-700 group-hover:text-gray-900 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>

            <div className={`swiper-button-next-${sectionId} group absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-12 lg:w-14 h-12 lg:h-14 bg-white/95 backdrop-blur-xl rounded-full shadow-xl border border-white/30 cursor-pointer transition-all duration-500 hover:bg-white hover:shadow-2xl hover:scale-110 flex items-center justify-center`}>
              <svg className="w-5 lg:w-6 h-5 lg:h-6 text-gray-700 group-hover:text-gray-900 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const ImagesCarousel = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 lg:py-32">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black !text-white mb-6 lg:mb-8 tracking-tight leading-tight">
              Premium 
              <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Collections</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Explore our curated selection of industrial excellence and precision engineering
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="w-24 lg:w-32 h-1 lg:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto mt-12 lg:mt-16">
            {[
              { number: "500+", label: "Products" },
              { number: "50+", label: "Categories" },
              { number: "24/7", label: "Support" },
              { number: "99%", label: "Satisfaction" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl lg:text-4xl font-black !text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm lg:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Sections */}
      <div className="py-8 lg:py-16">
        <ProductSection title="Jinzen" images={jinzenImages} onImageClick={openModal} sectionId="jinzen" />
        <ProductSection title="Gencler" images={genclerImages} onImageClick={openModal} sectionId="gencler" />
        <ProductSection title="Guang Sen" images={guangSenImages} onImageClick={openModal} sectionId="guangsen" />
        <ProductSection title="Spare Parts" images={sparePartImages} onImageClick={openModal} sectionId="spareparts" />
        <ProductSection title="H-Strong Scissors" images={hStrongScissors} onImageClick={openModal} sectionId="hStrongScissors" />
      </div>

      {/* Enhanced Modal - Fixed for Mobile */}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width="95%"
        style={{ 
          maxWidth: '1200px',
          top: '20px'
        }}
        centered
        destroyOnClose
        className="rounded-3xl overflow-hidden"
        styles={{
          body: { padding: 0 },
          content: { padding: 0 }
        }}
      >
        {selectedImage && (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 lg:p-8">
            {/* Image Section - Fixed for Mobile */}
            <div className="flex-1 relative min-h-[300px] sm:min-h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src={selectedImage}
                alt="Selected product"
                className="rounded-2xl"
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 1024px) 50vw, 600px"
                style={{ 
                  objectFit: "contain",
                  objectPosition: "center"
                }}
                priority
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            
            {/* Content Section */}
            <div className="flex-1 space-y-6 lg:space-y-8">
              {/* Header */}
              <div className="border-b border-gray-200 pb-4 lg:pb-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 lg:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                  {getImageName(selectedImage)}
                </h3>
                <div className="w-16 lg:w-24 h-1 lg:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 lg:mb-4"></div>
                <p className="text-gray-600 text-base lg:text-lg font-medium">Premium Industrial Solution</p>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                Experience unparalleled performance with our state-of-the-art equipment. 
                Engineered for precision, built for durability, and designed to exceed 
                expectations in the most demanding industrial environments.
              </p>
              
              {/* Features */}
              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-4 lg:p-6 border border-blue-100">
                <h4 className="font-bold text-lg lg:text-xl mb-4 lg:mb-6 text-gray-800 flex items-center">
                  <div className="w-1 h-6 lg:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  Premium Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  {[
                    { icon: "⚡", text: "High-performance motor" },
                    { icon: "🎯", text: "Precision engineering" },
                    { icon: "💎", text: "Premium build quality" },
                    { icon: "🔧", text: "Easy maintenance" },
                    { icon: "🌿", text: "Energy efficient" },
                    { icon: "🛡️", text: "Advanced safety" }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-2 lg:p-3 bg-white/60 rounded-xl border border-white/40">
                      <div className="text-lg lg:text-xl flex-shrink-0">{feature.icon}</div>
                      <span className="text-gray-700 font-medium text-sm lg:text-base">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2">
                <button className="flex-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 !text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm lg:text-base">
                  Get Quote Now
                </button>
                <button className="flex-1  border-2 border-blue-600 !text-blue-600 font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 text-sm lg:text-base">
                  Technical Specs
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImagesCarousel;