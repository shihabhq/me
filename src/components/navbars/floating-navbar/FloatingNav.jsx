import { useEffect, useState } from "react";
import FloatingNavBtn from "./FloatingNavBtn";

const FloatingNav = () => {
  const [didScrolled, setDidScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setDidScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ transform: "translate(-50%)" }}
      className={`animated-nav hidden mdl:flex fixed inset-x-1/2 uppercase nav-down
      z-50 transition-all duration-300 bg-[rgba(0,0,0,.8)] px-16 rounded-full
       items-center text-white w-fit text-lg h-[72px] ${
         didScrolled ? "nav-down" : "nav-up"
       }`}
    >
      <FloatingNavBtn href="#" text="Home" />
      <FloatingNavBtn href="#about" text="About" />
      <FloatingNavBtn href="#projects" text="Projects" />
      <FloatingNavBtn href="#skills" text="Skills" />
      <FloatingNavBtn href="#writings" text="writings" />
      <a
        href="/Resume_of_Shihab.pdf"
        download="Resume_of_Shihab.pdf"
        className="anav-button hover:-translate-y-0 bg-gradient-to-r from-green-400 to-blue-500 capitalize hover:opacity-50 hover:text-background"
      >
        Resume
      </a>
    </nav>
  );
};

export default FloatingNav;
