import { motion } from "motion/react";

const Stacks = ({ skill }) => {
  return (
    <div
      className="flex bg-card hover:bg-cardHover items-center justify-center gap-2 py-3 px-6 border
  rounded-md border-green-200"
    >
      <img className="w-4" src={skill.image} alt="" />
      <h3 className="text-sm font-medium">{skill.text}</h3>
    </div>
  );
};

export default Stacks;
