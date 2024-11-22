import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
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
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:shadow-xl transition-all duration-300"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain transform hover:scale-110 transition-transform duration-300"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1
          className={`${styles.sectionSubText}  text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500`}
        >
          Introduction
        </h1>
        <h2
          className={`${styles.sectionHeadText} text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300`}
        >
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-[18px] max-w-3xl leading-[32px] mx-auto text-white-100 font-sans
                   px-4 py-2 rounded-lg backdrop-blur-sm bg-opacity-10 bg-white/10
                   shadow-xl border border-opacity-20 border-white
                   tracking-wide letter-spacing-wide"
        style={{
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          lineHeight: "1.8",
        }}
      >
        As a{" "}
        <span className="text-purple-400 font-semibold">
          Full Stack Developer
        </span>{" "}
        with a
        <span className="text-cyan-400 font-semibold">
          {" "}
          Master's in Information Technology
        </span>
        , I blend technical expertise with innovative problem-solving. My
        experience at
        <span className="text-green-400 font-semibold"> Cognizant</span> has
        honed my skills in crafting scalable web solutions using cutting-edge
        technologies.
        <br />
        <br />I specialize in building responsive applications with
        <span className="text-yellow-400 font-semibold"> React</span> and
        <span className="text-blue-400 font-semibold"> Next.js</span>, powered
        by cloud infrastructure like{" "}
        <span className="text-orange-400 font-semibold">AWS</span> and
        <span className="text-blue-300 font-semibold"> Azure</span>. My approach
        combines clean code architecture with user-centered design principles to
        deliver exceptional digital experiences.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
