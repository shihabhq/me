import { motion } from "motion/react";

const SkillsCard = ({ skill }) => {
  return (
    <motion.div
      className="flex bg-card hover:bg-cardHover items-center justify-center gap-2 py-4 px-8 border
    rounded-md border-green-200"
      variants={{
        hidden: { opacity: 0, y: 75, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hidden"
      transition={{
        duration: 0.3,
      }}
      whileInView="visible"
      whileHover={{ translateY: -10 }}
    >
      <img className="w-6" src={skill.image} alt="" />
      <h3 className="text-lg font-medium">{skill.name}</h3>
    </motion.div>
  );
};

export default SkillsCard;
