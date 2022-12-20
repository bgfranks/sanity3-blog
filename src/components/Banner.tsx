import React from 'react'

export default function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl'>Brandon's Blog</h1>
        <h2 className='mt-5 md:mt-0'>
          Welcome to my journey on becoming a{' '}
          <span className='underline decoration-4 decoration-[#32b9fa]'>
            software engineer
          </span>
        </h2>
      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        Learn new tech | Exerpience the debugging pains | Grow as an engineer
      </p>
    </div>
  )
}
