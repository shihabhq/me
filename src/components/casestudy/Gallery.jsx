import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import SectionHeading from "../../shared/SectionHeading";
import "yet-another-react-lightbox/styles.css";
import { motion } from "motion/react";

const Gallery = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <section className="my-24">
        <SectionHeading text="Gallery" />
        <div
          className="container w-[90%] max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 gap-8  "
        >
          {project.gallery.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + 0.1 * index }}
              viewport={{ once: true }}
              key={index}
              className=" rounded-lg cursor-pointer overflow-hidden shadow-lg bg-white
              hover:shadow-2xl transition-all duration-300"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full hover:scale-105 hover:brightness-75 transition-all object-cover rounded-t-lg"
              />
              <p
                className="bg-white text-sm font-semibold text-background
             px-1 rounded-b-lg py-2"
              >
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Implementation */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={project.gallery.map((item) => ({ src: item.src }))}
      />
    </>
  );
};

export default Gallery;
