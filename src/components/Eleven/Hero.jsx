import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div className="mx-auto flex items-center justify-center relative w-full flex-col space-y-6 md:space-y-8 mt-28 md:mt-30 lg:mt-20 xl:mt-10 ">
        <div className="text-4xl md:text-6xl lg:text-7xl font-roboto font-bold uppercase text-center mt-14 md:mt-28 lg:mt-48 xl:mt-60 relative">
          An App that helps you live life better
        </div>

        {/* description */}
        <div className="text-center pl-7 pr-7 font-medium text-lg md:text-xl lg:text-2xl">
          A pioneering startup based in Pakistan, recognized by{" "}
          <span className="text-green-400 tracking-wider">Microsoft</span>,{" "}
          <span className="text-green-400 tracking-wider">Siberkoza</span>, and{" "}
          <span className="text-green-400 tracking-wider">NASTP</span> for our
          innovative software solutions.
        </div>

        {/* Buttons */}
        <div class="flex  items-center justify-center md:flex-row space-x-4 space-y-0 relative">
          <button class="bg-green-400 rounded-full py-2 px-8 text-white border-2 border-white hover:border-green-400 hover:bg-white hover:text-green-400 transition-all ease-linear duration-200 shadow-lg tracking-wider">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </button>

          <button class="bg-white rounded-full py-2 px-8 text-green-400 border-2 border-green-400 hover:border-white hover:bg-green-400 hover:text-white transition-all ease-linear duration-200 shadow-lg tracking-wider">
            <Link to="/">Ceven</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
