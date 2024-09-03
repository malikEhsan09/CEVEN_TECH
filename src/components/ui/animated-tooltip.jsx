import { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 50, damping: 10 }; // Reduced stiffness and increased damping for subtler animation
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-15, 15]), // Reduced rotation range
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-20, 20]), // Reduced translation range
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }} // Reduced initial values
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100, // Reduced stiffness
                    damping: 15, // Increased damping
                  },
                }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }} // Reduced exit values
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-oxfordBlue z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-platinum relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-silverLakeBlue text-xs ">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={1000}
            width={1000}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-20 w-20 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};

export default AnimatedTooltip;
