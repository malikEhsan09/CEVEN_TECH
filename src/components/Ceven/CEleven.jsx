import { Link } from "react-router-dom";

function CEleven() {
  return (
    <div className="w-full mx-auto p-4 border-t-2 border-white flex flex-col items-center justify-center pt-8 pb-14 sm:pt-10 sm:pb-16 md:pt-14 md:pb-20 lg:pt-20 lg:pb-28">
      <div className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-platinum">
        Discover Our Flagship Product:
      </div>
      <div className="text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-chamBray font-extrabold mb-2 sm:mb-3">
        Eleven
      </div>
      <div className="text-center text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-5 text-platinum max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        Revolutionizing technology in one powerful application.
      </div>
      <Link
        to="/eleven"
        className="text-chamBray text-xl sm:text-2xl font-semibold hover:text-silverLakeBlue hover:font-bold flex items-center transition-all duration-300"
      >
        <span className="mr-1 transform transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>{" "}
        Learn More
      </Link>
    </div>
  );
}

export default CEleven;
