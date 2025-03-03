import { img } from "motion/react-client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ProjectCard = ({ project, idx, progress, targetScale, range }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="w-[80%]
       mx-auto top-0
       sticky max-w-[960px] h-[80vh] flex items-center justify-center"
    >
      <motion.div
        className="rounded-3xl p-[1px] bg-gradient-to-b  from-blue-500 to-green-500"
        style={{
          scale,
          top: `calc(10% + ${idx * 25}px)`,
          position: "relative",
        }}
      >
        <div className="bg-card max-h-[80vh] rounded-[calc(1.5rem-1px)]  shadow-sm overflow-hidden flex flex-col mdl:flex-row">
          <div
            className="w-full mdl:w-1/2 overflow-hidden transition-all "
            onClick={() => window.open(project.link, "_blank")}
          >
            <motion.img
              style={{ scale: imageScale }}
              src={project.image}
              alt="Album"
              className="w-full max-h-[320px] mdl:max-h-[560px] mdl:min-h-[560px]
          object-top h-full object-cover transition-all
           hover:scale-105 cursor-pointer overflow-hidden hover:opacity-80"
            />
          </div>

          <div className="w-full mdl:w-1/2 py-6 px-8 flex flex-col gap-4 justify-start">
            <h2 className="font-Poppins text-4xl font-semibold text-button mb-2 h-fit mdl:text-2xl xl:text-4xl">
              {project.title}
            </h2>
            <p className="text-base font-medium text-justify ">
              {project.text}
            </p>
            <p className="text-base mdl:text-base font-medium">
              This project was built with,
            </p>
            <div className="grid grid-cols-8 gap-2 justify-items-center ">
              {project.stacks.map((stack) => {
                return <img src={stack} className="my-auto" key={stack} />;
              })}
            </div>
            <div className="flex-grow flex items-end gap-8">
              <a
                className="portfolio-button  mdl:text-lg"
                href={`projects/${project.case}`}
                target="_blank"
              >
                Case Study
              </a>
              <a
                className="hidden sm:inline-block portfolio-button mdl:text-lg"
                href={`${project.link}`}
                target="_blank"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
