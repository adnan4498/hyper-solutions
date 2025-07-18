import React, { useState } from "react";
import hamburgerIcon from "../../public/images/hamburger-icon.png";
import logo from "../../public/images/hyper-logo.png";

import Link from "next/link";
import Image from "next/image";
import { Drawer } from "antd";

const Header = ({
  hideLi,
  toggleDrawer,
  headerBg = "bg-white",
  liColor = "",
}) => {
  const [open, setOpen] = useState(false);
  const visaProp = "my visa";

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className={`fixed top-0 w-full z-[999] ${headerBg} shadow-md`}>
      <div className="py-4 px-6">
        <div className="flex justify-between items-center">
          {/* Desktop Logo */}
          <div className="hidden lg:flex items-center font-semibold text-3xl">
            <Link href="/">
              <div className="flex gap-4 items-center 2xl:w-[250px]">
                <Image
                  src={logo}
                  width={0}
                  height={0}
                  className="w-full h-full"
                  alt="Logo"
                />
              </div>
            </Link>
          </div>

          <ul
            className={`hidden lg:flex lg:gap-6 2xl:gap-10  pr-3 sm:pr-6 cursor-pointer
    text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl font-medium 
    ${liColor} ${hideLi}`}
          >
            <li className="hover:text-blue-500">Embroidery Machines</li>
            <li className="hover:text-blue-500">Industrial Machines</li>

            <li>
              <Link href="/visa" className="hover:text-blue-500 block w-full">
                Spare Parts
              </Link>
            </li>

            <li className="hover:text-blue-500">Brands</li>

            <li>
              <Link
                href="/contactus"
                className="hover:text-blue-500 block w-full"
              >
                Contact Us
              </Link>
            </li>

            <li className="hover:text-blue-500">Testimonials</li>
          </ul>

          {/* Mobile Logo */}
          <ul
            className={`lg:hidden text-[22px] font-semibold ${liColor} ${hideLi}`}
          >
            <Link href="/visa" state={{ visaProp }}>
              <Image src={logo} alt="logo" width={150} height={150} />
            </Link>
          </ul>

          {/* Hamburger Icon */}
          <div className="block lg:hidden">
            <Image
              width={0}
              height={0}
              className="w-10 h-10"
              src={hamburgerIcon}
              onClick={showDrawer}
              alt="hamburger-icon"
            />
            <Drawer title="Menu" onClose={onClose} open={open}>
              <div className="text-2xl text-[#30302e] font-semibold flex flex-col gap-5">
                <p>Embroidery Machines</p>
                <p>Industrial Machines</p>
                <Link href="/visa" state={{ visaProp }}>
                  <p>Spare Parts</p>
                </Link>
                <p>Brands</p>
                <p>Testimonials</p>
                <Link href="/contactus">
                  <p>Contact</p>
                </Link>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
