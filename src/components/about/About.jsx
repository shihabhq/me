import { LuDownload } from "react-icons/lu";
import SectionHeading from "../../shared/SectionHeading";
import AnimateComponent from "../../shared/Animation";
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="pt-16 md:pt-24 lg:pt-32 max-w-7xl mx-auto" id="about">
      <SectionHeading text={"About Myself"} />
      <div
        className="flex flex-col items-center 2xl:gap-0 gap-6 mdl:flex-row 
         justify-center
      w-[95%] mx-auto"
      >
        <div className=" w-2/4 animate__animated animate__fadeInUp">
          <motion.img
            src="https://res.cloudinary.com/deyzzky20/image/upload/v1740649700/portfolio/zdjqtvckmbhkc0dtsful.jpg"
            className="w-[450px] 2xl:w-[80%] rounded-full mx-auto"
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
        <div
          className="space-y-4 font-Opensans text-center max-w-xl mdl:text-left
        w-full"
        >
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold font-Opensans lg:leading-10">
              I am a{" "}
              <span className="text-button">
                Frontend Developer <span className="text-white">&</span> I bring
                Ideas to Life with Code
              </span>
            </h2>
          </div>
          <div>
            <p className=" text-base lg:text-lg font-normal lg:leading-8">
              I am a self-taught web developer specializing in React and MERN
              stack technologies. I am passionate about creating interactive web
              applications and UIs with detail and thorough understanding.
            </p>
          </div>
          <div>
            <p className="text-base lg:text-lg font-normal lg:leading-8">
              I enjoy turning creative ideas into functional and beautiful web
              applications. I am constantly learning new things and trying to
              make a good impact in the world with my code.
            </p>
          </div>
          <AnimateComponent>
            <button
              className="w-56 cursor-pointer cv-button 
          overflow-hidden relative font-Opensans h-16 focus:ring-2 
          ring-button border border-button text-lg"
            >
              <div
                className="bottom-0 slide transition-right duration-500 
            -right-full w-full h-full bg-button absolute"
              ></div>
              <a
                href="/Resume_of_Shihab.pdf"
                download="Resume_of_Shihab.pdf"
                className="relative mr-8 text-xl font-semibold transition-all"
              >
                Get My Resume
              </a>
              <span className="fa-solid fa-download absolute right-4 px-2 py-2 bottom-1/2 rounded-full">
                <LuDownload size={20} />
              </span>
            </button>
          </AnimateComponent>
        </div>
      </div>
    </section>
  );
};

export default About;
