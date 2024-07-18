import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md flex items-center justify-between">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB
          <span className="text-yellow-300">DEV</span>
        </h1>
        <div className="hidden md:flex space-x-4">
          <a href="#hero" className="nav-link">
            HOME
          </a>{" "}
          <a href="#about" className="nav-link">
            ABOUT
          </a>
          <a href="#services" className="nav-link">
            SERVICES
          </a>{" "}
          <a href="#project" className="nav-link">
            PROJECT
          </a>{" "}
          <a href="#blog" className="nav-link">
            CERTIFICATE
          </a>{" "}
        </div>
      </div>
      <div className="md:hidden mr-4">
        <Bars3Icon
          className="w-[2rem] h-[2rem] cursor-pointer text-yellow-300"
          onClick={openNav}
        />
      </div>
    </div>
  );
};

export default Nav;
