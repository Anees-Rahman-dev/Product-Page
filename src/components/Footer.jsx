import React from 'react'

export default function 
() {
  return (
    <div className='bg-gray-900 min-h-[400px] w-full'>
     <div className='bg-black min-h-[400px] flex justify-center flex-col md:flex-row items-start gap-10 md:gap-24 px-6 md:px-12  py-10 text-white  '>
         <div className='h-full py-4 px-5  flex flex-col gap-4'>
          <h1 className='quicksand text-xl font-semibold'>Main Menu</h1>
          <h3 className='quicksand'>Other Swrords</h3>
          <h3 className='quicksand'>Antique</h3>
          <h3 className='quicksand'>Accessories</h3>
          <h3 className='quicksand'>Samurai Armor</h3>
        </div>

        <div className='h-full py-4 px-5  flex flex-col gap-4'>
          <h1 className='quicksand text-xl font-semibold'>Info</h1>
          <h3 className='quicksand'>Privacy Policy</h3>
          <h3 className='quicksand'>Shipping</h3>
          <h3 className='quicksand'>Terms And Service</h3>
        </div>

        <div className='h-full py-4 px-5  flex flex-col gap-4'>
          <h1 className='quicksand text-xl font-semibold'>Contact Us</h1>
          
          <h3 className='quicksand'>Available 24/7</h3>
          <h3 className='quicksand'>Customer Service</h3>
          </div>
     </div>
    </div>
  )
}
