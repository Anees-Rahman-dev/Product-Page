import React from 'react'

export default function Products() {
  return (
    <div className='bg-black min-h-[500px] w-screen '>
       <div className='flex flex-col md:flex-row sm:flex-row items-center justify-center min-h-[400px] w-full gap-20 '>
        <img src="/image/katana1.jpeg" alt="" className='h-[300px] md:h-[400px] w-auto object-contain ' />
        <img src="/image/katana2.jpeg" alt="" className='h-[300px] md:h-[400px] w-auto object-contain'/>
        <img src="/image/katana3.webp" alt="" className='h-[300px] md:h-[340px] w-auto object-contain' />
        </div>
    </div>
  )
}
