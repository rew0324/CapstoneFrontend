import React from 'react'
import peoples from '../../assets/peoples.png';

export default function About() {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={peoples} alt='cashFlow' />
            <div className='flex flex-col justify-center'>
                <p className='text-blue-700 font-bold '>Our story</p>
                <h1 className='text-blue-900 md:text-4xl sm:text-3xl text-2xl py-2 font-semibold'>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat cupidatat non. We are one of the reputable business advising and accountancy organisations for all of your corporate and personal tax needs. We provide high-end capability provided with a personal touch as a locally owned affiliate. We will work with you to reach your business goal, whether you want to expand your firm, or keep up your best work. We handle all of your accounting needs.                    
                </p>
                <button className='bg-[#fd6a00] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Read More</button>
            </div>
        </div>
    </div>
  )
}
