import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { FiMail } from "react-icons/fi";

const NavButton = ({ text, href, variant = "default" }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`
      flex items-center gap-2 px-5 py-2.5 rounded-xl
      backdrop-blur-sm transition-all duration-300
      border border-white/10 hover:border-white/20
      ${
        variant === "hire"
          ? "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400"
          : "bg-tertiary hover:bg-white/10 text-white"
      }
      shadow-lg hover:shadow-xl`}
  >
    <span className="font-medium">{text}</span>
  </motion.a>
);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 
        transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-xl rotate-12 group-hover:rotate-0 transition-all duration-300 shadow-lg">
            <span className="text-primary text-2xl font-bold -rotate-12 group-hover:rotate-0 transition-all duration-300">
              S
            </span>
          </div>
          <div>
            <h1 className="text-white text-[18px] font-bold">Sunny Gandham</h1>
            <p className="text-white/70 text-sm">Full-Stack Developer</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex gap-3 mr-4">
            <NavButton text="About" href="#about" />
            <NavButton text="Skills" href="#tech" />
            <NavButton text="Experience" href="#experience" />
            <NavButton text="Projects" href="#projects" />
            <NavButton text="Contact" href="#contact" />
          </div>
          <NavButton
            text="Hire Me"
            href="mailto:sunnygoud4256@gmail.com"
            variant="hire"
          />
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <button onClick={() => setToggle(!toggle)} className="text-white p-2">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transform transition-all ${
                  toggle ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all ${
                  toggle ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transform transition-all ${
                  toggle ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          {toggle && (
            <div className="absolute top-20 right-0 mx-4 my-2 p-6 bg-primary/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
              <div className="flex flex-col gap-4">
                <NavButton text="About" href="#about" />
                <NavButton text="Skills" href="#tech" />
                <NavButton text="Experience" href="#experience" />
                <NavButton text="Projects" href="#projects" />
                <NavButton text="Contact" href="#contact" />
                <NavButton
                  text="Hire Me"
                  href="mailto:sunnygoud4256@gmail.com"
                  variant="hire"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
