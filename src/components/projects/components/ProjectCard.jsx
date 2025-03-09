import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";

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
      className="w-[90%] z-40 mx-auto top-0 sticky max-w-[960px] min-h-[60vh] md:h-[80vh] flex items-center justify-center pointer-events-none"
    >
      <motion.div
        className="rounded-3xl z-50 p-[1px] bg-gradient-to-b from-blue-500 to-green-500 w-full pointer-events-auto"
        style={{
          scale,
          top: `calc(5% + ${idx * 25}px)`,
          position: "relative",
        }}
      >
        <div className="bg-card rounded-[calc(1.5rem-1px)] shadow-sm overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <div
            className="w-full md:w-1/2 bg-white overflow-hidden transition-all"
            onClick={() => window.open(project.link, "_blank")}
          >
            <motion.img
              style={{ scale: imageScale }}
              src={project.image}
              alt="Project"
              className="w-full h-auto max-h-[250px] md:max-h-[560px] object-cover
              object-top transition-all hover:scale-105 cursor-pointer hover:opacity-80"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col gap-4">
            <h2
              className="font-Poppins cursor-pointer text-3xl md:text-4xl font-semibold text-button"
              onClick={() => window.open(project.link, "_blank")}
            >
              {project.title}
            </h2>
            <p className="text-sm md:text-base text-justify">{project.text}</p>
            <p className="text-sm md:inline hidden md:text-base font-medium">
              This project was built with:
            </p>

            <div className="hidden grid-cols-4 md:grid md:grid-cols-8 gap-2 justify-items-center">
              {project.stacks.map((stack, index) => (
                <img
                  src={stack.image}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  key={index}
                  alt={stack.text}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex-grow flex items-end gap-4">
              <Link
                to={`project/${project.case}`}
                className="portfolio-button cursor-pointer text-sm md:text-lg"
              >
                Case Study
              </Link>
              <a
                className="hidden sm:inline-block portfolio-button text-sm md:text-lg"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
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
