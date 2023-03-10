import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-[#e7e7e7] mt-24'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#008adf] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                    {/* Adding fancy effect here - *react-typed* */}
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2.5'
                        strings={['B2B', 'B2C', 'SASS']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 mx-10'>Monitor your data analytics to increase revenue for B2B, B2C, & SASS platforms.</p>
                <button className='bg-[#008adf] hover:bg-sky-700 text-[#e7e7e7] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero