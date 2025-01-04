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
             backdrop-blur-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black 
             shadow-2xl border border-gray-700 tracking-wide leading-relaxed m-4"
      >
        <p className="mb-4 sm:mb-6">
          As a{" "}
          <span className="text-purple-400 font-bold">
            Full-Stack Developer
          </span>
          with over{" "}
          <span className="text-yellow-400 font-semibold">
            4 years of hands-on expertise
          </span>
          , I specialize in creating robust, scalable, and high-performance web
          applications. Currently advancing my technical repertoire while
          pursuing an
          <span className="text-cyan-400 font-semibold">
            {" "}
            MS in Information Technology
          </span>
          at the University of Central Missouri, I am passionate about
          integrating modern technologies to drive innovation and efficiency.
        </p>

        <p className="mb-4 sm:mb-6">
          My professional journey includes impactful roles at
          <span className="text-green-400 font-semibold">
            {" "}
            JPMorgan Chase
          </span>{" "}
          and
          <span className="text-green-400 font-semibold"> Cognizant</span>,
          where I led the development of enterprise-grade web solutions,
          designed cloud-native architectures, and collaborated with diverse,
          cross-functional teams in Agile environments. My skill set spans from
          <span className="text-cyan-400 font-semibold"> React.js</span>,
          <span className="text-blue-400 font-semibold"> Angular</span>, and
          <span className="text-yellow-400 font-semibold"> Node.js</span> on the
          front end to robust backend frameworks like{" "}
          <span className="text-purple-400 font-semibold">Spring Boot</span>
          and <span className="text-yellow-400 font-semibold">Django</span>.
        </p>

        <p className="mb-4 sm:mb-6">
          My technical arsenal includes architecting solutions on
          <span className="text-orange-400 font-semibold"> AWS</span>,
          <span className="text-blue-300 font-semibold"> Azure</span>, and
          implementing
          <span className="text-yellow-400 font-semibold">
            {" "}
            DevOps best practices
          </span>{" "}
          such as CI/CD pipelines, containerization with{" "}
          <span className="text-cyan-400 font-semibold"> Docker</span>, and
          orchestration using
          <span className="text-blue-400 font-semibold"> Kubernetes</span>. I've
          integrated cutting-edge
          <span className="text-purple-400 font-semibold">
            {" "}
            AI-driven technologies
          </span>{" "}
          to enhance functionality and deliver seamless user experiences.
        </p>

        <p>
          Notable achievements include developing an
          <span className="text-pink-400 font-semibold">
            {" "}
            Electronic Retail Platform
          </span>
          with secure payment systems, a feature-rich
          <span className="text-purple-400 font-semibold">
            {" "}
            Gym Management System
          </span>
          , and real-time{" "}
          <span className="text-yellow-400 font-semibold">
            fraud detection models
          </span>{" "}
          using <span className="text-cyan-400 font-semibold">TensorFlow</span>.
          I thrive on solving complex challenges, mentoring teams, and pushing
          the boundaries of innovation to deliver impactful results.
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
