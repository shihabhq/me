import SectionHeading from "../../shared/SectionHeading";
import { motion } from "motion/react";
import Stacks from "./components/Stacks";

const Introduction = ({ project }) => {
  return (
    <section className="my-16">
      <SectionHeading text={"Introduction"} />
      <div
        className="container mx-auto flex flex-col md:flex-row items-center 
    gap-6 md:items-start justify-between max-w-[1280px] px-6"
      >
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="md:w-3/5 flex flex-col gap-2 w-full text-center md:text-left"
        >
          <h1 className="text-3xl font-bold">The Project</h1>
          <div className="mb-6  bg-button h-2 w-1/5 mx-auto md:mx-0"></div>
          <p className="max-w-xl font-semibold text-justify mx-auto md:mx-0">
            {project.text}
          </p>
          <h1 className="text-2xl font-semibold  ">Color codes</h1>
          <div className="flex flex-wrap gap-6  items-center justify-center max-w-xl">
            {project.colorcodes.map((code, index) => {
              return (
                <div
                  key={index}
                  className="h-28 flex items-center justify-center w-28 rounded-full"
                  style={{ backgroundColor: code }}
                >
                  {code}
                </div>
              );
            })}
          </div>
          <h1 className="text-2xl font-semibold  ">Tech Stacks</h1>
          <div
            className=" max-w-xl  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 
  items-center justify-center"
          >
            {project.stacks.map((skill, index) => (
              <Stacks key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="md:w-2/5 w-full  md:mt-0"
        >
          <img
            src={project.image}
            className="max-h-[400px] md:max-h-[600px] w-full object-cover object-top rounded-sm shadow-lg"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
