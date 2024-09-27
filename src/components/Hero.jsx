import React from 'react'
import Navbar from './Navbar'

function Hero() {
    return (
        <>
            <div className='relative'>
                <Navbar />
                <div className='w-full h-screen'>
                    <div className='relative z-12 top-[24vh] transform -translate-y-1/2'>
                        <img className="z-12 sm:h-64 h-52 absolute left-2/4 transform -translate-x-1/2" src="/hero_logo.gif" alt="" />
                    </div>
                    <div className='absolute'>
                        <h1 class="text-center absolute text-white sm:text-5xl top-[56vh] left-[55vh] w-[75vh] text-4xl font-semibold ">The campus club you love</h1>
                        <p className='text-center absolute text-white sm:text-xl top-[66vh] left-[55vh] w-[75vh] text-4xl opacity-30'>We make tech exuberant and open source. We know no limits.</p>
                    </div>
                    <img className='w-full h-screen' src="/herobg.png" alt="bg" />
                </div>
            </div>
        </>
    )
}

export default Hero