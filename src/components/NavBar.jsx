import React, { useState } from 'react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='bg-transparent absolute top-0 left-0 w-full z-50 shadow-lg shadow-gray-700 h-16 flex justify-center items-center '>

      {/* FOR DESKTOP */}
      <div className='hidden md:flex justify-around max-w-[500px] mx-auto gap-20 text-white '>
        <button className='cursor-pointer quicksand hover:scale-110 transition-transform duration-500 ease-in-out'>Explore</button>
        <button className='cursor-pointer quicksand hover:scale-110 transition-transform duration-500 ease-in-out'>About</button>
        <button className='cursor-pointer quicksand hover:scale-110 transition-transform duration-500 ease-in-out'>Login</button>
      </div>

      {/* FOR MOBILE */}
      <div className='block md:hidden w-full px-6 text-white relative '>
        <div className=''>

          <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer p-5'>
            {isOpen ? '✕' : '☰'}</button>
        </div>

        <div className={`absolute top-12 left-0 w-full bg-black/90 flex flex-col items-center gap-5 py-8 transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <button className='cursor-pointer quicksand text-lg w-full py-2 hover:bg-white/10'>Explore</button>
          <button className='cursor-pointer quicksand text-lg w-full py-2 hover:bg-white/10'>About</button>
          <button className='cursor-pointer quicksand text-lg w-full py-2 hover:bg-white/10'>Login</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar