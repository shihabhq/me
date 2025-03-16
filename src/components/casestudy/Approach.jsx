import SectionHeading from "../../shared/SectionHeading";
import { motion } from "motion/react";

const Approach = ({ approaches }) => {
  return (
    <section className="my-28 max-w-[1280px] mx-auto w-[90%]">
      <SectionHeading text={"My Approach"} />
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Challenges I faced
          </h2>
          <h2 className="text-3xl font-bold  mb-4 mdl:block hidden text-center">
            My Solutions
          </h2>
        </div>
        <div>
          <ul className="space-y-6">
            {approaches.map((approach, index) => (
              <div
                className="grid grid-cols-1 mdl:grid-cols-2 gap-2 mdl:gap-12"
                key={index}
              >
                <li className="flex items-start">
                  <span
                    className="inline-flex items-center  justify-center p-2 rounded-full
                   bg-red-100 text-red-800 text-sm font-medium mr-3"
                  >
                    {index + 1}
                  </span>
                  <span className="mdl:text-lg ">{approach.problem}</span>
                </li>
                <li key={index} className="flex items-start">
                  <span
                    className="inline-flex items-center justify-center p-2 rounded-full
                   bg-green-100 text-green-800 text-sm font-medium mr-3"
                  >
                    {index + 1}
                  </span>
                  <span className=" mdl:text-lg ">{approach.solution}</span>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-3"></ul>
        </div>
      </div>
    </section>
  );
};

export default Approach;
