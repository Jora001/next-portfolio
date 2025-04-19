import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WorkItem {
  id: number;
  title: string;
  company: string;
  image: string;
  description: string;
}

const workData: WorkItem[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechMind Company Full-Time (Remote)",
    image: "/images/lum.avif.jpg",
    description:
      "I joined TechMind in June 2024 as a Front-End Developer specializing in React.js. Throughout my time here, I’ve shown strong professional growth by expanding my knowledge beyond the front end. I proactively learned back-end technologies such as Node.js and Express.js, and successfully contributed to backend tasks, which led to my transition into a Software Engineer role.In addition to development, I also took on a mentorship role, supporting team members as a Next.js mentor, helping them understand complex concepts and guiding them through project challenges.",
  },
  {
    id: 2,
    title: "Software Engineer & Team Lead",
    company: " DX Soft Agency(Full-Time 2024-2025)",
    image: "/images/dxsoft.png",
    description:
      "I worked at DX Soft Agency as a Software Engineer and Team Lead from October 2024 to March 2025. My primary tech stack included Node.js, Express.js, and Next.js. As a Team Lead, I managed a team of 7 specialists, collaborating on diverse full-stack projects and ensuring seamless coordination throughout the development cycle. Alongside my development duties, I also conducted Front-End Development training, mentoring aspiring developers and supporting their growth.",
  },
  {
    id: 3,
    title: "Next.js Developer",
    company: "UFreeSoft Agency (contract)",
    image: "/images/ufreesoft_logo.jpg",
    description:
      "I worked at UFreeSoft Agency as a Software Developer on a project in the crypto sector, specifically focused on a real estate website. I was involved in both Backend and Frontend file development. Over a span of 3 months, I collaborated in a team environment, focusing on API creation and integration, as well as improving user interfaces and user experience design",
  },
  {
    id: 4,
    title: "Front-End Developer Intern",
    company: "GTC-Intership",
    image: "/images/gtc.jpg",
    description:
      "Front-End Developer Intern | GTC (January 2024 – March 2024)I completed a Front-End Development Internship at GTC from January to March 2024. During this period, I worked as part of a collaborative team on the well-known Black-Box website project. Together, we successfully brought the project to completion, focusing on delivering a high-quality, responsive, and user-friendly web experience.",
  },
];

const Work = () => {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  return (
    <div
      id="services"
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
    >
      <p className="heading text-white text-center text-3xl md:text-4xl font-bold">
        Work <span className="text-green-400">Experience</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[85%] mx-auto items-start gap-[2rem] mt-[4rem] text-white">
        {workData.map((work) => (
          <div
            key={work.id}
            className="bg-[#1e1e1e] p-6 rounded-2xl shadow-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-500 ease-out relative"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-[7rem] h-[7rem] object-cover mx-auto rounded-full border-4 border-blue-500 shadow-md hover:scale-110 transition-all duration-300"
            />
            <h1 className="text-[22px] font-semibold text-center mt-4">
              {work.title}
            </h1>
            <h2 className="text-[14px] text-blue-400 text-center mb-4">
              {work.company}
            </h2>
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedWork(work)}
                className="mt-2 text-[13px] bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-200"
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1e1e1e] p-8 rounded-3xl max-w-xl text-white relative shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 text-white text-xl hover:text-blue-400"
              >
                &times;
              </button>
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-[8rem] h-[8rem] mx-auto rounded-full border-4 border-blue-500 mb-4 shadow-md"
              />
              <h2 className="text-center text-2xl font-bold mb-2">
                {selectedWork.title}
              </h2>
              <p className="text-center text-blue-400 mb-4">
                {selectedWork.company}
              </p>
              <p className="text-[15px] text-gray-200 leading-6 text-justify">
                {selectedWork.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
