import { useState, useEffect } from "react";
import { motion } from "motion";

const words = ["Text1", "Text2", "Text3", "Text4"];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="relative h-16 overflow-hidden text-3xl font-bold">
        <motion.div
          key={index}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute w-full text-center"
        >
          {words[index]}
        </motion.div>
      </div>
    </div>
  );
}
