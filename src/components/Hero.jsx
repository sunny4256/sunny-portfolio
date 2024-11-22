import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-[url('/herobg.png')] bg-cover bg-no-repeat">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f]/90 via-[#0a0a1f]/80 to-transparent" />

      {/* Main Content */}
      <div
        className={`relative inset-0 ${styles.paddingX} max-w-7xl mx-auto flex flex-col h-full`}
      >
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-20 gap-10">
          {/* Left Content */}
          <div className="flex-1 flex flex-col z-10">
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-white" />
                <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-transparent" />
              </div>

              <div className="w-full">
                <h1 className="text-[40px] font-black text-white xs:text-[50px] sm:text-[60px] leading-tight">
                  Hi, I'm{" "}
                  <span className="text-white inline-block hover:scale-105 transition-transform">
                    Sunny
                  </span>
                </h1>

                {/* Profile and Description - Updated layout and image size */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mt-5">
                  {/* Profile Image Container - Increased size */}
                  <div className="relative group w-full lg:w-[35%] aspect-square">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-white/50 to-white/30 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                    <img
                      src="/profile.png"
                      alt="Sunny Gandham"
                      className="relative w-full h-full rounded-full object-cover border-4 border-white/30"
                    />
                  </div>

                  {/* Content Section - Adjusted to accommodate larger image */}
                  <div className="flex flex-col gap-4 lg:w-[60%]">
                    <p className="text-[18px] text-white-100 leading-relaxed">
                      A passionate Full-Stack Developer and Web3 enthusiast
                      crafting modern digital experiences with cutting-edge
                      technologies.
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        "Full-Stack",
                        "Web3",
                        "Cloud Architecture",
                        "DevOps",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-4">
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <FaLinkedin size={24} />
                      </a>
                      <a
                        href="https://leetcode.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <SiLeetcode size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Computer */}
          <div className="flex-1 w-full h-[400px] lg:h-[500px] ml-auto">
            <ComputersCanvas />
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Full-Stack Expertise",
              desc: "Building scalable applications with modern frameworks and cloud-native technologies",
            },
            {
              title: "Web3 Innovation",
              desc: "Exploring blockchain technology and smart contract development",
            },
            {
              title: "DevOps Excellence",
              desc: "Implementing robust CI/CD pipelines and cloud infrastructure",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <h3 className="text-white font-semibold text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[28px] h-[50px] rounded-2xl border-3 border-white/30 flex justify-center items-start p-1.5">
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
