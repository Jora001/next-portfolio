/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Work = () => {
  return (
    <div
      id="services"
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
    >
      <p className="heading">
        Work <span className="text-blue-400">Experience</span>{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <img
              src="/images/lum.avif.jpg" // Path to the image in the public folder
              alt="Rocket Launch"
              className="w-[6rem] h-[6rem] mx-auto rounded-full text-[#d3fae8]"
            />
            <h1 className="text-[20px] text-[#f0f2f2] md:text-[20px] mt-[1.5rem] mb-[1.5rem]">
              Software Developer{" "}
            </h1>
            <p className="text-[14px] text-[#f8f8f8] font-normal">
              In 2024 I joined the TechMind team as a Software Developer, where
              I ensure software quality, manage technical requirements, and
              deliver innovative solutions. Additionally, I have experience
              teaching Next.js.
            </p>
          </div>
        </div>
        <div>
          <div className="hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <img
              src="/images/gtc.jpg" // Path to the image in the public folder
              alt="Rocket Launch"
              className="w-[6rem] h-[6rem] mx-auto rounded-full text-[#d3fae8]"
            />
            <h1 className="text-[20px] text-[#f0f2f2] md:text-[20px] mt-[1.5rem] mb-[1.5rem]">
              FRONT END DEVELOPER
            </h1>
            <p className="text-[14px] text-[#ececec] font-normal">
              I collaborated with GTC on the development of the Black-Box
              website. My role involved working closely with the team to design,
              build, and implement the site, ensuring a high-quality and
              functional end product.
            </p>
          </div>
        </div>
        <div>
          <div className="hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <img
              src="/images/prof.jpg" // Path to the image in the public folder
              alt="Rocket Launch"
              className="w-[6rem] h-[6rem] mx-auto rounded-full text-[#d3fae8]"
            />
            <h1 className="text-[20px] text-[#ffffff] md:text-[20px] mt-[1.5rem] mb-[1.5rem]">
              BDS. Senior specialist{" "}
            </h1>
            <p className="text-[13px] text-[#fcfcfc] font-normal">
              I worked at Profit+ for over 5 years as a Business development and
              sales specialist, where I led sales strategies, managed client
              relationships, and drove revenue growth. My role involved
              overseeing sales teams, developing strategic plans, and achieving
              targets to contribute to the company's success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
