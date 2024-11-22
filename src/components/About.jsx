import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[200px] w-[85%] sm:w-[180px] md:w-[200px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-3 px-5 sm:px-6 min-h-[180px] sm:min-h-[220px] 
                   flex justify-evenly items-center flex-col hover:shadow-xl transition-all duration-300"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-11 h-11 sm:w-12 sm:h-12 object-contain transform hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-white text-[15px] sm:text-[17px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative z-0 w-full overflow-hidden">
      <motion.div variants={textVariant()} className="w-full px-4">
        <h1
          className={`${styles.sectionSubText} text-center pt-10 bg-clip-text text-transparent 
                      bg-gradient-to-r from-purple-500 to-cyan-500 mb-2`}
        >
          Introduction
        </h1>
        <h2
          className={`${styles.sectionHeadText} text-center bg-clip-text text-transparent 
                      bg-gradient-to-r from-purple-300 to-cyan-300`}
        >
          Overview
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 sm:mt-10 text-[16px] sm:text-[20px] max-w-5xl mx-auto 
                   text-white-100 font-sans px-4 sm:px-8 py-6 rounded-lg 
                   backdrop-blur-sm bg-white/5 shadow-xl border border-white/10 
                   tracking-wide leading-relaxed m-4"
      >
        <p className="mb-4 sm:mb-6">
          Senior Full Stack Developer with{" "}
          <span className="text-purple-400 font-semibold">
            4.5 years of hands-on experience
          </span>
          , currently advancing my expertise through an MS in Information
          Technology at the University of Central Missouri. My professional
          journey includes impactful contributions at{" "}
          <span className="text-green-400 font-semibold">Cognizant</span>, where
          I spearheaded the development of enterprise-scale web applications and
          collaborated with diverse, cross-functional teams.
        </p>

        <p className="mb-4 sm:mb-6 text-[15px] sm:text-[20px]">
          My technical arsenal includes modern web development with{" "}
          <span className="text-cyan-400 font-semibold">React</span> and
          <span className="text-blue-400 font-semibold"> Next.js</span>, coupled
          with robust backend solutions using
          <span className="text-yellow-400 font-semibold">
            {" "}
            Firebase
          </span> and{" "}
          <span className="text-green-400 font-semibold">Node.js</span>. I've
          architected solutions on{" "}
          <span className="text-orange-400 font-semibold">AWS</span> and
          <span className="text-blue-300 font-semibold"> Azure</span>, ensuring
          scalable and resilient applications.
        </p>

        <p className="text-[15px] sm:text-[20px]">
          Notable achievements include developing an{" "}
          <span className="text-pink-400 font-semibold">
            Electronic Retail Platform
          </span>{" "}
          with seamless payment integration and a comprehensive{" "}
          <span className="text-purple-400 font-semibold">
            Gym Management System
          </span>
          . I'm passionate about{" "}
          <span className="text-yellow-400 font-semibold">
            DevOps practices
          </span>
          , implementing CI/CD pipelines, and leveraging{" "}
          <span className="text-blue-400 font-semibold">containerization</span>{" "}
          for efficient deployment.
        </p>
      </motion.div>

      <div className="mt-10 sm:mt-16 flex flex-wrap gap-6 sm:gap-8 justify-center items-center px-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
