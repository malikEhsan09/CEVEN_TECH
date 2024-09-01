// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import logo from "../../../public/Ceven.png";

// function CNav() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const controlNavbar = () => {
//     if (typeof window !== "undefined") {
//       if (window.scrollY > lastScrollY) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//       setLastScrollY(window.scrollY);
//     }
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.addEventListener("scroll", controlNavbar);
//       return () => {
//         window.removeEventListener("scroll", controlNavbar);
//       };
//     }
//   }, [lastScrollY]);

//   return (
//     <>
//       {/* Logo */}
//       <div className="container mx-auto p-6 flex justify-start items-center ">
//         <div className="text-2xl md:text-3xl lg:text-4xl font-roboto font-bold text-blue-800 -ml-60 ">
//           <img
//             src={logo}
//             alt="ceven logo"
//             className="w-[70px] h-[60px] filter bg-transparent mix-blend-multiply "
//           />
//         </div>
//       </div>

//       <div
//         className={`container mx-auto -mb-28 p-4 flex justify-center sticky top-0 z-30 bg-gray-100 rounded-full shadow-lg transition-transform duration-300  ${
//           isVisible ? "translate-y-0" : "-translate-y-full"
//         }`}
//         style={{ marginTop: "-77px" }}
//       >
//         {/* Nav */}
//         <div className="flex space-x-8 items-center justify-center w-full">
//           {/* Individual links for large screens */}
//           <ScrollLink
//             to="services"
//             smooth={true}
//             duration={500}
//             className="text-gray-800 text-xl transition-colors duration-350 ease-linear font-semibold hover:cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 relative group"
//           >
//             Services
//             <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//           </ScrollLink>
//           <ScrollLink
//             to="teams"
//             smooth={true}
//             duration={500}
//             className="text-gray-800 text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 transition-transform duration-150 ease-linear relative group"
//           >
//             Teams
//             <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//           </ScrollLink>
//           <ScrollLink
//             to="contact"
//             smooth={true}
//             duration={500}
//             className="text-gray-800 text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 transition-transform duration-150 ease-linear relative group"
//           >
//             Contact Us
//             <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//           </ScrollLink>
//           <div className="text-xl border-2 border-blue-500 px-5 py-2 hover:bg-blue-500 hover:text-white rounded-3xl text-blue-500 transition-all duration-150 ease-linear font-semibold hover:cursor-pointer hover:-translate-y-0.5 items-center">
//             <Link to="/eleven">Eleven</Link>
//           </div>
//           <div
//             className="lg:hidden flex justify-center items-center"
//             onClick={toggleMobileMenu}
//           >
//             <svg
//               className="text-gray-800 text-2xl font-bold size-6 mt-1"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Full-Screen Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-20 bg-white flex flex-col items-center justify-center space-y-4">
//           <div
//             className="absolute top-6 right-6 p-2 text-gray-800 border-blue-600 rounded-full cursor-pointer"
//             onClick={toggleMobileMenu}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </div>
//           <div
//             className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-blue-600"
//             onClick={toggleMobileMenu}
//           >
//             Contact Us
//           </div>
//           <div
//             className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-blue-600"
//             onClick={toggleMobileMenu}
//           >
//             Featured
//           </div>
//           <div
//             className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-blue-600"
//             onClick={toggleMobileMenu}
//           >
//             Technologies
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default CNav;

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../../public/Ceven.png";
import { Link } from "react-router-dom";

function CNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      {/* Logo */}
      <div className="container mx-auto p-6 flex justify-start items-center">
        <div className="text-2xl md:text-3xl lg:text-4xl font-roboto font-bold  -ml-60">
          <Link to={"/"}>
            <img
              src={logo}
              alt="ceven logo"
              className="w-[5rem] lg:ml-[7rem]  filter bg-transparent mix-blend-multiply"
            />
          </Link>
        </div>
      </div>

      {/* Navbar for Large Screens */}
      <div
        className={`bg-richBlack container mx-auto -mb-28 p-4 flex justify-center sticky top-0 z-30 bg-transparent border-b-4 border-silverLakeBlue rounded-full shadow-lg transition-transform duration-300 lg:ml-[10rem] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ marginTop: "-92px" }}
      >
        <div className="hidden lg:flex space-x-8 items-center justify-center w-full">
          {/* Individual links for large screens */}
          {/* Add your ScrollLinks for large screens here */}
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="text-gray-300 text-xl transition-colors duration-350 ease-linear font-semibold hover:cursor-pointer hover:text-platinum hover:-translate-y-0.5 relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-silverLakeBlue transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>

          <ScrollLink
            to="teams"
            smooth={true}
            duration={500}
            className="text-platinum text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-platinum hover:-translate-y-0.5 transition-transform duration-150 ease-linear relative group"
          >
            Teams
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-silverLakeBlue transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-gray-300 text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-platinum hover:-translate-y-0.5 transition-transform duration-150 ease-linear relative group"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-silverLakeBlue transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>

          <ScrollLink
            to="testimonials"
            smooth={true}
            duration={500}
            className="text-gray-300 text-xl transition-colors duration-350 ease-linear font-semibold hover:cursor-pointer hover:text-platinum hover:-translate-y-0.5 relative group"
          >
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-silverLakeBlue transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="text-gray-300 text-xl transition-colors duration-350 ease-linear font-semibold hover:cursor-pointer hover:text-platinum hover:-translate-y-0.5 relative group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-silverLakeBlue transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>

          <ScrollLink
            to="approach"
            smooth={true}
            duration={500}
            className="text-gray-300 text-xl transition-colors duration-350 ease-linear font-semibold hover:cursor-pointer hover:text-platinum hover:-translate-y-0.5 relative group"
          >
            Approach
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-silverLakeBlue transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
          {/* Other ScrollLinks */}
        </div>
      </div>

      {/* Hamburger Icon for Mobile Screens */}
      <div className="lg:hidden flex justify-between items-center p-4 fixed top-0 z-40 w-full bg-richBlack">
        <div className="flex items-center">
          <img src={logo} alt="ceven logo" className="w-10 h-10" />
        </div>
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-richBlack flex flex-col items-center justify-center space-y-8 text-platinum">
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="text-3xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-silverLakeBlue"
            onClick={toggleMobileMenu}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="teams"
            smooth={true}
            duration={500}
            className="text-3xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-silverLakeBlue"
            onClick={toggleMobileMenu}
          >
            Teams
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-3xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-silverLakeBlue"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </ScrollLink>
          <ScrollLink
            to="testimonials"
            smooth={true}
            duration={500}
            className="text-3xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-silverLakeBlue"
            onClick={toggleMobileMenu}
          >
            Testimonials
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="text-3xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-silverLakeBlue"
            onClick={toggleMobileMenu}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="approach"
            smooth={true}
            duration={500}
            className="text-3xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-silverLakeBlue"
            onClick={toggleMobileMenu}
          >
            Approach
          </ScrollLink>
        </div>
      )}
    </>
  );
}

export default CNav;
