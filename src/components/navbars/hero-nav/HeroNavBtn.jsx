import { motion } from "motion/react";

export const HeroNavBtn = ({ href, text, idx }) => {
  return (
    <motion.button
      onClick={() => (window.location.href = "#" + href)}
      className="nav-button  hover:-translate-y-[6px] hover:bg-button hover:text-background"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      {text}
    </motion.button>
  );
};
