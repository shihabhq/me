import React from "react";
import { motion } from "motion/react";
import AnimateComponent from "../../../shared/Animation";

const WritingsCard = ({ image, title, description, link, idx }) => {
  return (
    <AnimateComponent
      delay={0.2 * idx}
      className="bg-card rounded-2xl grid-cols-3 xl:grid-cols-1 shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-80 xl:h-52 object-cover cursor-pointer hover:scale-105 transition-all"
        style={{ objectPosition: "center" }} // Center the image dynamically
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3
          className="text-xl cursor-pointer  font-semibold text-cyan-400"
          onClick={() => window.open(link, "_blank")}
        >
          {title}
        </h3>
        <p className="text-white opacity-60 transition-all hover:opacity-100 mt-2 flex-grow">
          {description.slice(0, 150)}...
        </p>

        <a
          href={link}
          target="_blank"
          className="px-6 border-2 transition-all w-fit ml-auto duration-300 border-green-500 hover:bg-card py-3 
          text-md 2xl:text-lg font-semibold rounded-lg bg-green-500 mt-4 text-center"
        >
          Read
        </a>
      </div>
    </AnimateComponent>
  );
};

export default WritingsCard;
