import { cn } from "../../lib/utils.js";
import ehsan from "../../assets/team/ehsan1.jpg";
import moiz from "../../assets/team/moiz.jpg";
import ajmal from "../../assets/CEO CTO/ajmaledit.jpg";
import { SparklesCore } from "../ui/sparkles.jsx";

export default function CTestimonials() {
  return (
    <div
      id="testimonials"
      className="h-[50rem] flex flex-col items-center justify-center w-full -mt-[8rem]"
    >
      {/* Heading */}
      <h1 className="md:text-7xl text-4xl lg:text-6xl font-bold text-center text-white relative z-20 mb-2">
        Testimonials
      </h1>

      {/* Decorative Elements */}
      <div className="w-[40rem] h-40 relative mb-1">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* Cards */}
      <div className="flex justify-center space-x-4 -mt-[2rem]">
        {CARDS.map((card, index) => (
          <div
            key={card.id}
            className={`transition-transform duration-300 ease-in-out transform ${
              index === 1 ? "scale-110 z-10" : ""
            } hover:scale-125 hover:z-20 bg-white dark:bg-richBlack rounded-3xl p-6 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between w-96 h-96 cursor-pointer`}
          >
            <div className="flex flex-col items-center flex-grow">
              <img
                src={card.image}
                alt={card.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <div className="font-normal text-neutral-700 dark:text-neutral-200 text-center flex-grow">
                {card.content}
              </div>
              <div className="text-center mt-2">
                <p className="text-neutral-500 font-medium dark:text-white">
                  {card.name}
                </p>
                <p className="text-neutral-400 font-normal dark:text-neutral-200">
                  {card.designation}
                </p>
              </div>
              <div className="flex mt-2">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${
                      starIndex < card.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Ehsan",
    designation: "Senior Software Engineer",
    image: ehsan,
    content: (
      <p>
        These cards are fantastic! <Highlight>I want to use them</Highlight> in
        my project!
      </p>
    ),
    rating: 5,
  },
  {
    id: 1,
    name: "Moiz",
    designation: "Senior Flutter Developer",
    image: moiz,
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project.
      </p>
    ),
    rating: 4,
  },
  {
    id: 2,
    name: "M. Ajmal Malik",
    designation: "Senior Citizen",
    image: ajmal,
    content: (
      <p>
        Framer Motion is a godsend, ngl! It's like having a personal trainer for
        my animations.
      </p>
    ),
    rating: 3,
  },
];
