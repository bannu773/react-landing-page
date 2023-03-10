import React from ' react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-col-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p className='py-2'>Lorem, ipsum dolor sit consectetur adipiscing elit. </p>
            <div className='flex md:w-[75%] justify-between my-6'>
                <FaDribbbleSquare size={30} />
                <FaInstagram  size={30}/>
                <FaTwitterSquare  size={30}/>
                <FaGithubSquare  size={30}/>
                <FaFacebookSquare  size={30}/>
                
            </div>
        </div>
    </div>
  )
}

export default Footer