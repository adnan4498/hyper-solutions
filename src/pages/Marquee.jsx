import Image from "next/image";
import Marquee from "react-fast-marquee";
import hStronglogo from "../../public/images/h-strong-logo.webp";
import jinzenLogo from "../../public/images/jinzen-logo.jpg";
import heidelberglogo from "../../public/images/heidelberg-logo.png";
import shandonglogo from "../../public/images/shandong-logo.jpg";
import horkiLogo from "../../public/images/horki-logo.jpg";
import guangdongLogo from "../../public/images/guangdong-logo.png";

export default function MarqueeLogos() {
  const logos = [
    { name: "H-Strong", url: hStronglogo, description: "Industrial Excellence" },
    { name: "Jinzen", url: jinzenLogo, description: "Precision Machinery" },
    { name: "Heidelberg", url: heidelberglogo, description: "Print Solutions" },
    { name: "Shandong", url: shandonglogo, description: "Manufacturing" },
    { name: "Horki", url: horkiLogo, description: "Quality Equipment" },
    { name: "Guangdong", url: guangdongLogo, description: "Technology Partners" },
  ];

  const renderCards = () =>
    Array.from({ length: 4 }).flatMap((_, setIndex) =>
      logos.map((brand, idx) => (
        <div
          key={`${brand.name}-${idx}-${setIndex}`}
          className="group relative bg-gradient-to-br from-white via-white to-gray-50/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 mr-6 lg:mr-8 min-w-[220px] lg:min-w-[280px] text-center cursor-pointer transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-white/50 shadow-lg overflow-hidden"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-3xl"></div>
          
          {/* Floating Orbs */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
          
          {/* Main Content */}
          <div className="relative z-10">
            {/* Logo Container */}
            <div className="relative mb-4 lg:mb-6 p-3 lg:p-4 bg-white/80 rounded-xl lg:rounded-2xl shadow-inner group-hover:shadow-md transition-shadow duration-300 border border-gray-100/50">
              <div className="relative h-16 lg:h-20 w-full">
                <Image
                  src={brand.url}
                  alt={`${brand.name} Logo`}
                  fill
                  className="object-contain rounded-lg transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                  sizes="(max-width: 768px) 200px, 280px"
                />
              </div>
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
            </div>

            {/* Brand Info */}
            <div className="space-y-2 lg:space-y-3">
              <h3 className="text-gray-800 font-bold text-lg lg:text-xl group-hover:text-gray-900 transition-colors duration-300">
                {brand.name}
              </h3>
              <p className="text-gray-500 text-sm lg:text-base font-medium group-hover:text-gray-600 transition-colors duration-300">
                {brand.description}
              </p>
              
              {/* Animated underline */}
              <div className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
            </div>

            {/* Trust Badge */}
            <div className="absolute top-3 lg:top-4 right-3 lg:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                ✓ Trusted
              </div>
            </div>
          </div>
        </div>
      ))
    );

  return (
    <div className="w-full bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-10 w-48 h-48 bg-purple-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center py-12 lg:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 lg:mb-8">
              <h2 className="text-3xl lg:text-5xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-4 tracking-tight">
                Trusted by Industry 
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Leaders</span>
              </h2>
              <div className="w-24 lg:w-32 h-1 lg:h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                Partnering with world-class brands to deliver exceptional industrial solutions
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">50+</div>
                <div className="text-gray-600 text-sm lg:text-base font-medium">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">25+</div>
                <div className="text-gray-600 text-sm lg:text-base font-medium">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-1">1000+</div>
                <div className="text-gray-600 text-sm lg:text-base font-medium">Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Marquee Section */}
        <div className="pb-12 lg:pb-16">
          {/* First Row - Left to Right */}
          <div className="mb-8 lg:mb-12">
            <Marquee
              direction="left"
              pauseOnHover={true}
              speed={40}
              gradient={true}
              gradientColor="rgb(248, 250, 252)"
              gradientWidth={100}
              className="py-4"
            >
              {renderCards()}
            </Marquee>
          </div>

          {/* Second Row - Right to Left */}
          <div className="mb-8 lg:mb-12">
            <Marquee
              direction="right"
              pauseOnHover={true}
              speed={35}
              gradient={true}
              gradientColor="rgb(248, 250, 252)"
              gradientWidth={100}
              className="py-4"
            >
              {renderCards()}
            </Marquee>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center pb-12 lg:pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-white/80 via-white/90 to-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Ready to Join Our Network?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Become part of our trusted partner ecosystem and access premium industrial solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <button className="flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 !text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Partner with Us
                </button>
                <button className="flex-1 border-2  border-blue-600 !text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:border-blue-700 hover:text-blue-700">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}