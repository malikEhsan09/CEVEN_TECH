import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({ icon, title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center border border-black/[0.2] dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] group cursor-pointer"
    >
      <div className="relative z-20">
        {/* Icon always visible */}
        <div className="group-hover:opacity-0 transition duration-200">
          {icon}
        </div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <h2 className="text-lg text-center md:text-xl lg:text-2xl font-bold text-[#FF6EC7]">
              {title}
            </h2>
            <p className="text-center text-md lg:text-lg mt-2 lg:leading-snug">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
