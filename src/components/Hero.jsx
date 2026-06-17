import React, { useEffect } from 'react'
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
export default function Hero() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])
    return (
        <div className="relative h-[70vh] md:[85vh] lg:h-screen w-full overflow-hidden">
            <video
                src="/video/katana.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover "
            />

            <div className="relative z-10 flex h-full min-h-screen flex-col justify-center px-6 md:px-16 text-white">
                <h1
                    data-aos="fade-up"
                    className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-300 via-black-300 to-black-800 bg-clip-text text-transparent">
                    Authentic <span className='bg-gradient-to-r from-gray-300 via-black-300 to-black-800 bg-clip-text text-transparent'> Katana</span>
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-4 text-lg md:text-xl quicksand">
                    Handcrafted Japanese Excellence
                </p>
            </div>
        </div>
    )
}
