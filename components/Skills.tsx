import React from "react";
import SkilsItme from "./SkilsItme";
import SkilsLanguage from "./SkilsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-blue-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItme
            title="Software development"
            year="2024-2024"
            description="I self-taught Next.js, Node.js, and Express.js for dynamic web applications."
          />
          <SkilsItme
            title="Business Development & Sales"
            year="2023-2023"
            description="In 2023, I studied the business development and sales course of Gyumri Technology Center by IDF."
          />
          <SkilsLanguage
            skill1="HTML"
            skill2="CSS"
            skill3="JavaScript"
            level1="w-[95%]"
            level2="w-[95%]"
            level3="w-[92%]"
          />
          <SkilsLanguage
            skill1="React.js"
            skill2="TypeScript"
            skill3="MySQL Database"
            level1="w-[85%]"
            level2="w-[83%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkilsItme
            title="Front-end web development"
            year="2022-2023"
            description="I studied web development course focused on React.js at Gyumri IT Technology Center"
          />
          <SkilsItme
            title="National Polytechnic University "
            year="2019-2022"
            description="Studied at the National Polytechnic University of Armenia Gyumri branch (2019-2022)"
          />
          <SkilsLanguage
            skill1="Next.js"
            skill2="Node.js"
            skill3="Express.js"
            level1="w-[81%]"
            level2="w-[80%]"
            level3="w-[86%]"
          />
          <SkilsLanguage
            skill1="Git/GitHub"
            skill2="Statistical Analysis"
            skill3="Linux"
            level1="w-[96%]"
            level2="w-[70%]"
            level3="w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
