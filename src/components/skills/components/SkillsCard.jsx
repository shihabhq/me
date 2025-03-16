import { motion } from "motion/react";

const SkillsCard = ({ skill }) => {
  return (
    <div
      className="flex bg-card hover:bg-cardHover items-center justify-center gap-2 py-4 px-8 border
    rounded-md border-green-200"
    >
      <img className="w-6" src={skill.image} alt="" />
      <h3 className="text-lg font-medium">{skill.name}</h3>
    </div>
  );
};

export default SkillsCard;
