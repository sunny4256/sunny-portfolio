import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  // Function to get color based on technology name
  const getTextColor = (name) => {
    const colorMap = {
      "HTML 5": "#E34F26",
      "CSS 3": "#1572B6",
      JavaScript: "#F7DF1E",
      TypeScript: "#007ACC",
      "React JS": "#61DAFB",
      "Redux Toolkit": "#764ABC",
      "Tailwind CSS": "#06B6D4",
      "Node JS": "#339933",
      MongoDB: "#47A248",
      "Three JS": "#000000",
      git: "#F05032",
      figma: "#F24E1E",
      docker: "#2496ED",
    };
    return colorMap[name] || "#ffffff";
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          My Technical Skills
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          Technologies
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 group relative">
            {/* Hover tooltip - Now positioned above */}
            <div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                         pointer-events-none z-20"
            >
              <div className="bg-tertiary px-2 py-1 rounded-md shadow-lg">
                <p className="text-xs text-white text-center">
                  Click to rotate
                </p>
              </div>
              {/* Little arrow pointing down */}
              <div
                className="w-0 h-0 
                           border-l-[6px] border-l-transparent
                           border-t-[6px] border-t-tertiary
                           border-r-[6px] border-r-transparent
                           mx-auto"
              ></div>
            </div>

            {/* Ball */}
            <motion.div
              className="h-28 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <BallCanvas icon={technology.icon} />
            </motion.div>

            {/* Technology name */}
            <div className="text-center mt-4">
              <motion.p
                className="font-medium text-sm"
                style={{
                  color: getTextColor(technology.name),
                  textShadow: "0px 0px 8px rgba(0,0,0,0.3)",
                }}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {technology.name}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
