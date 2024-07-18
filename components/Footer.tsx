import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-32 pb-16 bg-[#02050a]">
      <div className="grid border-b border-gray-400 pb-24 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-4/5 mx-auto gap-12">
        <div className="flex items-center space-x-6">
          <div className="md:w-26 md:h-26 w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-16 md:h-16 w-14 h-14 text-black" />
          </div>
          <div>
            <h1 className="text-2xl mb-1 font-semibold text-white">Address</h1>
            <p className="text-lg w-11/12 text-white opacity-60">
              Armenia: Gyumri
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-26 md:h-26 w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="md:w-16 md:h-16 w-14 h-14 text-black" />
          </div>
          <div>
            <h1 className="text-2xl mb-1 font-semibold text-white">Phone</h1>
            <p className="text-lg w-11/12 text-white opacity-60">
              +37495704571
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-26 md:h-23 w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-16 md:h-16 w-14 h-14 text-black" />
          </div>
          <div>
            <h1 className="text-2xl mb-1 font-semibold text-white">
              Send Us an Email
            </h1>
            <p className="text-lg w-11/12 text-white opacity-60">
              jorhovsepyan.2001@gmail.com{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/5 mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-sm mb-8 md:mb-0 text-white opacity-20">
          Software developer | Jora Hovsepyan
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-sm text-white opacity-20">Terms & Conditions</p>
          <p className="text-sm text-white opacity-20">Privacy Policy</p>
          <p className="text-sm text-white opacity-20">Sitemap</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
