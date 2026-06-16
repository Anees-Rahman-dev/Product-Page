import React from 'react'

export default function Products() {
  return (
    <div className='bg-black min-h-[500px]'>
       <div className='flex flex-col md:flex-row items-center justify-center min-h-[400px] w-screen gap-20 '>
        <img src="/image/katana1.jpeg" alt="" className='h-[550px] w-auto object-contain ' />
        <img src="/image/katana2.jpeg" alt="" className='h-[550px] w-auto object-contain'/>
        <img src="/image/katana3.webp" alt="" className='h-[550px] w-auto object-contain' />
        </div>
    </div>
  )
}
