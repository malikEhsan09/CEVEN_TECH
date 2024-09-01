import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Spotlight } from "../ui/Spotlight";
import { Globe } from "./Globe";
import { Cover } from "../ui/cover";

function CHero() {
  return (
    <>
      <Spotlight className="absolute -top-[42rem] opacity-80" fill="#1D2D44" />
      <div className="mx-auto flex items-center justify-center relative w-full flex-col space-y-6 md:space-y-8 mt-12 md:mt-16 lg:mt-20 xl:mt-24">
        <div className="lg:text-6xl font-roboto uppercase text-center text-3xl md:text-4xl xl:text-6xl font-semibold max-w-7xl mx-auto z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 via-neutral-600 to-neutral-600 dark:from-neutral-800 dark:via-white dark:to-white bg-richBlack mt-8 md:mt-12 lg:mt-16 xl:mt-20">
          Transforming Ideas into Innovative Software{" "}
          <span className="text-platinum">
            <Cover> Across All Platforms</Cover>
          </span>
        </div>

        {/* Description */}
        <div className="text-white text-center px-4 md:px-8 font-normal text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
          Our development doesn't stop until our{" "}
          <span className="text-platinum">
            clients are completely satisfied across all over the world
          </span>
          .
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 relative">
          <button className="bg-chamBray rounded-full py-2 px-8 font-bold text-white border-2 border-silverLakeBlue cursor-pointer hover:border-richBlack hover:bg-black hover:text-platinum transition-all ease-linear duration-200 shadow-lg tracking-wider">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </button>

          <button className="bg-transparent rounded-full py-2 px-8 font-bold text-platinum border-2 border-silverLakeBlue hover:border-black hover:bg-[#FAAE3E] hover:text-white transition-all ease-linear duration-200 shadow-lg tracking-wider">
            <Link to="/eleven">Eleven</Link>
          </button>
        </div>

        {/* Move the Globe upwards for smaller screens */}
        <Globe className="mt-16 md:mt-12 lg:mt-8" />
      </div>
    </>
  );
}

export default CHero;
