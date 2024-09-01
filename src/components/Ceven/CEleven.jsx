import { Link } from "react-router-dom";

function CEleven() {
  return (
    <div className="w-full mx-auto p-4 border-t-2 border-white flex flex-col items-center justify-center pt-8 pb-14 md:pt-14 md:pb-20 lg:pt-20 lg:pb-28">
      <div className="text-center text-2xl lg:text-3xl  font-bold mb-2 text-platinum">
        Discover Our Flagship Product:
      </div>
      <div className="text-center text-5xl lg:text-5xl xl:text-7xl text-chamBray font-extrabold mb-2">
        Eleven
      </div>
      <div className="text-center text-lg lg:text-xl font-semibold mb-4 text-platinum">
        Revolutionizing technology in one powerful application.
      </div>
      <Link
        to="/eleven"
        className="text-chamBray text-2xl font-semibold hover:text-silverLakeBlue hover:font-bold flex items-center"
      >
        <span className="mr-1">&rarr;</span> Learn More
      </Link>
    </div>
  );
}

export default CEleven;
