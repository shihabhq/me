import { motion } from "motion/react";

const Stacks = ({ skill }) => {
  return (
    <motion.div
      className="flex bg-card hover:bg-cardHover items-center justify-center gap-2 py-3 px-6 border
  rounded-md border-green-200"
      variants={{
        hidden: { opacity: 0, y: 75, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hidden"
      transition={{
        duration: 0.3,
      }}
      viewport={{ once: true }}
      whileInView="visible"
      whileHover={{ translateY: -5 }}
    >
      <img className="w-4" src={skill.image} alt="" />
      <h3 className="text-sm font-medium">{skill.text}</h3>
    </motion.div>
  );
};

export default Stacks;
