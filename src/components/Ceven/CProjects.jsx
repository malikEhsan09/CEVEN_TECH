import { CardStack } from "../ui/card-stack";
import { SparklesCore } from "../ui/sparkles.jsx";
import { useState, useEffect } from "react";

// Sample project images as strings
const CARDS = [
  {
    id: 0,
    name: "Project 1",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBob3RvJTIwMSUyMGZpbGxlfGVufDB8fHx8MTY0OTQ4MDgwMA&ixlib=rb-1.2.1&q=80&w=400",
    description:
      "This is a description of Project 1. It showcases the features and technologies used.",
  },
  {
    id: 1,
    name: "Project 2",
    image:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxwb3RvJTIwMiUyMGZpbGxlfGVufDB8fHx8MTY0OTQ4MDgwMA&ixlib=rb-1.2.1&q=80&w=400",
    description:
      "This is a description of Project 2. It highlights the key aspects of the project.",
  },
  {
    id: 2,
    name: "Project 3",
    image:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxwb3RvJTIwMyUyMGZpbGxlfGVufDB8fHx8MTY0OTQ4MDgwMA&ixlib=rb-1.2.1&q=80&w=400",
    description:
      "This is a description of Project 3. It explains the goals and outcomes.",
  },
];

export default function CProjects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white relative z-20 mb-4 sm:mb-6 md:mb-8">
        Projects
      </h1>

      {/* Decorative Elements */}
      <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-20 sm:h-30 md:h-40 relative mb-4 sm:mb-6 md:mb-8">
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={isMobile ? 600 : 1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Card Stack */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[300px] self-center sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
          <CardStack items={CARDS} />
        </div>
      </div>
    </div>
  );
}
