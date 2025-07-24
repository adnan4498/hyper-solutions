import React, { useState, useEffect } from "react";
import hamburgerIcon from "../../public/images/hamburger-icon.png";
import logo from "../../public/images/hyper-logo.png";

import Link from "next/link";
import Image from "next/image";
import { Drawer } from "antd";

const Header = ({
  hideLi,
  toggleDrawer,
  headerBg = "bg-white/95 backdrop-blur-md",
  liColor = "text-gray-700",
}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const visaProp = "my visa";

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className={`fixed top-0 w-full z-[999] transition-all duration-500 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-100/50' 
        : headerBg + ' shadow-lg'
    }`}>
      <div className="py-4 px-6 lg:px-8 transition-all duration-300">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Desktop Logo */}
          <div className="hidden lg:flex items-center font-semibold text-3xl">
              <div className="flex gap-4 items-center 2xl:w-[280px] ">
                <Image
                  src={logo}
                  width={0}
                  height={0}
                  className="w-full h-full"
                  alt="Logo"
                  priority
                />
              </div>
          </div>

          {/* Desktop Navigation */}
          <ul className={`hidden lg:flex lg:gap-6 2xl:gap-10 pr-3 sm:pr-6 cursor-pointer text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl font-medium ${liColor} ${hideLi}`}>
            <li className="hover:text-[#01B2C1]">Embroidery Machines</li>
            <li className="hover:text-[#01B2C1]">Industrial Machines</li>
            <li>
                Spare Parts
            </li>
            <li className="hover:text-[#01B2C1]">Brands</li>
            <li>
                Contact Us
            </li>
            <li className="hover:text-[#01B2C1]">Testimonials</li>
          </ul>

          {/* Mobile Logo */}
          <div className={`lg:hidden text-[22px] font-semibold ${liColor} ${hideLi}`}>
              <Image 
                src={logo} 
                alt="logo" 
                width={140} 
                height={140} 
                // className="drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                priority
              />
          </div>

          {/* Enhanced Hamburger Menu */}
          <div className="block lg:hidden">
    <button
      onClick={showDrawer}
      className="relative w-10 h-10 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
      aria-label="Open menu"
    >
      <div className="flex flex-col items-center justify-center space-y-1">
        <span className={`block w-4 h-0.5 bg-gray-700 transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-4 h-0.5 bg-gray-700 transition-all duration-200 ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-4 h-0.5 bg-gray-700 transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </div>
    </button>

    {/* Professional Mobile Drawer */}
    <Drawer 
      onClose={onClose} 
      open={open} 
      width={320}
      placement="right"
      closable={false}
      styles={{
        body: { 
          background: '#ffffff',
          padding: '1.5rem'
        }
      }}
    >
      <div className="flex flex-col h-full">
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Navigation
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-150"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-2 flex-1">
          <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-150">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-800">
                Embroidery Machines
              </span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-150">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-800">
                Industrial Machines
              </span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-150">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-800">
                Spare Parts
              </span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-150">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-800">
                Brands
              </span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-150">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-800">
                Testimonials
              </span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-150">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-800">
                Contact Us
              </span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </nav>

        {/* Drawer Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200 pb-10">
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600">Need assistance?</p>
            <button className="px-5 py-2.5 bg-gray-900 !text-white rounded-lg hover:bg-gray-800 transition-colors duration-150 font-medium text-sm">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </Drawer>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Header;