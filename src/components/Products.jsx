import React from 'react'

export default function Products() {
  return (
    <div className='bg-black min-h-[500px] w-full '>
       <div className='flex flex-col md:flex-row sm:flex-row items-center justify-center min-h-[400px] w-full gap-20 '>
        <img src="/image/katana1.jpeg" alt="" className='h-[300px] md:h-[400px] w-auto object-contain rounded-lg shadow-xl shadow-gray-600 hover:scale-105 transition-transform duration-300 ease-in-out ' />
        {/* <h1 className="text-white rotate-90">Can You Feel The Sharpness</h1> */}
        <img src="/image/katana2.jpeg" alt="" className='h-[300px] md:h-[400px] w-auto object-contain rounded-xl shadow-xl shadow-gray-600 hover:scale-105 transition-transform duration-300 ease-in-out'/>
        {/* <h1 className='text-white rotate-90 '>Hover it</h1> */}
        <img src="/image/katana3.jpeg" alt="" className='h-[300px] md:h-[400px] w-auto object-contain rounded-lg shadow-xl shadow-gray-600 hover:scale-105 transition-transform duration-300 ease-in-out' />
        </div>
    </div>
  )
}
