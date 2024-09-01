import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`fixed top-0 w-full transition-transform duration-300 ease-in-out ${isScrolled ? '-translate-y-full' : 'translate-y-0'} bg-white shadow-md z-20`}>
        <div className='container mx-auto p-6 flex justify-between w-full items-center'>
          {/* Logo */}
          <div className='text-2xl md:text-3xl lg:text-4xl font-roboto font-bold text-green-400'>
            Eleven
          </div>
          
          {/* Nav */}
          <div className='flex space-x-4 items-center'>
            

            {/* Individual links for large screens */}
            <ScrollLink to='teams' smooth={true}  duration={500} className="hidden text-xl transition-colors duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer hover:text-green-400 hover:-translate-y-0.5 transition-transform duration-150 ease-linear">
              Teams
            </ScrollLink>
            <ScrollLink to='partners' smooth={true}  duration={500} className="hidden text-xl transition-colors duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer hover:text-green-400 hover:-translate-y-0.5 transition-transform duration-150 ease-linear">
              Partners
            </ScrollLink>
            <ScrollLink to='contact' smooth={true}  duration={500}  className="hidden text-xl transition-colors duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer hover:text-green-400 hover:-translate-y-0.5 transition-transform duration-150 ease-linear">
              Contact Us
            </ScrollLink>
            <div className=" text-xl border-2 border-green-500 px-5 py-2 hover:bg-green-500 hover:text-white rounded-3xl text-green-500 transition-all duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer  hover:-translate-y-0.5  items-center">
            <Link to="/">Ceven</Link>
          </div>
          <div className="hidden  lg:hidden justify-center items-center" onClick={toggleMobileMenu}>
              <svg className='text-2xl font-bold size-6 mt-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 bg-white flex flex-col items-center justify-center space-y-4">
          <div className="absolute top-48 right-42 p-2 text-green-400 border-green-400 rounded-full cursor-pointer" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <ScrollLink className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-green-400" onClick={toggleMobileMenu}>
            Contact Us
          </ScrollLink>
          <div className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-green-400" onClick={toggleMobileMenu}>
            Featured
          </div>
          <div className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-green-400" onClick={toggleMobileMenu}>
            Technologies
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
