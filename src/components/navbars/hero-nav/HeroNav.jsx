import React from "react";
import HeroNavBtn from "./HeroNavBtn";

const HeroNav = () => {
  return (
    <nav className="flex w-[93%] xl:w-4/5 mx-auto h-28 justify-between items-center animate__animated animate__fadeIn">
      <div
        className="font-sans text-4xl cursor-pointer font-extrabold"
        onClick={() => (window.location.href = "#")}
      >
        Shihabhaque<span className="text-button">.</span>
      </div>
      <div className="font-sans text-xl hidden mdl:block">
        <HeroNavBtn href={"about"} text={"About"} />
        <HeroNavBtn href={"skills"} text={"Skills"} />
        <HeroNavBtn href={"blog"} text={"Blogs"} />
        <HeroNavBtn href={"projects"} text={"Projects"} />
        <a
          href="/shihab-cv.pdf"
          download
          className="nav-button bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-50 hover:text-background cursor-pointer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default HeroNav;
