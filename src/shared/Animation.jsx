import { motion } from "motion/react";

const AnimateComponent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default AnimateComponent;
