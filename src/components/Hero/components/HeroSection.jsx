import circle from "../assets/circle.svg";
import block from "../assets/block.svg";
import cross from "../assets/cross.svg";
import thunder from "../assets/thunder.svg";
import layers from "../assets/layers.svg";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ContactDiv from "./ContactDiv";
import { motion } from "motion/react";

import AnimateComponent from "../../../shared/Animation";

const HeroSection = () => {
  const [openContactDiv, setOpenContactDiv] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const x = (e.clientX * 100) / window.innerWidth + "%";
    const y = (e.clientY * 100) / window.innerHeight + "%";

    setPosition({ x, y });
  };

  const hideContactDiv = () => {
    setOpenContactDiv(false);
  };

  return (
    <section
      className="hero w-full h-[90vh] relative min-h-[560px]"
      id="home"
      onMouseMove={handleMouseMove}
    >
      <div className="hidden mdl:block">
        <div className="w-28 h-28 absolute left-5">
          <img
            src={circle}
            className="absolute circle w-12"
            alt=""
            style={{
              left: position.x,
              top: position.y,
            }}
          />
        </div>
        <div className="w-32 h-40 absolute top-20 right-20">
          <img
            src={cross}
            className="absolute cross w-10 overflow-hidden"
            alt=""
            style={{
              left: position.x,
              top: position.y,
            }}
          />
        </div>
        <div className="w-24 h-32 absolute bottom-20 left-40">
          <img
            src={thunder}
            className="absolute transition-all duration-150 thunder w-10 overflow-hidden"
            alt=""
            style={{
              left: position.x,
              top: position.y,
            }}
          />
        </div>
        <div className="w-24 h-32 absolute bottom-24 right-[45%]">
          <img
            src={block}
            className="absolute chain w-10 overflow-hidden"
            alt=""
            style={{
              left: position.x,
              top: position.y,
            }}
          />
        </div>
        <div className="w-24 h-32 absolute top-24 right-[45%]">
          <img
            src={layers}
            className="absolute layer transition-all duration-75 w-10 overflow-hidden"
            alt=""
            style={{
              left: position.x,
              top: position.y,
            }}
          />
        </div>
      </div>

      <div className="w-[92%] xl:w-4/5 mx-auto container flex flex-col mdl:flex-row items-center h-full mdl:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className="font-sans w-full mdl:w-fit text-center my-16 mdl:my-0 text-4xl space-y-5
        mdl:text-left animate__animated animate__fadeInLeft"
          >
            <p>Hi there!</p>
            <h1 className="font-Poppins font-semibold text-5xl xl:text-7xl text-white">
              I&apos;m Shihab
            </h1>
            <h2 className="text-white text-3xl xl:text-4xl">
              I am a{" "}
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  3000,
                  "React Developer",
                  3000,
                  "Tech Writer",
                  3000,
                ]}
                speed={10}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-button"
              />{" "}
              <span className="auto-text text-button"></span>
            </h2>
            <div className="font-Poppins text-2xl">
              <button
                onClick={() => setOpenContactDiv(true)}
                className="hero-button cursor-pointer hover:bg-green-400 hover:-translate-y-2"
              >
                Contact me
              </button>
            </div>
            <div className="space-x-6 flex items-center justify-center mdl:justify-start">
              <a href="https://www.linkedin.com/in/adnansaim" target="_blank">
                <div className="hero-icons border-white hover:border-[#0072b1] hover:-translate-y-[6px] hover:bg-[#0072b1]">
                  <FaLinkedinIn size={36} className="" />
                </div>
              </a>
              <a href="https://x.com/adnansdev" target="_blank" className="">
                <div className="hero-icons border-white hover:border-[#000] hover:-translate-y-[6px] hover:bg-[#000]">
                  <FaXTwitter size={36} />
                </div>
              </a>

              <a
                href="https://github.com/shihabhq"
                target="_blank"
                className=""
              >
                <div className="hero-icons border-white  hover:border-[#171515] hover:-translate-y-1 hover:bg-[#171515]">
                  <AiFillGithub size={36} />
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/deyzzky20/image/upload/v1738999074/portfolio/mi99sbu6mxfaloc6gakd.svg"
            className="w-[600px] floating-image "
            alt=""
          />
        </motion.div>
      </div>
      {openContactDiv && <ContactDiv hideContactDiv={hideContactDiv} />}
    </section>
  );
};

export default HeroSection;
