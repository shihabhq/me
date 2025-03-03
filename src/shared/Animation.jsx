import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 75, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
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
