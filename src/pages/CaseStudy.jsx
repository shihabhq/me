import NotFound from "./NotFound";
import Nav from "../components/casestudy/Nav";
import Summary from "../components/casestudy/Summary";
import Introduction from "../components/casestudy/Introduction";
import Approach from "../components/casestudy/Approach";
import Gallery from "../components/casestudy/Gallery";
import Footer from "../components/footer/Footer";
import { motion } from "motion/react";
import { useParams } from "react-router";
import projects from "../components/projects/projects";

const CaseStudy = () => {
  const { id } = useParams();

  const project = projects.find((project) => project.case == id);

  if (!project) {
    return <NotFound />;
  }
  return (
    <>
      <Nav />
      <Summary project={project} />
      <Introduction project={project} />
      <Approach approaches={project.approaches} />
      <Gallery project={project} />
      <motion.section
        className="container max-w-[1280px] w-[90%] mx-auto my-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold my-4">Key Learnings</h1>
        <p className="font-medium">{project.learnings}</p>
      </motion.section>
      <motion.section
        className="container max-w-[1280px] w-[90%] mx-auto my-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold my-4">Future Improvements</h1>
        <p className="font-medium">{project.improvements}</p>
      </motion.section>
      <Footer />
    </>
  );
};

export default CaseStudy;
