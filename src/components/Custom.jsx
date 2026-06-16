import React from 'react'

export default function Custom() {
    return (
       <div className="bg-black w-screen min-h-[700px] flex justify-center items-center py-8 ">
  <div className="flex flex-col md:flex-row items-center text-white gap-6 md:gap-0">
    <div className="px-3 bg-gray-900 transform-transition duration-400 hover:scale-105 rounded-2xl">
      <button className=' cursor-pointer p-8 md:p-20 text-lg md:text-2xl quicksand'>Build Your Katana</button>
    </div>

    <div className="hidden md:block h-14 bg-white rotate-[25deg] mx-10"></div>

    <div className="px-3 bg-gray-900 transform-transition duration-400 hover:scale-105 rounded-2xl">
      <button className=' cursor-pointer p-8 md:p-20 text-lg md:text-2xl quicksand'>Stands For Katana</button>
    </div>
  </div>
</div>
    )
}
