import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const AnimateComponent = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
};

export default AnimateComponent;
