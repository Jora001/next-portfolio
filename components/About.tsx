import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-[#0f172a] py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-lg font-bold uppercase text-[#55e6a5] mb-4 tracking-widest">
            About Me
          </h1>

          <div className="flex items-start md:space-x-6 mb-6">
            <span className="hidden md:block w-24 h-1 bg-[#55e6a5] rounded mt-3"></span>
            <p className="text-lg text-slate-300 leading-relaxed">
              I’m a specialized <span className="text-[#55e6a5] font-semibold">Next.js Web Developer</span> with a deep passion for crafting modern, high-performance web apps.
              <br /><br />
              I dedicate over <span className="text-[#55e6a5] font-semibold">90% of my daily time</span> to sharpening my skills, exploring new technologies, and expanding my full-stack potential.
              <br /><br />
              While front-end is my superpower, I also bring solid back-end skills in <span className="text-[#55e6a5] font-semibold">Node.js</span> & <span className="text-[#55e6a5] font-semibold">Express.js</span>, and currently I’m diving into <span className="text-[#55e6a5] font-semibold">Nest.js</span> to build scalable solutions.
              <br /><br />
              I thrive in collaborative teams, love solving real-world problems, and strive to build apps that are clean, fast, and maintainable.
            </p>
          </div>

          {/* CV BUTTON */}
          <a
            href="/images/Jora_cv.pdf"
            download
            className="inline-flex items-center space-x-3 bg-[#55e6a5] hover:bg-[#3bd88c] text-black font-semibold uppercase px-6 py-3 rounded-lg shadow-md transition-all duration-200"
          >
            <span>Download CV</span>
            <ArrowDownTrayIcon className="w-6 h-6" />
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[500px] mx-auto">
          <div className="absolute w-full h-full bg-[#55e6a5] top-6 right-6 rounded-xl z-0 shadow-xl"></div>
          <div className="relative w-full h-full z-10 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/Jor.jpg"
              alt="Jora Hovsepyan"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
