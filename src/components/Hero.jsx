import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-[url('/herobg.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f]/90 via-[#0a0a1f]/80 to-transparent" />

      <div
        className={`relative inset-0 ${styles.paddingX} max-w-7xl mx-auto flex flex-col h-full`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between mt-20 lg:mt-32 gap-10">
          <div className="flex-1 flex flex-col z-10">
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-white" />
                <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-transparent" />
              </div>

              <div className="w-full">
                <h1 className="text-[32px] sm:text-[40px] lg:text-[60px] font-black text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="text-white inline-block hover:scale-105 transition-transform">
                    Sunny
                  </span>
                </h1>

                <div className="flex flex-col lg:flex-row items-start gap-8 mt-5">
                  {/* Profile Image - Responsive sizes */}
                  <div className="relative group w-48 sm:w-56 lg:w-64 aspect-square mx-auto lg:mx-0">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-white/50 to-white/30 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                    <img
                      src="/profile.png"
                      alt="Sunny Gandham"
                      className="relative w-full h-full rounded-full object-cover border-4 border-white/30"
                    />
                  </div>

                  <div className="flex flex-col gap-4 lg:w-[60%] text-center lg:text-left">
                    <p className="text-[16px] sm:text-[18px] text-white-100 leading-relaxed">
                      A passionate Full-Stack Developer and Web3 enthusiast
                      crafting modern digital experiences with cutting-edge
                      technologies.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-2">
                      {["Full-Stack", "Cloud Architecture", "DevOps"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>

                    <div className="flex justify-center lg:justify-start gap-4 mt-4">
                      <a
                        href="https://github.com/sunny4256"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/sunny-gandham-069b692a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Computer - Responsive height */}
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] lg:flex-1">
            <ComputersCanvas />
          </div>
        </div>

        {/* Info Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 px-4">
          {[
            {
              title: "Full-Stack Expertise",
              desc: "Building scalable applications with modern frameworks and cloud-native technologies",
            },
            {
              title: "Frontend & Backend Integration",
              desc: "Crafting seamless user experiences and efficient server-side functionality",
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
              className="p-4 sm:p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
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
