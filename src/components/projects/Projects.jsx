import image from "./assets/image.png";
import SectionHeading from "../../shared/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import AnimateComponent from "../../shared/Animation";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import projects from "./projects";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="pt-16 md:pt-24 lg:pt-32">
      <div>
        <h1 className="section-heading ">Selected Projects</h1>
      </div>

      {projects.map((project, index) => {
        const targetScale = 1 - (projects.length - index) * 0.05;

        return (
          <ProjectCard
            key={project.case}
            idx={index}
            range={[index * 0.1, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
            project={project}
          />
        );
      })}
    </section>
  );
};

export default Projects;
