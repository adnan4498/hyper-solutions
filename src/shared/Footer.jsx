import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Social Media Icons */}
          <div className="flex space-x-4 md:justify-start justify-center lg:col-span-1">
            <a href="#" className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white transition-colors duration-200">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white transition-colors duration-200">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white transition-colors duration-200">
              <Linkedin size={18} />
            </a>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-gray-400 text-sm font-medium mb-6 tracking-wider">NAVIGATION</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  WHO WE ARE
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  WHAT WE OFFER
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  SUSTAINABILITY
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  CSR
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-gray-400 text-sm font-medium mb-6 tracking-wider">CONTACT</h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="text-blue-400">U:</span>
                <span className="text-gray-300 ml-1">(+92) 21-111-111-258</span>
              </li>
              <li className="text-sm">
                <span className="text-blue-400">T:</span>
                <span className="text-gray-300 ml-1">(+92) 21-350-18638-44</span>
              </li>
              <li className="text-sm">
                <span className="text-blue-400">F:</span>
                <span className="text-gray-300 ml-1">(+92) 21-350-18631-2</span>
              </li>
              <li className="text-sm">
                <span className="text-blue-400">E:</span>
                <a href="mailto:CONTACT@ALKARAM.COM" className="text-gray-300 ml-1 hover:text-white transition-colors duration-200">
                  CONTACT@ALKARAM.COM
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="text-center md:text-left">
            <h3 className="text-gray-400 text-sm font-medium mb-6 tracking-wider">ADDRESS</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              ALKARAM TEXTILE MILLS (PVT) LTD H-7/11, LANDHI INDUSTRIAL AREA, KARACHI, PAKISTAN.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © 2021 Alkaram Textile Mills Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;