import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { FiMail } from "react-icons/fi";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a1f]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Custom S Logo */}
          <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white to-white/50 rounded-lg transform rotate-12 group-hover:rotate-0 transition-all duration-300 shadow-lg">
            <span className="text-[#0a0a1f] text-2xl font-bold transform -rotate-12 group-hover:rotate-0 transition-all duration-300">
              S
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg blur-sm"></div>
          </div>

          <div className="flex flex-col">
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Sunny Gandham
            </p>
            <span className="text-white/70 text-sm">Full-Stack Developer</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="list-none flex gap-8">
            {navLinks.map((nav) => (
              <motion.li
                key={nav.id}
                whileHover={{ y: -2 }}
                className={`relative`}
              >
                <a
                  href={`#${nav.id}`}
                  className={`${
                    active === nav.title ? "text-white" : "text-white/70"
                  } hover:text-white text-[16px] font-medium cursor-pointer transition-colors`}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                  {active === nav.title && (
                    <motion.div
                      className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-white rounded-full"
                      layoutId="underline"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Hire Me Button */}
          <motion.a
            href="mailto:sunnygoud4256@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 border border-white/10 backdrop-blur-sm transition-all"
          >
            <FiMail className="text-white" />
            <span className="text-white font-medium">Hire Me</span>
          </motion.a>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setToggle(!toggle)}
            className="text-white p-2"
          >
            <div className={`w-6 h-5 relative flex flex-col justify-between`}>
              <motion.span
                animate={toggle ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white rounded-full origin-left transition-all"
              />
              <motion.span
                animate={toggle ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white rounded-full transition-all"
              />
              <motion.span
                animate={toggle ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white rounded-full origin-left transition-all"
              />
            </div>
          </motion.button>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={toggle ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-0 mx-4 my-2 p-6 bg-[#0a0a1f]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  whileHover={{ x: 4 }}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-white/70"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.li>
              ))}
              <motion.li whileHover={{ x: 4 }}>
                <a
                  href="mailto:sunnygoud4256@gmail.com"
                  className="flex items-center gap-2 text-white"
                >
                  <FiMail />
                  <span>Hire Me</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
