import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Company Info & Social */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <div className="mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Hyper Industrial Solutions
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Leading the future with innovative industrial solutions and sustainable practices.
                </p>
              </div>
              
              <div className="flex space-x-4 justify-center lg:justify-start">
                {[
                  { Icon: Facebook, href: "#", label: "Facebook" },
                  { Icon: Instagram, href: "#", label: "Instagram" },
                  { Icon: Linkedin, href: "#", label: "LinkedIn" }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 border border-gray-700 hover:border-blue-500"
                  >
                    <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Navigation
                {/* <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 lg:mx-0 mx-auto"></div> */}
              </h3>
              <ul className="space-y-4">
                {['HOME', 'WHO WE ARE', 'WHAT WE OFFER', 'SUSTAINABILITY', 'CSR'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium relative inline-block"
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Contact
                {/* <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 lg:mx-0 mx-auto"></div> */}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start justify-center lg:justify-start group">
                  <Phone size={16} className="text-blue-400 mt-1 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm">
                    <div className="text-gray-300 hover:text-white transition-colors duration-300">+92 3242150061</div>
                    <div className="text-gray-300 hover:text-white transition-colors duration-300">+92 2132800923</div>
                  </div>
                </li>
                <li className="flex items-center justify-center lg:justify-start group">
                  <Mail size={16} className="text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="mailto:interprise.ak@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    interprise.ak@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Locations
                {/* <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 lg:mx-0 mx-auto"></div> */}
              </h3>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start justify-center lg:justify-start mb-2">
                    <MapPin size={16} className="text-blue-400 mt-1 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-sm font-medium text-gray-200">Head Office</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed hover:text-white transition-colors duration-300">
                    Plot # C-217, Sector 50-A, Korangi, Karachi, Pakistan.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-start justify-center lg:justify-start mb-2">
                    <MapPin size={16} className="text-purple-400 mt-1 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-sm font-medium text-gray-200">Branch Office</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed hover:text-white transition-colors duration-300">
                    AR.07 Ground Floor Gulshan e Iqbal Block 10 AL.Rehman society
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-16 pt-8 border-t border-gray-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Hyper Industrial Solutions Ltd. All rights reserved.
              </p>
              
              <button
                onClick={scrollToTop}
                className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 text-sm"
              >
                <span>Back to top</span>
                <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-700 group-hover:border-blue-500">
                  <ArrowUp size={14} className="group-hover:text-blue-400 transition-colors duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
    </footer>
  );
};

export default Footer;