import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../../public/Ceven.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
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

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="bg-richBlack shadow-lg lg:border-b-2 lg:border-b-silverLakeBlue rounded-b-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 lg:py-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Ceven logo"
                className="h-8 w-auto sm:h-10 lg:h-12 object-contain"
              />
            </Link>

            {/* Navbar for Large Screens */}
            <div className="hidden lg:flex items-center">
              <div className="bg-richBlack shadow-lg">
                <div className="flex justify-center space-x-8 py-4 px-8">
                  {[
                    "services",
                    "teams",
                    "contact",
                    "testimonials",
                    "projects",
                    "approach",
                  ].map((item) => (
                    <ScrollLink
                      key={item}
                      to={item}
                      smooth={true}
                      duration={500}
                      className="text-gray-300 text-lg xl:text-xl font-semibold hover:text-platinum transition-colors duration-300 ease-linear group"
                    >
                      <span className="relative">
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-silverLakeBlue transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </ScrollLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50 bg-richBlack h-screen flex flex-col items-center justify-start pt-20"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-white focus:outline-none"
              aria-label="Close menu"
              whileTap={{ scale: 0.95 }}
            >
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
            <motion.div className="flex flex-col items-center space-y-6 mt-16">
              {[
                "services",
                "teams",
                "contact",
                "testimonials",
                "projects",
                "approach",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  variants={menuItemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <ScrollLink
                    to={item}
                    smooth={true}
                    duration={500}
                    className="text-2xl font-medium text-platinum hover:text-silverLakeBlue transition-colors duration-300"
                    onClick={toggleMobileMenu}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </ScrollLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Cross bar on the front z-axis */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-silverLakeBlue z-[51]"></div> */}
    </nav>
  );
}
