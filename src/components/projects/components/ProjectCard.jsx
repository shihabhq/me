import { img } from "motion/react-client";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-[80%] mx-auto max-w-[960px] min-h-[80vh] flex items-center justify-center">
      <div className="bg-card shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div
          className="w-full md:w-1/2 overflow-hidden transition-all "
          onClick={() =>
            window.open("https://urbaneats-72385.web.app/", "_blank")
          }
        >
          <img
            src={project.image}
            alt="Album"
            className="w-full max-h-[320px] md:max-h-[600px]
          object-top h-full object-cover transition-all
           hover:scale-105 cursor-pointer overflow-hidden hover:opacity-80"
          />
        </div>

        <div className="w-full md:w-1/2 py-6 px-8 flex flex-col gap-4 justify-start">
          <h2 className="font-Poppins text-4xl font-semibold text-button mb-2 h-fit mdl:text-2xl xl:text-4xl">
            {project.title}
          </h2>
          <p className="text-base font-medium text-justify ">{project.text}</p>
          <p className="text-base mdl:text-base font-medium">
            This project was built with,
          </p>
          <div className="grid grid-cols-8 gap-2 justify-items-center ">
            {project.stacks.map((stack) => {
              return <img src={stack} key={stack} />;
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
    </div>
  );
};

export default ProjectCard;
