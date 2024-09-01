import React from 'react'
import iMockup1 from '../../assets/mockups/iMockup - iPhone 15 Pro Max.png';
import iMockup2 from '../../assets/mockups/iMockup - iPhone 15 Pro Max-1.png';
import iMockup3 from '../../assets/mockups/iMockup - iPhone 15 Pro Max-2.png';
import iMockup4 from '../../assets/mockups/iMockup - iPhone 15 Pro Max-3.png';

function Mockup() {
  return (
    <>
        
        <div className='mx-auto flex justify-center items-center mt-16 md:mt-16 lg:mt-20 flex-col '>

            <h2 className='uppercase text-2xl font-bold md:text-3xl'>
                A Few Of Our Designs 
            </h2>
            {/* Mockup Images */}
            <div className='flex flex-col mt-16 md:mt-20 lg:mt-8 space-y-20 lg:flex-row lg:justify-center lg:items-center lg:space-x-10 xl:space-x-24 trans'>
                <div className="relative z-10  flex justify-center align-middle lg:mt-16 hover:scale-105 transition-all duration-150 ease-linear ">

                    <img className=' h-52 w-28 md:h-64 md:w-32 lg:h-72 lg:w-36 ' src={iMockup1} alt="" />
                    {/* <div className='absolute lg:hidden  bg-green-300 h-20 w-1 lg:w-44 lg:h-1 z-0 right-10 top-64 lg:top-48 lg:left-32'></div> */}
                    <div className='absolute w-1 h-32 z-[-1] bg-green-300  top-48 md:top-64 left-[72px] md:left-20 lg:hidden '></div>
                    <div className='absolute w-52 h-1 z-[-1] bg-green-300 top-[134px] left-20 hidden lg:block '></div>
                </div>
                <div className="relative z-10  hover:scale-105 transition-all duration-150 ease-linear lg:mt ">
                    <img className='h-52 w-28 md:h-64 md:w-32 lg:h-72 lg:w-36' src={iMockup2} alt="" />
                    {/* <div className='absolute lg:hidden bg-green-400 h-20 w-1 lg:w-44 lg:h-1 z-0 right-10 top-64 lg:left-32'></div> */}
                    <div className='absolute w-1 h-32 z-[-1] bg-green-300 top-48 md:top-64 left-[72px] md:left-20 lg:hidden'></div>
                    <div className='absolute w-52 h-1 z-[-1] bg-green-300 top-32 left-20 hidden lg:block '></div>
                </div>
                <div className="relative z-10  hover:scale-105 transition-all duration-150 ease-linear ">
                    <img className='h-52 w-28 md:h-64 md:w-32 lg:h-72 lg:w-36' src={iMockup3} alt="" />
                    {/* <div className='absolute lg:hidden bg-green-400 h-20 w-1 lg:w-44 lg:h-1 z-0 right-10 top-48 lg:left-32'></div> */}
                    <div className='absolute w-1 h-32 z-[-1] bg-green-300 top-48 md:top-64 left-[72px] md:left-20 lg:hidden'></div>
                    <div className='absolute w-52 h-1 z-[-1] bg-green-300 top-32 left-20 hidden lg:block '></div>
                </div>
                <div className="relative z-10  hover:scale-105 transition-all duration-150 ease-linear">
                    <img className='h-52 w-28 md:h-64 md:w-32 lg:h-72 lg:w-36' src={iMockup4} alt="" />
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Mockup