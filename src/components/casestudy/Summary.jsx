import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const Summary = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ bounce: 0 }}
      className="relative min-h-[60vh] bg-center bg-cover flex gap-8 items-center justify-center"
      style={{ backgroundImage: `url(${project.titleImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col gap-4 text-white p-8 w-full h-full f">
        <h1 className="text-center text-6xl font-extrabold">{project.title}</h1>
        <p className="font-semibold text-lg text-center italic  text-gray-300">
          {project.tagline}
        </p>
        <div className="flex-grow flex items-center justify-center gap-4">
          <a
            href={project.link}
            target="_blank"
            className="px-4 py-2 flex items-center gap-1 font-bold text-sm cursor-pointer border
          rounded-sm bg-green-500  transition-all hover:-translate-y-1 border-green-500 md:text-lg"
            rel="noopener noreferrer"
          >
            Visit Website <FiExternalLink />
          </a>
          <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 flex items-center gap-1 font-bold text-sm cursor-pointer border
          rounded-sm bg-green-500  transition-all hover:-translate-y-1 border-green-500 md:text-lg"
            rel="noopener noreferrer"
          >
            View Code <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Summary;
