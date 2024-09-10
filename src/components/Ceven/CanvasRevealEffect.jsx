import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import arrow from "../../assets/svg/arrow.svg";
import star1 from "../../assets/svg/star1.svg";
import shape from "../../assets/svg/shape.svg";
import spiral from "../../assets/svg/spiral.svg";
import { CanvasRevealEffect } from "../../components/ui/canvas-reveal-effect.jsx"; // Adjust the import path according to your project structure
import client from "../../assets/Ceven/approches/client[1].png";
import innovation from "../../assets/Ceven/approches/innovation[1].png";
import collaboration from "../../assets/Ceven/approches/collaboration[1].png";
import quality from "../../assets/Ceven/approches/diamond[1].png";

export function CanvasRevealEffectDemo() {
  return (
    <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center bg-white dark:bg-richBlack xl:w-[80rem] lg:-ml-20 md:w-auto mx-auto px-8 hover:cursor-pointer">
      <Card
        title="Client-Centric"
        icon={<img src={client} alt="" className="mx-auto h-16 lg:h-20 " />}
        description="We tailor solutions to your needs, ensuring they fit your requirements."
        textColor="#748CAB"
      >
        <CanvasRevealEffect
          animationSpeed={5.1}
          containerClassName="bg-emerald-900"
        />
      </Card>
      <Card
        title="Innovation-Driven"
        icon={<img src={innovation} alt="" className="mx-auto h-16 lg:h-20" />}
        description="We use the latest tech to provide cutting-edge solutions."
        textColor="#748CAB"
      >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-gray-600"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2}
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </Card>
      <Card
        title="Collaborative"
        icon={
          <img src={collaboration} alt="" className="mx-auto h-16 lg:h-20" />
        }
        description="We work closely with you, ensuring transparency throughout."
        textColor="#748CAB"
      >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]}
        />
      </Card>
      <Card
        title="Quality-Focused"
        icon={<img src={quality} alt="" className="mx-auto h-16 lg:h-20" />}
        description="We prioritize quality, ensuring robust and reliable software."
        textColor="#748CAB"
      >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-[beige]"
          colors={[[125, 211, 252]]}
        />
      </Card>
    </div>
  );
}

const Card = ({ title, icon, description, textColor, children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex flex-col items-center justify-center dark:border-white/[0.2] w-full h-[20rem] p-4 relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2
          className={`text-xl mt-4 font-bold transition duration-200 ${
            hovered ? "text-white" : "text-black dark:text-white"
          }`}
          style={{ color: hovered ? "white" : textColor }}
        >
          {title}
        </h2>
        {hovered && (
          <div className="text-center md:text-md lg:text-lg lg:leading-snug mt-2 text-white transition duration-200">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
