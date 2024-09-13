import { CardStack } from "../ui/card-stack";
import { SparklesCore } from "../ui/sparkles.jsx";
import { useState, useEffect } from "react";
import Mockup1 from "../../assets/mockups/Mockup1.jpg";
import Mockup2 from "../../assets/mockups/Mockup2.jpg";
import Mockup3 from "../../assets/mockups/Mockup3.jpg";

// Sample project images as strings
const CARDS = [
  {
    id: 0,
    name: "Project 1",
    image: Mockup1,
    title: "Budgeting and Finance",
    description:
      "Empowers users with tools for managing expenses Budgeting, Setting financial goals, and gaining insights into their financial health",
  },
  {
    id: 1,
    name: "Project 2",
    title: "Wellness Hub",
    image: Mockup2,
    description:
      "Centralizes features to promote a healthy lifestyle. Encompassing fitness, medication management, hydration goals, and smoking quitting support",
  },
  {
    id: 2,
    name: "Project 3",
    title: "Productivity Nest",
    image: Mockup3,
    description:
      "Enhances productivity and organization through task management Calendar integration, goal tracking, and access to productivity-enhancing resources.",
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
