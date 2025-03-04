import React from "react";
import { AiFillGithub } from "react-icons/ai";
import {
  FaCode,
  FaCodepen,
  FaDev,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const IconLink = ({ children, link }) => {
  return (
    <a href={link} target="_blank" className=" ">
      <div
        className="hero-icons border-cardHover hover:bg-green-400 hover:text-white hover:-translate-y-[6px] 
    text-button bg-cardHover"
      >
        {children}
      </div>
    </a>
  );
};
//

const Footer = () => {
  return (
    <section className="">
      <div className="flex mb-8 items-center justify-center gap-6 flex-wrap">
        <IconLink link={"https://www.linkedin.com/in/adnansaim"}>
          <FaLinkedinIn size={36} />
        </IconLink>
        <IconLink link={"https://x.com/adnansdev"}>
          <FaXTwitter size={36} />
        </IconLink>
        <IconLink link={"https://github.com/shihabhq"}>
          <AiFillGithub size={36} />
        </IconLink>
        <IconLink link={"https://dev.to/shihabhaque"}>
          <FaDev size={36} />
        </IconLink>
        <IconLink link={"https://codepen.io/shihab-haque"}>
          <FaCodepen size={36} />
        </IconLink>
      </div>
      <div
        className="w-full h-[50px] flex items-center justify-center bg-black"
        id="footer"
      >
        <h1 className="text-center text-lg text-white font-Opensans font-light">
          Designed and Developed by{" "}
          <a
            href="https://www.linkedin.com/in/adnansaim"
            target="_blank"
            className="underline hover:text-button transition-all duration-200"
          >
            Shihab Haque
          </a>
        </h1>
      </div>
    </section>
  );
};

export default Footer;
