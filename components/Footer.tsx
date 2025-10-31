import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-24 pb-10 bg-[#02050a] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] max-w-7xl mx-auto border-b border-gray-600 pb-12">
        {/* Address */}
        <div className="flex items-start space-x-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="w-10 h-10 md:w-12 md:h-12 text-black" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Address</h2>
            <p className="text-gray-300 opacity-70">Armenia, Gyumri</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="w-10 h-10 md:w-12 md:h-12 text-black" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Phone</h2>
            <p className="text-gray-300 opacity-70">+374 93 22 59 91</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="w-10 h-10 md:w-12 md:h-12 text-black" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Email</h2>
            <p className="text-gray-300 opacity-70 break-words">
              jorhovsepyan.2001@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 w-[90%] max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Jora Hovsepyan | Software Developer
        </p>

        <div className="flex items-center space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
