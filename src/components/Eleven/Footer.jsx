import React from 'react'

function Footer() {
  return (
    <>
    <div id="contact" className='w-full font-roboto bg-green-400 flex flex-col mt-16 mx-auto md:flex-row justify-evenly pb-3'>
        
        <div className='mt-7 flex flex-col space-y-2'>
          <div className='text-white text-xl font-semibold underline underline-offset-4 text-center md:text-left'>
            Our Address
          </div>
          <div className='text-white text-lg font-medium font-roboto text-center  md:text-left'>
            Siber Koza, NASTP Alpha,<br />Old Airport Rd, Old Chaklala Cantt,<br />Rawalpindi, Pakistan
          </div>
        </div>

        <div className='mt-7 flex flex-col space-y-2'>
          <div className='text-white text-xl font-semibold underline underline-offset-4 text-center md:text-left'>
            Contact Us
          </div>
          <div className='text-white text-lg font-medium text-center md:text-left'>
            <a href="">+92-3280565583</a>
          </div>
          <div className='text-white text-lg font-medium text-center md:text-left'>
            <a href="">eleven@ceventech.com</a>
          </div>
        </div>

      </div>
      <div className='w-full bg-green-500 text-center py-4'>
        <div className='text-white text-lg font-medium'>
          &copy; {new Date().getFullYear()} Ceven. All rights reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
