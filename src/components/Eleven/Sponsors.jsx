import React from 'react'
import ms from '../../assets/partners/microsoft.jpeg'
import sk from '../../assets/partners/siberkoza.jpg'
import nastp from '../../assets/partners/nastp.jpg'

function Sponsors() {
  return (
    <>
      <div id='partners' className="mx-auto flex flex-col space-y-4 ">
        <div className="text-3xl font-bold font-roboto mb-4 mx-auto mt-10 ">
          <div>
            Our Partners
          </div>
          
        </div>
        
        <div className="flex flex-col lg:flex-row lg:space-x-10 xl:space-x-24 mx-auto space-y-8 md:space-y-12 lg:space-y-0">
          <img src={sk} alt="Siberkoza" className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-xl shadow-xl shadow-green-200 mx-auto hover:scale-125 transition-all duration-150 ease-linear" />
          <img src={nastp} alt="NASTP" className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-xl shadow-xl shadow-green-200 mx-auto hover:scale-125 transition-all duration-150 ease-linear" />
          <img src={ms} alt="Microsoft" className="h-32 w-44 md:h-40 md:w-56 lg:h-48 lg:w-72 rounded-xl shadow-xl shadow-green-200 mx-auto hover:scale-125 transition-all duration-150 ease-linear" />
        </div>
      </div>
    </>
  )
}

export default Sponsors
