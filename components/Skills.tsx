"use client";

import React from "react";
import { motion } from "framer-motion";

interface EducationCardProps {
  logo: string;
  title: string;
  year: string;
  description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ logo, title, year, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-[#1a202c] border border-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
  >
    <div className="flex items-center gap-6">
      <img
        src={logo}
        alt={title}
        className="w-16 h-16 object-contain rounded-full border-2 border-gray-700"
      />
      <div>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{year}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

interface SkillBarProps {
  skill: string;
  level: number;
}

const getLabel = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Intermediate";
  return "Beginner";
};

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span className="text-white text-lg font-medium">{skill}</span>
      <span className="text-green-400 text-sm font-semibold">{getLabel(level)}</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-2">
      <div
        className="h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </motion.div>
);

const SkillCard: React.FC<{ skill: string }> = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="bg-[#1a202c] text-white px-4 py-3 rounded-xl shadow-lg border border-gray-700 text-sm sm:text-base transition-all duration-300"
  >
    {skill}
  </motion.div>
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-green-400 text-xl sm:text-2xl font-semibold mt-14 mb-6 text-left border-l-4 border-green-400 pl-3">
    {title}
  </h2>
);

const Skills: React.FC = () => {
  const frontEndSkills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux / Zustand / Context API",
    "RESTful APIs, Axios, Fetch",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "HTML & CSS",
    "GSAP",
    "Responsive Design",
    "Basic SEO Principles"
  ];

  const backEndSkills = [
    "Node.js",
    "Express.js",
    "DB-MySQL",
    "SQLite",
    "RESTful APIs",
    "JWT",
    "Passport.js",
    "Authentication & Authorization",
"     (OAuth,  Helmet)"

  ];

  const dataScienceSkills = [
    "SAS/BASE",
    "Statistical Programming",
    "Data Analysis",
    "PROC Procedures",
    "Macro Programming",
    "SQL",
    "R Programming"
  ];

  const otherSkills = [
    "Git / GitHub",
    "Linux / Shell",
    "Docker",
    "Postman",
    "Deployment",
    "CI/CD",
    "Jira / Trello",

    "Agile / Scrum",
  ];

  const softSkills = [
    "Problem Solving",
    "Leadership & Teamwork",
    "Time Management",
    "Communication",
    "Research & Learning",
    "Conflict Resolution",
    "Adaptability"
  ];

  return (
    <section className="bg-[#111b29] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Education
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <EducationCard
              logo="/images/42yer.png"
              title="42 Yerevan International school C Programming Language"
              year="2024 – 2025"
              description="Studied at 42 Yerevan school, gaining solid knowledge of the C programming language. Took part in large-scale team projects using Rush and Squad methodologies."
            />
            <EducationCard
              logo="/images/gtc.jpg"
              title="Gyumri Technologie Center BY (EIF) WEB Programming"
              year="2019 – 2022"
              description="I studied Web Development at the Gyumri Technology Center, focusing on JavaScript, TypeScript, React, Next.js, Node.js, Express.js, and MySQL database management."
            />
            <EducationCard
              logo="/images/gtc.jpg"
              title="Gyumri Technologie Center BY (EIF) Business Development & Sales"
              year="2023"
              description="I studied Business Development & Sales, specializing in this field. I also have practical work experience in the industry."
            />
            <EducationCard
              logo="/images/PADC.png"
              title="PADC LLC"
              year="2022"
              description="I was first introduced to programming at PADC LLC, where I studied the fundamentals of software development."
            />
          </div>
          <div className="space-y-8">
            <EducationCard
              logo="/images/gurus.jpg"
              title="Gurus LLC Clinical SAS BASE Programming"
              year="2025"
              description="Studied Clinical SAS BASE programming and data analytics at Gurus LLC, focusing on data manipulation, statistical analysis, and clinical research reporting."
            />
            <EducationCard
              logo="/images/gitc.jpg"
              title="Gyumri IT Tecnologie Center (GITC) Front-end development"
              year="2023"
              description="Studied at Gyumri IT Technology Center, specialized in web development and received certification as a React.js developer."
            />
            <EducationCard
              logo="/images/polytech.jpg"
              title="National Polytechnic University of Armenia Gyumri branch"
              year="2019 – 2022"
              description="Studied at the Gyumri branch of the National Polytechnic University of Armenia, 2019-2022"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Skills
        </h1>

        <SectionTitle title="Front-End Skills" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {frontEndSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        <SectionTitle title="Back-End & Tools" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {backEndSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        <SectionTitle title="Data Science & Analytics" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {dataScienceSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        <SectionTitle title="Other Skills" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {otherSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        <SectionTitle title="Soft Skills" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {softSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
