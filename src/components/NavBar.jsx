import React from 'react'

function NavBar() {
  return (
    <nav className='bg-transparent absolute top-0 left-0 w-full z-50 shadow-lg shadow-gray-700 h-16 flex justify-center items-center '>
        <div className='flex justify-around w-[500px] gap-20 text-white '>
            <button className='cursor-pointer quicksand hover:scale-110 transition-transform duration-500 ease-in-out'>Explore</button>
            <button className='cursor-pointer quicksand hover:scale-110 transition-transform duration-500 ease-in-out'>About</button>
            <button className='cursor-pointer quicksand hover:scale-110 transition-transform duration-500 ease-in-out'>Login</button>
        </div>
    </nav>
  )
}

export default NavBar