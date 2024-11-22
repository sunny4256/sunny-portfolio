import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

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
      "Three JS": "#2496ED",
      git: "#F05032",
      figma: "#F24E1E",
      docker: "#2496ED",
    };
    return colorMap[name] || "#ffffff";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-5 pb-10">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Technical Skills
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          Technologies
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-10 px-4 max-w-7xl mx-auto"
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            className="flex flex-col items-center justify-center group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Hover tooltip */}
            <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
              <div className="bg-tertiary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-xl">
                <p className="text-xs text-white text-center whitespace-nowrap">
                  Click to rotate
                </p>
              </div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-tertiary/90 border-r-[6px] border-r-transparent mx-auto" />
            </div>

            {/* Ball Canvas */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
              <motion.div
                className="w-full h-full cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <BallCanvas icon={technology.icon} />
              </motion.div>
            </div>

            {/* Technology name */}
            <motion.p
              className="mt-4 text-sm font-medium text-center"
              style={{
                color: getTextColor(technology.name),
                textShadow: "0px 0px 8px rgba(0,0,0,0.3)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {technology.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
