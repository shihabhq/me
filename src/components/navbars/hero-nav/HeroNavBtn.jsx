import { motion } from "motion/react";

export const HeroNavBtn = ({ href, text, idx }) => {
  return (
    <a
      href={"#" + href}
      className="nav-button  hover:-translate-y-[6px] hover:bg-button hover:text-background"
    >
      {text}
    </a>
  );
};
