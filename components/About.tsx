import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const About = () => {
  const handleDownloadCV = () => {
    const cvPath = "/images/Jora_cv.pdf";

    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Jora_cv.pdf";
    link.click();
  };

  return (
    <div id="about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-blue-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              As a detail-oriented web Developer proficient in React, Next.js
              and Node.js, I bring a wealth of experience and dedication to
              every project. With a passion for problem-solving and a drive to
              deliver impactful solutions, I thrive in dynamic team
              environments. I am committed to continuous learning and growth,
              always seeking to expand my knowledge and skills in software
              development.
            </p>
          </div>
          <button
            className="px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
            onClick={handleDownloadCV}
          >
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div className="lg:w-[300px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <div className="relative w-[100%] h-[100%] z-[11]">
            <Image
              src="/images/Jor.jpg"
              alt="user"
              layout="fill"
              objectFit="contain"
              className="object-contain"
            />
          </div>
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[2rem] right-[2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
