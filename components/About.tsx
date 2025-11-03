"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // յուրաքանչյուր child 0.3վրկ տարբերությամբ է հայտնվում
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="bg-[#0f172a] py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* LEFT */}
        <motion.div variants={itemVariants}>
          <h1 className="text-lg font-bold uppercase text-[#55e6a5] mb-4 tracking-widest">
            About Me
          </h1>

          <div className="flex items-start md:space-x-6 mb-6">
            <span className="hidden md:block w-24 h-1 bg-[#55e6a5] rounded mt-3"></span>
            <motion.div variants={containerVariants}>
              <motion.p variants={itemVariants} className="text-lg text-slate-300 leading-relaxed mb-4">
                I’m a specialized <span className="text-[#55e6a5] font-semibold">Next.js Web Developer</span> with a deep passion for crafting modern, high-performance web apps.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-slate-300 leading-relaxed mb-4">
                I dedicate over <span className="text-[#55e6a5] font-semibold">90% of my daily time</span> to sharpening my skills, exploring new technologies, and expanding my full-stack potential.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-slate-300 leading-relaxed mb-4">
                While front-end is my superpower, I also bring solid back-end skills in <span className="text-[#55e6a5] font-semibold">Node.js</span> & <span className="text-[#55e6a5] font-semibold">Express.js</span>, and currently I’m diving into <span className="text-[#55e6a5] font-semibold">Nest.js</span> to build scalable solutions.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-slate-300 leading-relaxed">
                I thrive in collaborative teams, love solving real-world problems, and strive to build apps that are clean, fast, and maintainable.
              </motion.p>
            </motion.div>
          </div>

          {/* CV BUTTON */}
          <motion.a
            href="/images/Jora_cv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-[#55e6a5] hover:bg-[#3bd88c] text-black font-semibold uppercase px-6 py-3 rounded-lg shadow-md transition-all duration-200"
          >
            <span>Download CV</span>
            <ArrowDownTrayIcon className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[500px] mx-auto"
        >
          <div className="absolute w-full h-full bg-[#55e6a5] top-6 right-6 rounded-xl z-0 shadow-xl"></div>
          <div className="relative w-full h-full z-10 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/photo_2025-11-03_13-12-04.jpg"
              alt="Jora Hovsepyan"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
