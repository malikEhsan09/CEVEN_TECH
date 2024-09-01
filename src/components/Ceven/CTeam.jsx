import CEO from "../../assets/CEO CTO/malaika (2).jpg";
import CTO from "../../assets/CEO CTO/ajmaledit.jpg";
import { SparklesCore } from "../ui/sparkles";
import AnimatedTooltip from "../../components/ui/animated-tooltip.jsx";
import ehsan from "../../assets/team/ehsan1.jpg";
import moiz from "../../assets/team/moiz.jpg";
import waheed from "../../assets/team/Waheed.jpg";
import haseeb from "../../assets/team/haeeb.jpg";
import awais from "../../assets/team/awais.jpg";

const team = [
  {
    id: 1,
    name: "Ehsan Ahmed",
    designation: "Full Stack Engineer",
    image: ehsan,
  },

  {
    id: 2,
    name: "Abdul Moiz",
    designation: "Operation Manager",
    image: moiz,
  },
  {
    id: 3,
    name: "Abdul Waheed",
    designation: "Full Stack Engineer",
    image: waheed,
  },
  {
    id: 4,
    name: "Awais ur Rehman",
    designation: "CPO (Chief Product Officer)",
    image: awais,
  },
  {
    id: 5,
    name: "Haseeb Ur Rehman",
    designation: "Full Stack Engineer",
    image: haseeb,
  },
  {
    id: 6,
    name: "Malaika ",
    designation: "CEO and CO-Founder",
    image: CEO,
  },
  {
    id: 7,
    name: "M. Ajmal Malik",
    designation: "CTO and CO-Founder",
    image: CTO,
  },
];

function CTeam() {
  return (
    <>
      <div
        id="teams"
        className="flex flex-col align-middle items-center pt-10 md:pt-14 md:pb-20 lg:pt-20 lg:pb-28 space-y-7 pb-12 -mt-20"
      >
        {" "}
        <h1 className="md:text-7xl text-4xl lg:text-6xl font-bold text-center text-white relative z-20 ">
          Our Tech Leads
        </h1>
        <div className="w-[40rem] h-20 relative">
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
        <div className=" container mx-auto grid gap-7 md:mt-10 lg:grid-cols-2 lg:gap-7 lg:-mt-24">
          {/* Malaika */}
          <div className="border-2 p-5 bg-richBlack text-white shadow-2xl rounded-lg grid md:grid-cols-2 items-center">
            <img
              src={CEO}
              alt="Malaika Zia"
              className="max-w-full max-h-48 w-auto mx-auto md:mx-1 rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center space-y-2 md:ml-4 xl:ml-0">
              <div className="text-xl font-semibold text-white mx-auto md:mx-0 pt-4 md:pt-0">
                Malaika Zia
              </div>
              <div className="text-xl font-semibold uppercase text-gray-400 mx-auto md:mx-0">
                Cofounder & CEO
              </div>
              <div className="flex space-x-4 mx-auto md:mx-0">
                <a
                  href="https://www.linkedin.com/in/malaikazia/"
                  className="text-gray-500 hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="h-8 w-8 fill-current"
                  >
                    <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                  </svg>
                </a>
                <a
                  href="malaikazia@ceventech.com"
                  className="text-gray-500 hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="email"
                    className="h-8 w-8 fill-current"
                  >
                    <path d="M29.94 6.68a1 1 0 0 0-.09-.18.94.94 0 0 0-.05-.11 1.6 1.6 0 0 0-.31-.24l-.17-.06H2.94a1 1 0 0 0-.21 0l-.17.06a1 1 0 0 0-.15.1 1 1 0 0 0-.15.13.93.93 0 0 0-.05.11.79.79 0 0 0-.21.39A.93.93 0 0 0 2 7v18a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V7a.93.93 0 0 0 0-.12 1 1 0 0 0-.06-.2ZM26.06 8 16 15.74 5.94 8ZM28 24H4V9l11.39 8.76a1 1 0 0 0 1.22 0L28 9Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Ajmal */}
          <div className="border-2 p-5 bg-richBlack text-white shadow-2xl rounded-lg grid md:grid-cols-2 items-center">
            <img
              src={CTO}
              alt="Ajmal Malik"
              className="max-w-full max-h-48 w-auto mx-auto md:mx-1 rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center space-y-2 md:ml-4 xl:ml-0">
              <div className="text-xl font-semibold text-white mx-auto md:mx-0 pt-4 md:pt-0">
                Ajmal Malik
              </div>
              <div className="text-xl font-semibold uppercase text-gray-400 mx-auto md:mx-0">
                Cofounder & CTO
              </div>
              <div className="flex space-x-4 mx-auto md:mx-0 ">
                <a
                  href="https://www.linkedin.com/in/muhammad-ajmal-malik/"
                  className="text-gray-500 hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="h-8 w-8 fill-current"
                  >
                    <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                  </svg>
                </a>
                <a
                  type="email"
                  href="ajmal@ceventech.com"
                  className="text-gray-500 hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="email"
                    className="h-8 w-8 fill-current"
                  >
                    <path d="M29.94 6.68a1 1 0 0 0-.09-.18.94.94 0 0 0-.05-.11 1.6 1.6 0 0 0-.31-.24l-.17-.06H2.94a1 1 0 0 0-.21 0l-.17.06a1 1 0 0 0-.15.1 1 1 0 0 0-.15.13.93.93 0 0 0-.05.11.79.79 0 0 0-.21.39A.93.93 0 0 0 2 7v18a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V7a.93.93 0 0 0 0-.12 1 1 0 0 0-.06-.2ZM26.06 8 16 15.74 5.94 8ZM28 24H4V9l11.39 8.76a1 1 0 0 0 1.22 0L28 9Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* !our team */}

      <div className="flex flex-col align-middle items-center pt-10 md:pt-14 md:pb-20 lg:pt-20 lg:pb-28 space-y-7 pb-12 -mt-14">
        <h1 className="md:text-7xl text-4xl lg:text-6xl font-bold text-center text-white relative z-20 mb-10">
          Our Tech Team
        </h1>

        <div className="w-[40rem] h-40 relative">
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
          <div className="flex flex-row items-center justify-center w-full -mt-20">
            <AnimatedTooltip items={team} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CTeam;
