import React from "react";
import { HeroNavBtn } from "./HeroNavBtn";
import { motion } from "motion/react";

const HeroNav = () => {
  return (
    <nav className="flex w-[93%] xl:w-4/5 mx-auto h-28 justify-between items-center animate__animated animate__fadeIn">
      <motion.div
        className="font-sans text-4xl cursor-pointer font-extrabold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onClick={() => (window.location.href = "#")}
      >
        Shihabhaque<span className="text-button">.</span>
      </motion.div>
      <div className="font-sans text-xl hidden mdl:block">
        <HeroNavBtn href={"about"} text={"About"} idx={1} />
        <HeroNavBtn href={"projects"} text={"Projects"} idx={2} />
        <HeroNavBtn href={"skills"} text={"Skills"} idx={3} />
        <HeroNavBtn href={"writings"} text={"writings"} idx={4} />
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="/public/Resume_of_Shihab.pdf"
               download="Resume_of_Shihab.pdf"
          className="nav-button bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-50 hover:text-background cursor-pointer"
        >
          Resume
        </motion.a>
      </div>
    </nav>
  );
};

export default HeroNav;
