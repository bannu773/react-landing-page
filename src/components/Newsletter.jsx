import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-6 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4 '>
            <div className='lg:col-span-2'>
              <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold py-2 '>Want tips & tricks to optimize your Flow ?</h1>
              <p>Sign up to newsletter ans stay up to date </p>
            </div>
          <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full space-x-4 '>
              <input type="email" placeholder="Enter Email" className='p-3 flex w-full rounded-md text-black ' />
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Notify Me</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Newsletter